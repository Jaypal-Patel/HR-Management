import React from "react";

function AddressInfo({ formData, onChange }) {
  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 txt-color">Address Information</h2>

      {/* Street */}
      <label className="text-gray-700 font-medium">Street</label>
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={onChange}
        placeholder="123 Main Street"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* City */}
      <label className="text-gray-700 font-medium">City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={onChange}
        placeholder="Los Angeles"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* State */}
      <label className="text-gray-700 font-medium">State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={onChange}
        placeholder="CA"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Zip Code */}
      <label className="text-gray-700 font-medium">Zip Code</label>
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={onChange}
        placeholder="90211"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Country */}
      <label className="text-gray-700 font-medium">Country</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={onChange}
        placeholder="USA"
        required
        className="block w-full p-2 border rounded mb-4"
      />
    </div>
  );
}

export default AddressInfo;
