import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const NavLink = ({ title }) => (
    <LinkScroll to={title} offset={-100} spy smooth activeClass="active-nav">
      {title}
    </LinkScroll>
  );
  return (
    <section className="relative py-12 bgImage">
      <div className="container">
        <div className="relative max-w-[100%] w-[70%] mx-auto">
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex items-center justify-between">
              <li className="nav-li logo max-lg:hidden">
                <LinkScroll to="hero">RANI</LinkScroll>
              </li>
              <li className="nav-li max-lg:hidden">
                <div className="dot"></div>
              </li>
              <li className="nav-li">
                <NavLink title="about" />
              </li>

              <li className="nav-li">
                <div className="dot"></div>
              </li>
              <li className="nav-li">
                <NavLink title="work" />
              </li>
              <li className="nav-li">
                <div className="dot"></div>
              </li>
              <li className="nav-li">
                <NavLink title="contact" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative bgImgBtn mt-10">
          <div className="relative w-full  bg-p1 rounded-full py-4 shadow-inner  drop-shadow-xl transition-all duration-200 bg-gradient-to-b to-[#000256] via-[#01037c] from-[#585be0] px-8 max-lg:px-4 ">
            <div className="flex max-lg:flex-col items-center justify-between">
              <div className="flex  items-center justify-between gap-8 max-lg:mb-4">
                <p className="text-white text-sm">&copy; {year}</p>
                <p className="text-white text-sm">All rights reserved</p>
              </div>
              <div className="flex flex-wrap items-center justify-between max-lg:justify-center gap-6">
                <p className="text-textClr text-[12px] font-medium uppercase">
                  cookie policy
                </p>
                <p className="text-textClr text-[12px] font-medium uppercase">
                  privacy policy
                </p>
                <div className="flex items-center justify-between gap-4">
                  <a href="https://github.com/ranisat" target="_blank"
                    className="text-s2 hover:text-white  border border-p1 w-8 h-8 flex items-center justify-center  bg-gradient-to-r from-[#3d63b0] to-[#1d1f97] rounded-full duration-500 transition-all hover:bg-gradient-to-r hover:from-[#02215e] hover:to-[#7678ff] shadow-xl shadow-black/50"
                  >
                    <FaGithub />
                  </a>
                  <a href="/" className="text-s2 hover:text-white border border-p1 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#3d63b0] to-[#1d1f97] rounded-full duration-500 transition-all hover:bg-gradient-to-r hover:from-[#02215e] hover:to-[#7678ff] shadow-xl shadow-black/50"
                  >
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/rani-satav-a52373267/" target="_blank"
                    className="text-s2 hover:text-white  border border-p1 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#3d63b0] to-[#1d1f97] rounded-full duration-500 transition-all hover:bg-gradient-to-r hover:from-[#02215e] hover:to-[#7678ff] shadow-xl shadow-black/90"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
