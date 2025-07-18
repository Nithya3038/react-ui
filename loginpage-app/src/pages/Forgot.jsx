import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen font-body">
      <div className="w-full flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-soft w-full max-w-md border border-red-300">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Reset Password</h2>
          {submitted ? (
            <p className="text-center text-gray-700">
              If your email exists in our system, you'll receive a reset link shortly.
            </p>
          ) : (
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
              <button
                type="submit"
                className="w-full bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 transition duration-200"
              >
                Send Reset Link
              </button>
            </form>
          )}
          <div className="mt-4 text-center text-sm text-gray-600">
            <a href="/login" className="text-blue-300 hover:underline">
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
