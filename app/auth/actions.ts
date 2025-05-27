'use server';

import { revalidatePath } from 'next/cache';
import { supabaseServer } from '@/lib/supabase/server';

export type SignupFormState = {
  error: string | null;
  success: string | null;
};

export async function signup(
  prevState: SignupFormState,
  formData: FormData
): Promise<SignupFormState> {
  const supabase = supabaseServer();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const displayName = formData.get('display_name') as string;
  const avatarFile = formData.get('avatar_url') as File;

  // 1. Sign up user with metadata
  const { data: signupData, error: authError } = await (await supabase).auth.signUp({
    email,
    password,
    options: {
      data: {
        user_name: displayName,
        avatar_url: '',
      },
    },
  });

  if (authError) {
    console.error('Sign up error:', authError.message);
    return { error: authError.message, success: null };
  }

  const user = signupData.user;
  if (!user) {
    return { error: 'No user returned after sign up.', success: null };
  }

  let avatarUrl = '';

  // 2. Upload avatar if provided
  if (avatarFile && avatarFile.size > 0) {
    const fileExt = avatarFile.name.split('.').pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    const { error: uploadError } = await (await supabase).storage
      .from('avatars')
      .upload(filePath, avatarFile, { upsert: true });

    if (uploadError) {
      console.error('Avatar upload error:', uploadError.message);
      return { error: 'Avatar upload failed: ' + uploadError.message, success: null };
    }

    const { data: urlData } = (await supabase).storage
      .from('avatars')
      .getPublicUrl(filePath);

    avatarUrl = urlData?.publicUrl ?? '';

    // 2b. Update auth user metadata with avatar_url
    const { error: metadataError } = await (await supabase).auth.admin.updateUserById(user.id, {
      user_metadata: {
        avatar_url: avatarUrl,
      },
    });

    if (metadataError) {
      console.error('Metadata update error:', metadataError.message);
    }
  }

  // 3. Insert profile into public.users table
  const { error: profileError } = await (await supabase)
    .from('users')
    .insert({
      id: user.id,
      email,
      display_name: displayName,
      avatar_url: avatarUrl,
    });

  if (profileError) {
    console.error('Profile insert error:', profileError.message);
    return { error: 'Failed to create user profile.', success: null };
  }

  // 4. Success
  revalidatePath('/');
  return {
    error: null,
    success: 'Signup successful! Please check your email to verify your account.',
  };
}
