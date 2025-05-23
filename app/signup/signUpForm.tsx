'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabase/browser';

export default function SignUpForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	// const router = useRouter();

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		const supabase = supabaseBrowser();
		const { error } = await supabase.auth.signUp({ email, password });

		if (error) {
			setError(error.message);
		} else {
			setSuccess('Check your email to confirm your account!');
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full bg-gray-50 flex justify-center items-center">
		<div className="w-[400px] h-[300px] bg-white p-4 border border-gray-200 mx-auto mt-20 rounded-lg -translate-y-10 shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Sign Up</h1>
			<form onSubmit={handleSignUp} className="space-y-4">
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					className="w-full px-3 py-2 border border-gray-200 focus:border-green-700 focus:ring-green-700 outline-0 rounded"
					required
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className="w-full px-3 py-2 border border-gray-200 focus:border-green-700 focus:ring-green-700 outline-0 rounded"
					required
				/>
				{error && <p className="text-red-500">{error}</p>}
				{success && <p className="text-green-500">{success}</p>}
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
