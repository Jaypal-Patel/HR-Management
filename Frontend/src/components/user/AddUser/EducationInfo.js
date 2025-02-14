import React from "react";
import { PlusOutlined } from "@ant-design/icons";

function EducationInfo({ education, onEducation }) {
  return (
    <div className="text-left">
      <h2 className="text-xl font-bold mb-6 txt-color">
        Education Information
      </h2>

      {/* Education Details */}
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          {/* Academic Education */}
          <label className="text-gray-700 font-medium">
            Academic Education
          </label>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => onEducation(index, e)}
            placeholder="e.g. B.Tech, M.Sc"
            required
            className="block w-full p-2 border rounded mb-4"
          />

          {/* Technical Education */}
          <label className="text-gray-700 font-medium">
            Technical Education
          </label>
          <input
            type="text"
            name="institution"
            value={edu.institution}
            onChange={(e) => onEducation(index, e)}
            placeholder="e.g. Diploma, Certification"
            required
            className="block w-full p-2 border rounded mb-4"
          />

          {/* Specialization */}
          <label className="text-gray-700 font-medium">Specialization</label>
          <input
            type="text"
            name="fieldOfStudy"
            value={edu.fieldOfStudy}
            onChange={(e) => onEducation(index, e)}
            placeholder="e.g. Computer Science, Mechanical Engineering"
            required
            className="block w-full p-2 border rounded mb-4"
          />

          {/* Year of Completion */}
          <label className="text-gray-700 font-medium">
            Year of Completion
          </label>
          <input
            type="month"
            name="startDate"
            value={edu.startDate}
            onChange={(e) =>
              onEducation(index, {
                target: { name: "startDate", value: e.target.value },
              })
            }
            required
            className="block w-full p-2 border rounded mb-4 pb-5 border-b"
          />
        </div>
      ))}

      {/* Add Education */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
          onClick={() => onEducation(education.length)}
        >
          <PlusOutlined className="mr-2" />
          Add Education Information
        </button>
      </div>
    </div>
  );
}

export default EducationInfo;
