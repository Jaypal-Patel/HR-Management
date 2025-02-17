import React from "react";

function EmployeeInfo({ formData, onChange }) {
  const department = ["Electrical", "Software", "Civil", "Mechanical", "IT"];
  const list = ["Web Developer", "App Developer"];

  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 txt-color">Employee Information</h2>

      {/* Employee Number */}
      <label className="text-gray-700 font-medium">Employee Number</label>
      <input
        type="text"
        name="employeeId"
        value={formData.employeeId}
        onChange={onChange}
        placeholder="OE-012"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Joining Date */}
      <label className="text-gray-700 font-medium">Joining Date</label>
      <input
        type="date"
        name="joinDate"
        value={formData.joinDate}
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Sponsor Name */}
      <label className="text-gray-700 font-medium">Sponsor Name</label>
      <input
        type="text"
        name="sponsor"
        value={formData.sponsor}
        onChange={onChange}
        placeholder="Sponsor Name"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Agency Name */}
      <label className="text-gray-700 font-medium">Agency Name</label>
      <input
        type="text"
        name="agency"
        value={formData.agency}
        onChange={onChange}
        placeholder="Agency Name"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Reference Name */}
      <label className="text-gray-700 font-medium">Reference Name</label>
      <input
        type="text"
        name="reference"
        value={formData.reference}
        onChange={onChange}
        placeholder="Reference Name"
        required
        className="block w-full p-2 border rounded mb-4"
      />

      {/* Department */}
      <label className="text-gray-700 font-medium">Department</label>
      <select
        name="departmentId"
        value={formData.departmentId}
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4 bg-white"
      >
        <option value="">Select Department</option>
        {department.map((dept, index) => (
          <option key={index} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      {/* Profession */}
      <label className="text-gray-700 font-medium">Profession</label>
      <select
        name="roleId"
        value={formData.roleId}
        onChange={onChange}
        required
        className="block w-full p-2 border rounded mb-4 bg-white"
      >
        <option value="">Please select</option>
        {list.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EmployeeInfo;
