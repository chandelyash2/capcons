import Image from "next/image";
import React from "react";

const Founders = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      <Image
        src="https://assets.capcons.com/images/Founder.png"
        alt="Pro1"
        width={700}
        height={350}
        className="object-center lg:h-[500px]"
      />

      <Image
        src="https://assets.capcons.com/images/Founder1.png"
        alt="Pro2"
        width={700}
        height={440}
        className="hidden lg:flex object-cover h-[500px] rounded-[20px]"
      />
    </div>
  );
};

export default Founders;
