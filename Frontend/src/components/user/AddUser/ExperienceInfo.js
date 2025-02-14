import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function DesignationInfo({ experience, onExprience }) {
  const shift = useSelector((state) => state.shift?.list);
  const designation = useSelector((state) => state.designations?.list);

  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 txt-color">Year of Experience's</h2>

      {/* Experience Details */}
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          {/* Position At */}
          <label className="text-gray-700 font-medium">Position At</label>
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={(e) => onExprience(index, e)}
            placeholder="Software Engineer"
            required
            className="block w-full p-2 border rounded mb-4"
          />

          {/* Company Name */}
          <label className="text-gray-700 font-medium">Company Name</label>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => onExprience(index, e)}
            placeholder="TechPanda Pvt Ltd."
            required
            className="block w-full p-2 border rounded mb-4"
          />

          {/* Year */}
          <label className="text-gray-700 font-medium">Year</label>
          <input
            type="month"
            name="year"
            value={exp.year}
            onChange={(e) =>
              onExprience(index, {
                target: { name: "year", value: e.target.value },
              })
            }
            required
            className="block w-full p-2 border rounded mb-4"
          />

          {/* Country */}
          <label className="text-gray-700 font-medium">Country</label>
          <input
            type="text"
            name="exCountry"
            value={exp.exCountry}
            onChange={(e) => onExprience(index, e)}
            placeholder="India"
            required
            className="block w-full p-2 border rounded mb-4 pb-5 border-b"
          />
        </div>
      ))}

      {/* Add Experience */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
          onClick={() => onExprience(experience.length)}
        >
          <PlusOutlined className="mr-2" />
          Add Experience Information
        </button>
      </div>
    </div>
  );
}

export default DesignationInfo;
