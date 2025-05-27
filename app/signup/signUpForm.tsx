'use client';

import { useActionState, useState } from 'react';
import Link from 'next/link';
// import { supabaseBrowser } from '@/lib/supabase/browser';
import Image from 'next/image';
// import { useFormState } from 'react-dom';
import { signup } from '../auth/actions';

export default function SignUpForm() {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [displayName, setDisplayName] = useState('');
	// const [avatarFile, setAvatarFile] = useState<File | null>(null);
	// const [avatarFileURL, setAvatarFileURL] = useState <string> ("");
	// const [error, setError] = useState('');
	// const [success, setSuccess] = useState('');

	const [state, formAction] = useActionState(signup, { error: null, success: null });
  	const [avatarPreview, setAvatarPreview] = useState('');

	// const handleSignUp = async (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	setError('');
	// 	setSuccess('');

	// 	const supabase = supabaseBrowser();
	// 	const { data, error: signUpError } = await supabase.auth.signUp({
	// 		email,
	// 		password,
	// 	});

	// 	if (signUpError) {
	// 		setError(signUpError.message);
	// 		console.log("Error 1");
	// 		return;
	// 	}

	// 	const user = data.user;
	// 	if (!user) {
	// 		setError('User not returned from sign-up.');
	// 		return;
	// 	}

	// 	// Upload avatar image if provided
	// 	let avatarUrl = '';
	// 	if (avatarFile) {
	// 		const fileExt = avatarFile.name.split('.').pop();
	// 		const fileName = `${user.id}.${fileExt}`;
	// 		const filePath = `avatars/${fileName}`;

	// 		const { error: uploadError } = await supabase.storage
	// 			.from('avatars')
	// 			.upload(filePath, avatarFile, { upsert: true });

	// 		if (uploadError) {
	// 			setError('Failed to upload avatar: ' + uploadError.message);
	// 			return;
	// 		}

	// 		const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(filePath);
	// 		avatarUrl = urlData?.publicUrl || '';
	// 	}

	// 	// Insert profile into database
	// 	const { error: profileError } = await supabase.from("users").insert([
	// 		{
	// 			id: user.id,
	// 			email,
	// 			display_name: displayName,
	// 			avatar_url: avatarUrl,
	// 		},
	// 	]);

	// 	if (profileError) {
	// 		setError('Sign-up succeeded but failed to save profile info: ' + profileError.message);
	// 	} else {
	// 		setSuccess('Check your email to confirm your account!');
	// 	}
	// };

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-gray-50 flex justify-center items-center">
			<div className="w-[400px] bg-white p-4 border border-gray-200 mx-auto mt-20 rounded-lg -translate-y-10 shadow-lg">
				<h1 className="text-2xl font-bold mb-4">Sign Up</h1>
				<form 
					action={formAction}
					// onSubmit={handleSignUp} 
					className="space-y-4">
					<input
						type="email"
						// value={email}
						name='email'
						// onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						className="w-full px-3 py-2 border border-gray-200 focus:border-green-700 focus:ring-green-700 outline-0 rounded"
						required
					/>
					<input
						name='password'
						type="password"
						// value={password}
						// onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						className="w-full px-3 py-2 border border-gray-200 focus:border-green-700 focus:ring-green-700 outline-0 rounded"
						required
					/>
					<input
						type="text"
						name='display_name'
						// value={displayName}
						// onChange={(e) => setDisplayName(e.target.value)}
						placeholder="Display Name"
						className="w-full px-3 py-2 border border-gray-200 focus:border-green-700 focus:ring-green-700 outline-0 rounded"
						required
					/>
					<div className="flex gap-x-2 items-center justify-between">
						<label htmlFor="image" className='w-auto h-full'>
							{/* {avatarFileURL === "" ?  */}
							{avatarPreview === "" ? 
								<div className='h-11 w-11 rounded-full bg-gray-400 border-0'></div> : 
								<Image src={avatarPreview} width={44} height={44} className='rounded-full' alt='avatar_image'></Image>
								// <Image src={avatarFileURL} width={44} height={44} className='rounded-full' alt='avatar_image'></Image>
							}
						</label>
						<input
							type="file"
							accept="image/*"
							onChange={(e) => {
								// setAvatarFile(e.target.files?.[0] || null);
								const file = e.target.files?.[0];
								if(file){
									const imageURL = URL.createObjectURL(file);
									setAvatarPreview(imageURL);
									// setAvatarFileURL(imageURL);
								}
							}}
							className="w-full text-sm cursor-pointer" name='image'
						/>
					</div>
					{/* {error && <p className="text-red-500">{error}</p>}
					{success && <p className="text-green-500">{success}</p>} */}
					{state.error && <p className="text-red-500">{state.error}</p>}
					{state.success && <p className="text-green-500">{state.success}</p>}
					<button
						type="submit"
						className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-500 cursor-pointer transition-all"
					>
						Sign Up
					</button>
				</form>
				<p className="mt-4 text-center text-sm">
					Already have an account?{' '}
					<Link href="/login" className="text-green-700 hover:underline">
						Log in instead
					</Link>
				</p>
			</div>
		</div>
	);
}