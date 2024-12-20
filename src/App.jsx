import React from "react";
import Layout from "./sections/Layout";
import Details from "./sections/Details";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Project from "./sections/Project";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  return (
    <main className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/details" element={<Details />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
