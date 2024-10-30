import React from "react";

// Define the types for the props
interface ProjectTagProps {
  name: string; // name of the tag
  onClick: (name: string) => void; // function to handle click event
  isSelected: boolean; // boolean to determine if the tag is selected
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
      aria-pressed={isSelected} // Accessibility improvement
    >
      {name}
    </button>
  );
};

export default ProjectTag;
