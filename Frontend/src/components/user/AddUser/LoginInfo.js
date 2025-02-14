import React from "react";

function LoginInfo({ formData, onChange }) {
  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Login Information
      </h2>

      {/* Username */}
      <label className="text-gray-700 font-medium">Username</label>
      <input
        type="text"
        name="userName"
        value={formData.userName}
        onChange={onChange}
        placeholder="Doe_"
        required
        className="block w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-blue-500"
      />

      {/* Password */}
      <label className="text-gray-700 font-medium">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Enter your password"
        required
        className="block w-full p-2 border rounded mb-4 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default LoginInfo;
