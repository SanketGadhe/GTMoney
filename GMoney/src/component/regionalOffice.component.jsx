import React from "react";

const RegionalOffice = ({ officeData }) => {
    const { city, name, address, phone } = officeData;
    return (
        <div className="text-gray-800 text-sm leading-relaxed max-w-xs">
            {/* City Name */}
            <h3 className="font-semibold text-base mb-1">{city}</h3>

            {/* Company + Address */}
            <p className="whitespace-pre-line">{name}</p>

            <p className="whitespace-pre-line">{address}</p>

            {/* Phone */}
            {phone && phone.length > 0 && <p className="mt-1 flex">Ph : {
                phone.map((num, index) => (
                    <span key={index} className="flex">{num}{
                        index < phone.length - 1 ? <span>,&nbsp;</span> : null
                    }</span>
                ))
            }</p>}

        </div>
    );
};

export default RegionalOffice;
