'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabase/browser';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		const supabase = supabaseBrowser();
		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			setError(error.message);
		} else {
			router.push('/dashboard');
		}
	};

	return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-50 flex justify-center items-center">
		<div className="w-[400px] h-[300px] bg-white p-4 border border-gray-200 mx-auto mt-20 rounded-lg -translate-y-10 shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Login</h1>
			<form onSubmit={handleLogin} className="space-y-4">
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
				<button
					type="submit"
					className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-500 cursor-pointer transition-all"
				>
					Sign In
				</button>
			</form>
			<p className="mt-4 text-center text-sm">
				New user?{' '}
				<Link href="/signup" className="text-green-700 hover:underline">
					Sign up instead
				</Link>
			</p>
		</div>
        </div>
	);
}
