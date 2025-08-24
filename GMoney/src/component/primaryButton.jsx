import React from "react";

const PrimaryButton = ({ children, onClick, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-[#e02a1d] text-white px-5 py-2 rounded-md shadow-md transition-colors duration-200 hover:bg-[#c92215] active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
