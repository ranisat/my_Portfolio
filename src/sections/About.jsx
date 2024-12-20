import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

import { tabs } from "../constants/data";
import { Element } from "react-scroll";

const About = () => {
  const [activetab, setActivetab] = useState(0);

  const info = [
    {
      id: "1",
      title: "Front-end developer",
      skills: [
        "HTML / CSS3",
        "javaScript (ES6)",
        "ReactJS",
        "NextJS",
        "TailwindCSS",
        "Bootstrap",
        "REST API",
        "Version Control",
      ],
    },
    {
      id: "2",
      title: "Website Design",
      skills: [
        "Pen and Paper",
        "Adobe Photoshop",
        "HTML/CSS",
        "Bootstrap",
        "Creativity",
        "Resposive Design",
        "Web Performance Optimization:"
      ],
    },
    {
      id: "3",
      title: "UI/UX Developer",
      skills: [
        "Information Architecture",
        "Pen and Paper",
        "Adobe Photoshop",
        "Figma",
        "Canva",
        "Typography, Prototyping, color, spacing"
      ],
    },
   
    {
      id: "4",
      title: "Responsive Design",
      skills: [
        "Flexible Images & Media",
        "Media Queries",
        "CSS Flexbox/Grid",
        "Viewport Units",
        "Relative Sizing",
        "Image Optimization",
        "Responsive Design Mode",
        "Testing Tools"
      ],
    },
    {
      id: "5",
      title: "Creativity",
      skills: [
        "User-Centered Design",
        "Empathy & Observation",
        "Idea Generation",
        "Visual Design",
        "Creative Problem-Solving",
        "Tools & Techniques"
      ],
    },
    {
      id: "6",
      title: "Tools",
      skills: [
        "Adobe Photoshop",
        "Figma",
        "Canva",
        "Prototyping Tools",
        "Typography, Prototyping, color, spacing"
      ],
    },
  ];

  return (
    <Element name="about">
    <section className="relative py-20 bg-p1">
      <div className="container">
        <div className="text-center mb-14">
        <h2 className='h3 text-white font-bold mb-5'>About Us</h2>
        <p className='para mb-10'>It has been an absolute pleasure to put my heart and soul into these projects. <br/> While you're here, browse these projects.</p>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-2 text-white w-full">
              {tabs.map((tab, index) => {
                return (
                  <div onClick={() => setActivetab(index)}
                    key={`tab_${index}`}
                    className={`${
                      activetab === index ? "border-b-8 border-b-s1/80  border-t-8 border-t-s1/80 text-white" : ""
                    } px-4 max-lg:px-2 py-4 rounded-3xl cursor-pointer text-center  bg-gradient-to-b to-[#030454] via-[#010356] from-[#020566] border-t-8 border-t-s2/30 border-b-8 border-b-s2/30   boxShadow min-w-[48%] max-lg:min-w-[100%] mb-5 transition-all duration-500 hover:border-1 hover:border-s3/80`}>
                      <div className={`${activetab === index ? "bg-s1/80 text-white" : ""} rounded-full bg-s2/15 text-white w-12 h-12 -ml-2 flex items-center justify-center rotate-45  border-b-4 border-b-s2/60`}>
                    <p className=" font-extrabold text-2xl -rotate-45">{index+1}</p>
                  </div>
                    <div className="mx-auto mb-5 ">
                      <img src={tab.icon} alt="" className="h-16 mx-auto"/>
                    </div>
                   <h2 className="text-[20px] max-lg:text-xl font-medium text-white/70 w-[50%] text-wrap mx-auto">{tab.name}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-t to-[#030454] via-[#010356] from-[#020566] px-8 py-10 w-[90%] mx-auto text-white rounded-3xl border border-s2/30  border-t-8 border-t-s2/30  border-b-8 border-b-s2/30 relative shadow-lg shadow-blue-900/30 overflow-hidden transition-all duration-500 h-[98%]">
              {info.map((info, index) => {
                if (activetab === index) {
                return <div key={index}>
                  <div className="absolute rounded-full bg-s1 text-white w-20 h-20 right-4 top-3 flex items-center justify-center rotate-45 rounded-tb-2xl border-b-4 border-b-s2">
                    <p className=" font-extrabold text-4xl -rotate-45">{index+1}</p>
                  </div>
                  <div className="p-4 text-start mt-5">
                    <p className="text-xl mb-5 font-medium">My Skill as</p>
                    <h2 className="h3 mb-3 text-wrap me-auto text-s2">
                      {info.title}
                    </h2>
                  </div>
                  <div className="border-t border-3 border-t-s2 pt-5">
                    <ul className="space-y-4 pl-2">
                      {info.skills.map((list, i)=>(
                        <li key={i} className="flex items-center gap-3 text-textClr">
                        <FaRegDotCircle className="text-textClr text-sm" />{" "}
                        {list}
                      </li>
                      ))}
                    </ul>
                  </div>
                </div>
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default About;
