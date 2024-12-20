import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegEye } from "react-icons/fa";
import Button from "../components/Button";
import { RiArrowRightUpBoxFill } from "react-icons/ri";
import { Element } from "react-scroll";
import {useNavigate} from 'react-router-dom'
import { settings } from "../constants/data";

const ImageSlider = ({ images }) => {
// details page show on click

const navigate = useNavigate()

const handledetails = () =>{
  navigate("./details")
}
const handleproduct = () =>{
  navigate("./project")
}

  return (
    <Element name="work">
      <section className="pt-20 pb-10 relative bgImage">
        <div className="container text-center z-20">
          <h2 className="h3 text-white font-bold mb-5">Let's show work!</h2>
          <p className="para mb-10">
            It has been an absolute pleasure to put my heart and soul into these
            projects. <br /> While you're here, browse these projects.
          </p>
          <div className="imgslider">
            <Slider {...settings}>
              {images.map((item) => (
                <div key={item.id} className="relative p-2 rounded-xl">
                  <div className="border border-gray-400 h-auto p-2 bg-white overflow-hidden rounded-2xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full bg-cover"
                    />
                  </div>
                  <div className="w-full bg-white -mt-4  py-4">
                    <div className="flex items-center justify-around ">
                      <h2 className="text-[16px] text-p1 font-bold text-center mt-2 capitalize">
                        {item.name}
                      </h2>
                      <div className="p-2 bg-gradient-to-r from-[#3d63b0] to-[#1d1f97] rounded-full duration-500 transition-all hover:bg-gradient-to-r hover:from-[#02215e] hover:to-[#7678ff] shadow-md shadow-black cursor-pointer">
                        <span onClick={handledetails}>
                          <RiArrowRightUpBoxFill className="text-white" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-20 flex items-center justify-center">
            <span onClick={handledetails}>
              <Button title={"View All"} icon={<FaRegEye />} />
            </span>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ImageSlider;
