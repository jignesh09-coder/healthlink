// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="p-6 bg-gray-200 flex flex-col items-center min-h-screen">
        <div className="font-bold text-5xl mb-6">Login</div>
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="email" className="font-semibold mb-1 text-gray-600">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Email" 
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" 
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label htmlFor="password" className="font-semibold mb-1 text-gray-600">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Password" 
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" 
            />
          </div>
          <button 
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full mb-4"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-600">New User? </span>
            <button
              className="text-blue-500 underline hover:text-blue-600"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
