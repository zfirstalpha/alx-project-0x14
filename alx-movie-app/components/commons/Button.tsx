import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text = "Click", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
};

export default Button;
