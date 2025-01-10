import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black py-16">
      <form className="w-[420px] px-9 py-14 bg-white shadow-md rounded-lg">
        <div className="flex justify-center items-center mt-6">
          <div>
            <img
              src="https://assets.website-files.com/605cafd386800b11a2721486/6111188e50ce77186259a0fa_januar-logo-iconmark.svg"
              alt="logo"
            />
          </div>
        </div>
        <h1 className="mt-10 text-center text-2xl">Welcome</h1>
        <p className="mt-6 text-center text-gray-800">
          Log in to Januar to continue to Januar's Webapp.
        </p>
        {/* Email Input */}
        <div className="relative mb-4 mt-4">
          <input
            type="email"
            id="email"
            className="peer w-full px-4 py-3 border border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder=" " // Important: Leave a blank placeholder for the floating effect
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 -mt-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2/4 peer-placeholder-shown:text-base peer-focus:bg-white peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:px-1 peer-focus:text-blue-500"
          >
            Email Address*
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            className="peer w-full px-4 py-3 border border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-2/3 -mt-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2/4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:px-1 peer-focus:bg-white "
          >
            Password*
          </label>
        </div>

        <p className="text-blue-500 mb-6 font-bold cursor-pointer">
          Forgot Password?
        </p>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#b0e06c] text-white py-3 px-4 rounded-sm hover:bg-[#96ca51] transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
