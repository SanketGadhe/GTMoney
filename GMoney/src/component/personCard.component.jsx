import React from "react";

const PersonCard = ({person}) => {
  const { name, title, image } = person;
  console.log(person);
  return (
    <div className="bg-[#3666a0] text-white rounded-xl shadow-md p-4 flex flex-col items-center text-center w-56 h-72">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-44 h-44 object-cover rounded-lg mb-4"
      />

      {/* Name */}
      <h3 className="font-semibold text-sm">{name}</h3>

      {/* Profession */}
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default PersonCard;
