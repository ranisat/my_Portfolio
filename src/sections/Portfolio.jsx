import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuScanEye } from "react-icons/lu";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/project";

const Portfolio = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/");
  };
  return (
    <section className="relative pt-10">
      <div className=" breadCrumb">
        <div className="container">
          <div className="py-16">
            <div className="text-left">
              <h1 className="text-white text-xl mb-3">Project Sample</h1>
              <h1 className="h3 text-s2">React Js Portfolio</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-p3 py-16">
        <div className="container relative">
        <div className="absolute w-max left-5 -top-10">
             <span onClick={handleView}>
              <Button icon={<IoArrowBackCircleOutline/>} title={"Home"} className="w-max" />
            </span>
           </div>
          <div className="text-center w-2/5 mx-auto max-lg:w-full mb-16">
            <h2 className="h3 text-white font-bold mb-5">
              Check Out some of My Work
            </h2>
            <p className="text-s3 text-sm font-medium italic">
              It has been an absolute pleasure to put my heart and soul into
              these projects. While you're here, browse these projects.
            </p>
          </div>
          {projects.map((data) => (
            <div
              key={data.id}
              className="w-[95%] mb-5 max-h-screen mx-auto max-lg:w-full rounded-xl overflow-hidden shadow-xl shadow-blue-800/40 border-2 border-s2/10 transition-all duration-500 hover:border-s3 hover:shadow-2xl hover:shadow-blue-900 " >
              <div className="flex items-center justify-center max-lg:flex-col">
                <div className="w-2/5 max-lg:w-full relative max-h-auto bg-p3 p-1 border-r border-r-s2/40">
                  <div className="w-full mx-auto h-auto p-2 relative z-20 overflow-hidden">
                    <div className="flex-col items-center justify-center">
                      <div className="border-b border-b-blue-800 mb-2 w-[98%] overflow-hidden mx-auto rounded-md">
                        <img
                          src={data.firstImg}
                          alt="portfolioImg"
                          className="bg-cover transition-all duration-500 hover:scale-[1.1] rounded-md"
                        />
                      </div>
                      {/* <div className="w-[98%] overflow-hidden mx-auto rounded-md">
                        <img
                          src={data.secondImg}
                          alt="portfolioImg"
                          className="bg-cover transition-all duration-500 hover:scale-[1.1] rounded-md"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="w-3/5 max-lg:w-full relative border-transparent rounded-md overflow-hidden  bg-p3 h-full">
                  {/* <div className="py-6 px-5 relative z-20"> */}
                    {/* <h3 className="text-xl font-medium text-s2 mb-3">
                      Project Descriptions
                    </h3>
                    <p className="text-sm text-wrap  text-white italic">
                      {data.desc}
                    </p> */}
                  {/* </div> */}

                  <div className="pt-2 pb-10 px-5">
                    <p className="uppercase text-sm mb-1 text-s3">
                      {data.category}
                    </p>
                    <h2 className="text-[24px] font-semibold text-s2 mb-3">
                      {data.name}
                    </h2>
                    <div className="my-5 flex items-center flex-wrap max-lg:gap-2 gap-3">
                      {data.skills.map((item, index) => (
                        <p
                          key={index}
                          className="text-white w-max rounded-full px-3 py-1 border border-p1 text-sm bg-gradient-to-b to-[#161041] via-[#1b1f67] from-[#2e19eb] text-center shadow-md shadow-blue-800/40"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-wrap text-justify text-textClr italic">
                      {data.proDesc}
                    </p>
                    <div className="relative flex items-center justify-start gap-5 mt-8 max-lg:mt-3 mb-5">
                      <div className="border border-s2/25 px-5 py-3 w-max rounded-lg bg-p1 max-lg:w-full shadow-md shadow-blue-900 transition-all duration-500  hover:border-s3">
                        <a href='https://github.com/ranisat' target="_blank">
                          <span className="flex items-center max-lg:text-sm gap-4 text-white cursor-pointer">
                            <FaGithub className="text-s2 text-2xl"/> Github
                            Repository
                          </span>
                        </a>
                      </div>
                      <div className="border border-s2/25 px-5 py-3 rounded-lg bg-p1 w-max max-lg:w-full shadow-md shadow-blue-900 transition-all duration-500  hover:border-s3">
                        <a href={data.link} target="_blank">
                          <span className="flex items-center gap-4 max-lg:text-sm text-white cursor-pointer">
                            <LuScanEye className="text-s2 text-2xl" /> Live
                            Preview
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
