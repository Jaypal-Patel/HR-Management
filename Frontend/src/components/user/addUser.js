import { Col, Form, Row } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStaff } from "../../redux/rtk/features/user/userSlice";
import UserPrivateComponent from "../PrivateRoutes/UserPrivateComponent";
import { PlusOutlined } from "@ant-design/icons";

const AddUser = ({ currentStep, setCurrentStep }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [phoneAlter, setPhoneAlter] = useState(0);
  const [dob, setDob] = useState("");
  const [religion, setReligion] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [passport, setPassport] = useState("");
  const [visaType, setVisaType] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [agency, setAgency] = useState("");
  const [reference, setReference] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [passportAttach, setPassportAttach] = useState(null);
  const [cvAttach, setCvAttach] = useState(null);
  const [image, setImage] = useState(null);
  const [degree, setdegree] = useState("");
  const [institution, setinstitution] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [exCountry, setExCountry] = useState("");

  const [education, setEducation] = useState([
    { degree: "", institution: "", fieldOfStudy: "", startDate: "" },
  ]);
  const [experience, setExperience] = useState([
    { position: "", company: "", year: "", exCountry: "" },
  ]);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
    phoneAlter: "",
    dob: "",
    religion: "",
    bloodGroup: "",
    passport: "",
    visaType: "",
    arrivalDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    employeeId: "",
    joinDate: "",
    sponsor: "",
    agency: "",
    reference: "",
    departmentId: "",
    roleId: "",
    image: null,
    cvAttach: null,
    passportAttach: "",
    experiences: experience,
    educations: education,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onEducation = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    setEducation(updatedEducation);
    setFormData((prevData) => ({ ...prevData, educations: updatedEducation }));
  };

  const onExprience = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setExperience(updatedExperience);
    setFormData((prevData) => ({
      ...prevData,
      experiences: updatedExperience,
    }));
  };

  const onChange = (e) => {
    const { name, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    } else {
      const { value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const onFinish = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    setLoader(true);

    try {
      const resp = await dispatch(addStaff(formDataToSend));

      if (resp.payload.message === "success") {
        setLoader(false);
      } else {
        setLoader(false);
        console.log(resp.payload.message);
      }
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const department = ["Electrical", "Software", "Civil", "Mechanical", "IT"];
  const list = ["Web Developer", "App Developer"];

  return (
    <Fragment>
      <UserPrivateComponent permission={"create-user"}>
        <div className="px-5 max-h-[90vh] overflow-y-auto">
          <form
            form={form}
            name="basic"
            onSubmit={onFinish}
            autoComplete="off"
            encType="multipart/form-data"
          >
            {currentStep === 0 && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-6 txt-color">
                  User Information
                </h2>

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
                <label className=" text-gray-700 font-medium">
                  Mobile Number
                </label>
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
                <label className=" text-gray-700 font-medium">
                  Alternate Number
                </label>
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
                <label className=" text-gray-700 font-medium">
                  Date of Birth
                </label>
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
            )}
            {currentStep === 1 && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-6 txt-color">
                  Extra Information
                </h2>

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
                <label className="text-gray-700 font-medium">
                  Passport No.
                </label>
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
                <label className="text-gray-700 font-medium">
                  Date of Arrival
                </label>
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
                <label className="text-gray-700 font-medium">
                  Attach Passport Copy
                </label>
                <input
                  type="file"
                  name="passportAttach"
                  onChange={onChange}
                  required
                  className="block w-full p-2 border rounded mb-4"
                />
              </div>
            )}
            {currentStep === 2 && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-6 txt-color">
                  Address Information
                </h2>

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
            )}
            {currentStep === 3 && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-6 txt-color">
                  Employee Information
                </h2>

                {/* Employee Number */}
                <label className="text-gray-700 font-medium">
                  Employee Number
                </label>
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
                <label className="text-gray-700 font-medium">
                  Joining Date
                </label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={onChange}
                  required
                  className="block w-full p-2 border rounded mb-4"
                />

                {/* Sponsor Name */}
                <label className="text-gray-700 font-medium">
                  Sponsor Name
                </label>
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
                <label className="text-gray-700 font-medium">
                  Reference Name
                </label>
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
            )}
            {currentStep === 4 && (
              <div className="text-left">
                <h2 className="text-xl font-bold mb-6 txt-color">
                  Year of Experience's
                </h2>

                {/* Experience Details */}
                {experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    {/* Position At */}
                    <label className="text-gray-700 font-medium">
                      Position At
                    </label>
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
                    <label className="text-gray-700 font-medium">
                      Company Name
                    </label>
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
            )}
            {currentStep === 5 && (
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
                    <label className="text-gray-700 font-medium">
                      Specialization
                    </label>
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
            )}
            {currentStep === 6 && (
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
            )}

            <Row justify="space-between mt-5">
              {currentStep > 0 && (
                <Col>
                  <button
                    size="large"
                    className="py-2 px-8 bg-gray-300 text-white rounded mt-5"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                </Col>
              )}
              <Col>
                {currentStep < 6 ? (
                  <button
                    className="py-2 px-10 bg-blue-500 text-white rounded mt-5"
                    size="large"
                    block
                    type="primary"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="py-2 px-3 bg-blue-500 text-white rounded mt-5"
                    size="large"
                    block
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    loading={loader}
                  >
                    Add New Staff
                  </button>
                )}
              </Col>
            </Row>
          </form>
        </div>
      </UserPrivateComponent>
    </Fragment>
  );
};

export default AddUser;
