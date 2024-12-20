import React, { useState } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { RiArrowRightUpBoxFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  


  return (
    <Element name="contact">
    <section className="relative py-20 bg-[#160c41]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center">
          <div className="text-left mb-10">
            <h2 className="h3 text-white font-bold mb-5">Let's Talk</h2>
            <p className="para mb-10">
              Are you looking for a responsible, professinal full-stack
              developer and designer for your website or your web application
              projects?
              <br />
              Just leave me a message and tell me how I can help.{" "}
            </p>
            <div className="flex items-center justify-around gap-5">
               <div className="border border-s2/25 px-10 max-lg:px-5 py-4 rounded-lg bg-p1 w-1/2 max-lg:w-full shadow-md shadow-blue-900 transition-all duration-500  hover:border-s3">
               <span className="flex items-center gap-4 text-white cursor-pointer"><CiMail className="text-s2 text-2xl"/> E-mail</span>
              </div>
              <div className="border border-s2/25 px-10 py-4 max-lg:px-5 rounded-lg bg-p1 w-1/2 max-lg:w-full shadow-md shadow-blue-900 transition-all duration-500  hover:border-s3">
               <span className="flex items-center gap-4 text-white cursor-pointer"><FaWhatsapp className="text-s2 text-2xl"/> Whatsapp</span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <form action="" 
            className="w-[95%] max-lg:w-full mx-auto rounded-xl bg-p1 p-6 transition-all duration-500 border border-s1/50 hover:border-s3 shadow-xl hover:shadow-black/45 shadow-blue-900">
              <div className="mb-4">
                <label htmlFor="" className=" text-white text-[14px]">
                  Name
                </label>
                <input
                  type="text" name="name" 
                  className="text-white px-4 py-3 text-sm mt-1 rounded-md bg-p2 w-full"
                  placeholder="name"/>
                 
              </div>
              <div className="mb-4">
                <label htmlFor="" className=" text-white text-[14px]">
                 Email
                </label>
                <input
                  type="text" name="email" 
                  className="text-white px-4 py-3 text-sm mt-1 rounded-md bg-p2 w-full"
                  placeholder="mail"/>
                  
              </div>
              <div className="mb-4">
                <label htmlFor="" className=" text-white text-[14px]">
                  Message
                </label>
                <textarea type="text" name="message" id=""
                className="text-white px-4 py-3 text-sm mt-1 rounded-md bg-p2 w-full"
                  placeholder="message">
                      
                </textarea>
               
              </div>
              <div className="mt-6 mb-2 flex items-center justify-center">
              <Button title={"Send"} icon={<RiArrowRightUpBoxFill />} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Contact;
