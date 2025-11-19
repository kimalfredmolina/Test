import React from "react";
import { Link } from "react-router-dom";


function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Homepage
      </h1>
      <Link to="/login">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-500 transition">
          Click Me
        </button>
      </Link>
    </div>
  )
}

export default App
