import React from "react";

function ExtraInfo({ formData, onChange }) {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 txt-color">Extra Information</h2>

      {/* Religion */}
      <label className="text-gray-700 font-medium">Religion</label>
      <input
        type="text"
        name="religion"
        value={formData.religion}
        onChange={onChange}
        placeholder="Hindu"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Blood Group */}
      <label className="text-gray-700 font-medium">Blood Group</label>
      <select
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4"
      >
        <option value="">Select Blood Group</option>
        {bloodGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>

      {/* Passport No */}
      <label className="text-gray-700 font-medium">Passport No.</label>
      <input
        type="text"
        name="passport"
        value={formData.passport}
        onChange={onChange}
        placeholder="00000000"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Visa Type */}
      <label className="text-gray-700 font-medium">Visa Type</label>
      <input
        type="text"
        name="visaType"
        value={formData.visaType}
        onChange={onChange}
        placeholder="Tourist / Work / Student"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Date of Arrival */}
      <label className="text-gray-700 font-medium">Date of Arrival</label>
      <input
        type="date"
        name="arrivalDate"
        value={formData.arrivalDate}
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* CV Attach */}
      <label className="text-gray-700 font-medium">Attach CV</label>
      <input
        type="file"
        name="cvAttach"
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Passport Copy Attach */}
      <label className="text-gray-700 font-medium">Attach Passport Copy</label>
      <input
        type="file"
        name="passportAttach"
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4"
      />
    </div>
  );
}

export default ExtraInfo;
