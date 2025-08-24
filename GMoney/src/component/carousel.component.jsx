import React from "react";
import PrimaryButton from "./primaryButton";

const CarouselSlide = ({ image, title, subtitle, buttonText, onButtonClick }) => {
    return (
        <div
            className="relative w-full h-[500px] flex bg-cover items-center bg-center px-4 md:px-36"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="bg-black/40 absolute inset-0" />

            <div className="relative z-10 text-white max-w-2xl px-2 md:px-4">
                <h2 className="text-xl md:text-4xl font-bold mb-4 leading-snug whitespace-normal break-words">
                    {title}
                </h2>
                <p className="text-base md:text-xl mb-6 whitespace-normal break-words">
                    {subtitle}
                </p>
                <button
                    onClick={onButtonClick}
                    className="bg-[#e02a1d] hover:bg-red-700 text-white font-semibold px-4 md:px-6 py-2 rounded-lg shadow"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CarouselSlide;
