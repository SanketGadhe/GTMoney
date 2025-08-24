import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, name, description, link }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            {/* Image */}
            <img src={image} alt={name} className="w-20 h-20 object-contain mb-3" />

            {/* Name (always visible) */}
            <h3 className="text-black font-semibold text-base md:text-lg mb-2">
                {name}
            </h3>

            {/* Extra details only on md+ screens */}
            <div className="hidden md:flex flex-col items-center gap-2">
                <p className="text-gray-600 text-sm">{description}</p>
                <Link
                    to={link}
                    className="text-[#e02a1d] font-medium hover:underline text-sm"
                >
                    Read More →
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
