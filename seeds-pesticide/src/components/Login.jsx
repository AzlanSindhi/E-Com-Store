import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-md w-80">
                <h1 className="text-2xl font-bold mb-2">Login Page</h1>
                <h4 className="text-gray-600 mb-4">Login to access your account</h4>

                <form className="flex flex-col space-y-3">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
