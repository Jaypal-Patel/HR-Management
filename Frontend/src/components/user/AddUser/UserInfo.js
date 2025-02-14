import React, { useState } from "react";

function UserInfo({ formData, onChange }) {
  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 txt-color">User Information</h2>

      {/* Full Name */}
      <label className=" text-gray-700  font-medium">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={onChange}
        placeholder="John Doe"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Email */}
      <label className=" text-gray-700 font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        placeholder="johndoe@example.com"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Mobile Number */}
      <label className=" text-gray-700 font-medium">Mobile Number</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        placeholder="0000000000"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Alternate Number */}
      <label className=" text-gray-700 font-medium">Alternate Number</label>
      <input
        type="text"
        name="phoneAlter"
        value={formData.phoneAlter}
        onChange={onChange}
        placeholder="0000000000"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Date of Birth */}
      <label className=" text-gray-700 font-medium">Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={onChange}
        required
        className="block p-2 border rounded mb-4"
      />

      {/* Image Upload */}
      <label className=" text-gray-700 font-medium">Image</label>
      <input
        type="file"
        path="image"
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4"
      />
    </div>
  );
}

export default UserInfo;
