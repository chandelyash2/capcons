import Image from "next/image";
import React from "react";

const Founders = () => {
  return (
    <div className="flex items-center justify-between gap-20">
      <img
        src="https://assets.capcons.com/images/Founder2.png"
        alt="Pro1"
       
        className="object-center  lg:h-[600px]"
      />

      <img
        src="https://assets.capcons.com/images/Founder1.png"
        alt="Pro2"
      
        className="hidden lg:flex object-cover h-[600px] rounded-[20px]"
      />
    </div>
  );
};

export default Founders;
