import React from "react";

const BrandLogo = ({ src, alt }) => {
  return (
    <div className="flex items-center">
      <img src={src} alt={alt} className="h-10 w-auto" />
    </div>
  );
};

export default BrandLogo;
