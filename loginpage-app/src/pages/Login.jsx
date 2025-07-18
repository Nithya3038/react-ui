import React from 'react';
import {FaGoogle, FaFacebookF, FaTwitter} from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password ) {
            navigate('/home');
    }
}
    return (
         <div className="flex min-h-screen font-body">
          <div className="w-full flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-soft w-full max-w-md border border-red-300">
                <div className="flex justify-center gap-4 mb-4">
               
          <button className="border p-2 rounded-full hover:bg-red-100">
            <FaFacebookF className="text-xl text-blue-500" />
          </button>
           <button className="border p-2 rounded-full hover:bg-red-100">
            <FaGoogle className="text-xl text-red-500" />
          </button>
          <button className="border p-2 rounded-full hover:bg-red-100">
            <FaTwitter className="text-xl text-blue-500" />
          </button>
              </div>
           <div className="flex items-centre gap-2 mb-6">
            <hr className="flex-grow border-gray-300"/>
            <span className="text-sm text-gray-500 ">OR</span>
            <hr className="flex-grow border-gray-300"/>
           </div>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 transition duration-200"
                >
                  Sign in
                </button>
            
            </form>
             
            
            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </p>
                 <p>
            <a href="/forgot" className="text-red-400 hover:underline">
              Forgot password?
            </a>
          </p>
            </div>
        </div>
        </div>
    </div>
    );
};
export default Login;

