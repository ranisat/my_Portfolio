import React from "react";
import Header from "./Header";
import Home from "./Home";
import Feature from "./Feature";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import images from "../constants/images";
import Contact from "./Contact";
import About from './About'
import Skills from "./Skills";

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <Feature />
      <Skills/>
      <ImageSlider images={images} />
      <About/>
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
