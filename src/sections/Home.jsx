import React from "react";
import { Element } from "react-scroll";
import bannerImg from "../assets/images/banner.png";
import { IoMdDownload } from "react-icons/io";
import { FaHandPaper } from "react-icons/fa";
import Button from "../components/Button";
import { IoTrophyOutline } from "react-icons/io5";
import { CiDesktop } from "react-icons/ci";
import { Link as LinkScroll } from "react-scroll";

import DownloadPdf from "../assets/images/rani-resume-24.pdf";

const Home = () => {

  return (
    <section className="relative text-white pt-20 bg-gradient-to-t to-[#11153a] to-[60%]  from-[#090b65] from-[40%] h-auto">
      <Element name="home">
        <div className="container">
          <div className="grid grid-cols-2 max-lg:grid-cols-1  items-center">
            <div className="mt-10 ml-20 pb-10 max-lg:ml-0">
              <h1 className="h5 mb-5 max-lg:text-xl max-lg:mb-3 capitalize text-s2">
                Hi there!
              </h1>
              <h1 className="h3 max-lg:h4 mb-5 max-lg:mb-3 leading-6">
                I'm Rani
              </h1>
              <h1
                className="h2 max-lg:h3"
                data-aos={"fade-right"}
                data-aos-duration="300"
              >
                Frontend Developer
              </h1>
              <div className="mt-10">
                <p className="para">
                  Crafting seamless digital experiences with code and
                  creativity. <br />
                  Turning designs into reality, one pixel at a time.
                </p>
              </div>
              <div className="mt-10 gap-8 max-lg:gap-2 flex items-center">
                <LinkScroll to="contact" offset={-100} spy smooth>
                  <Button title={"Hire Me"} icon={<FaHandPaper />} />
                </LinkScroll>
                <a href={DownloadPdf} download="Rani-Resume" target="_blank">
                  {" "}
                  <Button title={"Resume"} icon={<IoMdDownload />} />
                </a>
              </div>
              <div className="mt-10 gap-8  flex items-center">
                <div className="flex items-center justify-between gap-2">
                  <div className="border-2 border-s2 hover:border-s3 rounded-full w-10 h-10 flex items-center justify-center duration-500 transition-all text-s3 hover:bg-p1">
                    <IoTrophyOutline className="text-xl font-semibold " />
                  </div>
                  <div>
                    <p className="leading-2 tracking-wide text-[12px] font-semibold text-white uppercase">
                      Approved <br /> and recognized
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="border-2 border-s2 hover:border-s3 rounded-full w-10 h-10 flex items-center justify-center duration-500 transition-all text-s3 hover:bg-p1">
                    <CiDesktop className="text-xl font-semibold " />
                  </div>
                  <div>
                    <p className="leading-2 tracking-wide text-[12px] font-semibold text-white uppercase">
                      Future space <br /> architects hub
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden p-6 max-lg:hidden">
              <img src={bannerImg} alt="bannerImg" className="bg-contain" />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Home;
