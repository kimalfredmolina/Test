import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col items-center mt-12'>
        <div className="bg-white p-8 rounded-lg shadow-2xl w-96 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Login into account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Email Address"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Password"/>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-500 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded-lg shadow-green-500/50 hover:bg-green-600 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login