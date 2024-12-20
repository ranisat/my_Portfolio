import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import clsx from 'clsx'

const Header = () => {
  const [hasScroll, setHasScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

   useEffect(()=>{
    const handleScroll = () =>{
      setHasScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return() =>{
      window.removeEventListener("scroll", handleScroll);
    }
   },[])

  const NavLink = ({ title }) => (
    <LinkScroll 
    to={title} 
    offset={-100} 
    spy 
    smooth 
    activeClass="active-nav"
    onClick={()=>setIsOpen(false)} 
    className="transition-colors duration-500 cursor-pointer hover:text-s2">
      {title}
    </LinkScroll>
  );
  return (
    <header className={clsx("py-2 bg-gradient-to-r to-[#0e033d]  via-[#0b0e79]  from-[#0c0041] fixed w-full z-40  text-white shadow-xl shadow-black/20", hasScroll && "backdrop-blur-[8px] py-2")}>
      <div className="container mx-auto h-14 flex items-center justify-between max-lg:px-5">
        <div className="nav-logo max-lg:block hidden">
          <a href="home" className="font-semibold text-2xl">Rani</a>
        </div>
        <div className={clsx("w-full max-lg:opacity-0 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-1/2 max-lg:bg-p1", isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:items-start max-lg:min-h-screen mx-lg:p-6 max-lg:overflow-hidden sidebar_before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex items-center max-lg:items-start justify-between max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="home" />
                </li>
                <li className="nav-li">
                  <div className="dot"></div>
                </li>
                <li className="nav-li">
                  <NavLink title="about" />
                </li>
                <li className="nav-li">
                  <div className="dot"></div>
                </li>
                <li className="nav-li logo max-lg:hidden">
                  <LinkScroll 
                  to="home"
                  offset={-100}
                  spy
                  smooth>RANI</LinkScroll>
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
        </div>
        <div className="cursor-pointer max-lg:block hidden">
          <button onClick={()=> setIsOpen(!isOpen)} className="text-2xl font-semibold">
            { isOpen ?  <IoIosCloseCircleOutline/> : <CiMenuFries /> }
          </button>
        </div>
      
      </div>
    </header>
  );
};

export default Header;
