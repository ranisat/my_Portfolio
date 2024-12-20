import React from "react";

const Button = ({title, icon}) => {
  return (
    <div className="relative bgImgBtn">
      <button className="relative innerBox w-[180px] max-lg:[150px] h-[48px] bg-p1 rounded-full py-2  shadow-inner drop-shadow-xl transition-all duration-200  bg-[linear-gradient(#6e79fb,#ffffff00_50%,#0000004d_50%,#5c77e2de)] btn-before btn-after ">
        <span className="font-medium text-[16px] max-lg:text-[14px] px-4 flex items-center justify-center gap-1 uppercase text-white">
          {title} {icon}
        </span>
      </button>
    </div>
  );
};

export default Button;
