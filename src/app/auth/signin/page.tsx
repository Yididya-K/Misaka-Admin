"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Mock authentication function
        if (email === 'test@example.com' && password === 'password') {
            
            router.push("/");
            alert('Login successful!');
           
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="mt-20 md:mt-56">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1609710219374-f9ab04af099b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                <h1 className="text-green-700 text-center font-mono md:text-4xl text-2xl"  style={{ fontFamily: 'Shrikhand, sans-serif' }}>
          Misa<span className="text-orange-500"> &rsquo;ka</span>
        </h1>
                   
                    
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <span className="text-xs text-center text-gray-500 uppercase"> Admin log in</span>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-4 text-center">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input 
                                type="email"
                                className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-400 rounded-xl py-2 px-4 block w-full appearance-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <a href="/auth/forget" className="text-xs text-gray-500">Forget Password?</a>
                            </div>
                            <input
                                type="password"
                                className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-400 rounded-xl py-2 px-4 block w-full appearance-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-8">
                            <button 
                                type="submit" 
                                className="bg-green-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-green-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
