import React from "react";

const ProgressItem = ({ text, isActive, isCompleted }) => {
  const borderColor = isActive ? "border-green-600" : "border-zinc-500";
  const textColor = isActive ? "text-green-600" : "text-neutral-600";

  return (
    <div
      className={`px-3 py-1.5 whitespace-nowrap bg-white rounded border-2 ${borderColor} border-solid ${textColor}`}
    >
      {text}
    </div>
  );
};

const Separator = ({ isActive }) => (
  <div
    className={`shrink-0 my-auto h-px border border-solid ${isActive ? "border-green-600" : "border-neutral-600"} w-[55px]`}
  />
);

const ProgressBar = () => {
  const steps = [
    { text: "Assessment", isActive: true, isCompleted: true },
    { text: "Interview 1", isActive: true, isCompleted: false },
    { text: "Interview 2", isActive: false, isCompleted: false },
    { text: "Offer letter", isActive: false, isCompleted: false },
  ];

  return (
    <nav
      className="flex flex-wrap self-center max-w-full text-base font-semibold w-[617px]"
      aria-label="Application Progress"
    >
      {steps.map((step, index) => (
        <React.Fragment key={step.text}>
          {index > 0 && (
            <Separator isActive={step.isActive || steps[index - 1].isActive} />
          )}
          <ProgressItem {...step} />
        </React.Fragment>
      ))}
    </nav>
  );
};

export default ProgressBar;
