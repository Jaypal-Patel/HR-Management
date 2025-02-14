import React from "react";

const Sidebar = ({ setCurrentStep }) => {
  const steps = [
    {
      label: "User Info",
      icon: <i class="fa-solid fa-user"></i>,
    },
    {
      label: "Extra Info",
      icon: <i class="fa-solid fa-user-plus"></i>,
    },
    {
      label: "Address Info",
      icon: <i class="fa-solid fa-location-dot"></i>,
    },
    {
      label: "Employee Info",
      icon: <i class="fa-solid fa-user-tie"></i>,
    },
    {
      label: "Experience Info",
      icon: <i class="fa-solid fa-layer-group"></i>,
    },
    {
      label: "Education Info",
      icon: <i class="fa-solid fa-user-graduate"></i>,
    },
    {
      label: "Login Info",
      icon: <i class="fa-solid fa-right-to-bracket"></i>,
    },
  ];

  return (
    <div className="w-full h-[90vh] bg-white shadow-lg p-5">
      <div className="space-y-2">
        {steps.map((step, index) => (
          <nav
            key={index}
            onClick={() => setCurrentStep(index)}
            className="flex items-center gap-2 p-2 hover:bg-indigo-100 rounded cursor-pointer text-base"
          >
            <span className="text-lg">{step.icon} </span>
            {step.label}
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
