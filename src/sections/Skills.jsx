import React from "react";
// technologies skills 

import { AiOutlineHtml5 } from "react-icons/ai";
import { RiJavascriptLine, RiBootstrapLine, RiTailwindCssLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaReact, FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
const Skills = () => {
const skills =[
    {
      id:'1',
      name:'HTML/CSS',
      icon:<AiOutlineHtml5/>
    },
    {
      id:'2',
      name:'Javascript',
      icon:<RiJavascriptLine/>
    },
    {
      id:'3',
      name:'ReactJs',
      icon:<FaReact/>
    },
    {
      id:'4',
      name:'Bootstrap',
      icon:<RiBootstrapLine/>
    },
    {
      id:'5',
      name:'Tailwind',
      icon:<RiTailwindCssLine/>
    },
    {
      id:'6',
      name:'Photoshop',
      icon:<DiPhotoshop/>
    },
    {
      id:'7',
      name:'Figma',
      icon:<FaFigma/>
    },
    {
      id:'8',
      name:'Vs Code',
      icon:<BiLogoVisualStudio/>
    },
    {
      id:'9',
      name:'Git',
      icon:<FiGithub/>
    }
    
  ]
  
  return (
    <section className="relative py-20 bg-p1">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="h3 text-white font-bold mb-5">Technologies I Work With</h1>
        </div>
        <div className="flex max-lg:flex-wrap items-center justify-evenly max-lg:justify-center gap-2 max-lg:gap-10 mt-10">
           {
            skills.map((item)=>(
               <div key={item.id} className="text-center">
               <div className="innerBox relative px-4 py-4 z-20 rounded-2xl bg-gradient-to-b to-[#000256] via-[#01037c] from-[#585be0] border border-s2/30 shadow-inner boxShadow  transition-all duration-700 hover:bg-gradient-to-b hover:to-[#181ba7] hover:via-[#030669] hover:from-[#3d40d6] mb-5 max-lg:mb-3">
              <div className="h5 text-white">
                 {item.icon}
              </div>
              </div>
              <p className="text-sm text-textClr">{item.name}</p>
           </div>
            ))
           }

        </div>
      </div>
    </section>
  );
};

export default Skills;
