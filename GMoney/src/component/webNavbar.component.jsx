import React from "react";
import { NavLink } from "react-router-dom";

const WebNavbar = ({ links, vertical }) => {
    return (
        <ul className="flex items-center gap-6 font-medium" style={{ flexDirection: vertical ? 'column' : 'row' }}>
            {links.map((link, index) => (
                <li key={index} >
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `transition-colors duration-200 ${isActive ? "text-[#e02a1d] font-semibold" : "text-gray-800 hover:text-[#e02a1d]"
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default WebNavbar;
