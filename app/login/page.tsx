// app/login/page.tsx
import { supabaseServer } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import LoginForm from './loginForm';

export default async function LoginPage() {
	const supabase = supabaseServer();
	const { data: { user } } = await (await supabase).auth.getUser();

	if (user) {
		// User is already logged in
		redirect('/dashboard');
	}

	// Show login form
	return <LoginForm />;
}
