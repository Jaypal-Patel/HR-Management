import { Navigate } from "react-router-dom";
import Sidebar from "./SideBar/sideBar";
import AddUser from "./addUser";
import { useState } from "react";

const UserList = (props) => {
  const isLogged = Boolean(localStorage.getItem("isLogged"));
  const [currentStep, setCurrentStep] = useState(0);

  if (!isLogged) {
    return <Navigate to={"/admin/auth/login"} replace={true} />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <aside className="w-1/5 min-w-[250px] bg-gray-100">
        <Sidebar setCurrentStep={setCurrentStep} />
      </aside>

      {/* Main Content Section */}
      <main className="w-4/5 p-6">
        <AddUser currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </main>
    </div>
  );
};

export default UserList;
