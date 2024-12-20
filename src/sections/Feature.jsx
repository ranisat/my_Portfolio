import React from "react";
import { Element } from "react-scroll";
import { feature } from "../constants/data";

const Feature = () => {

  return (
    <section className="relative py-14 bg-[#160c41]">
      <Element name="about">
      <div className="container">
        <div className="flex flex-wrap items-center justify-evenly">
          {feature.map((data) => (
            <div key={data.id} className=" relative z-20">
              <div className="relative bgImgBtn line_after last:after:hidden ring-slate-300 shadow-2xl shadow-blue-800/90 ">
                <div className="innerBox relative px-6 py-6 z-20 rounded-full bg-gradient-to-b to-[#000256] via-[#01037c] from-[#585be0] border border-s2/30 shadow-inner boxShadow  transition-all duration-700 hover:bg-gradient-to-b hover:to-[#181ba7] hover:via-[#030669] hover:from-[#3d40d6]">
                  <img
                    src={data.icon}
                    alt=""
                    className="h-10 transition-all duration-500 hover:rotate-180"
                  />
                </div>
                <div className="w-[120px] h-[120px] absolute -top-2 -right-2 block p-2 transition-all duration-500 bg-gradient-to-t to-[#160c41]  from-[#160c41] hover:bg-gradient-to-t hover:to-s1  hover:from-s2 
               opacity-90 blur-[2px] -z-20 rounded-full last-of-type:after:hidden">
                <div className="w-full h-full bg-p1 rounded-full"></div>
               </div>
              </div>
              <h2 className="text-center text-textClr mt-5 font-semibold uppercase">
                {data.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Feature;
