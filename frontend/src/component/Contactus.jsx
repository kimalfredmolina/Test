import React from 'react';

const Contactus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-400 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>

        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
