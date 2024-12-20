import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { RiArrowRightUpBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/project";
import Img1 from "../assets/images/port-1.jpg";

const Project = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("../details");
  };
  return (
    <>
      <Header />
      <section className="relative pt-5">
        <div className=" breadCrumb">
          <div className="container">
            <div className="py-14">
              <div className="text-left">
                <h1 className="text-white text-xl mb-3">Projects</h1>
                <h1 className="h3 text-s2">My Work</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-20 bg-[#160c41]">
          <div className="text-center w-2/5 mx-auto max-lg:w-full mb-16">
            <h2 className="h3 text-white font-bold mb-5">
              Check Out some of My Work
            </h2>
            <p className="text-s3 text-sm font-medium italic">
              It has been an absolute pleasure to put my heart and soul into
              these projects. While you're here, browse these projects.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
            {projects.map((data) => (
              <div
                key={data.id}
                className="bg-p1 text-white p-2 lg:mx-5 md:mx-3 mx-0 rounded-xl transition-all duration-500 border border-blue-900 hover:border-s3 shadow-xl hover:shadow-black/45 shadow-blue-950 mb-5"
              >
                <div className="rounded-xl overflow-hidden w-full h-48">
                  <img
                    src={data.firstImg}
                    alt="project"
                    className="h-full w-full object-contain transition-all duration-500 ease-in-out hover:scale-[1.1]"
                  />
                </div>
                <div className="relative p-3">
                  <h2 className="text-xl text-s2 font-semibold">
                    {data.name}
                  </h2>
                  {/* <div className="mt-5 mb-2 flex flex-wrap gap-2">
                    {data.skills.map((list, i) => (
                       <p key={i} className="text-white w-max rounded-full px-3 py-1 border border-p1 text-sm bg-slate-800 text-center shadow-md shadow-slate-800/40 mb-3">
                       {list}
                     </p>
                    ))}
                  </div> */}
                  <div onClick={handleClick}
                    className="flex justify-end  text-white cursor-pointer" >
                    <RiArrowRightUpBoxFill className="text-s2 text-2xl" />
                  </div>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project;
