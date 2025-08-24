import React from "react";
import PrimaryButton from "./PrimaryButton";

const InfoCard = ({ image, title, subtitle, onButtonClick }) => {
  return (
    <div className="bg-[#eaeff7] rounded-2xl shadow-md overflow-hidden max-w-sm">
      {/* Image */}
      <img src={image} alt="card" className="w-full object-cover" />

      {/* Content */}
      <div className="p-4 flex flex-col items-start gap-3">
        <h2 className="text-[#0e4691] text-lg font-bold leading-snug">
          {title}
        </h2>
        <p className="text-black text-sm">{subtitle}</p>

        <PrimaryButton onClick={onButtonClick}>
          Read More
        </PrimaryButton>
      </div>
    </div>
  );
};

export default InfoCard;
