import React from "react";
import { Products, Footer, Contact } from ".";
import Certificates from "./Certificates";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Quality from "./Quality";
import Slider from "./Slider";
import About from "./About";
import WhyUs from "./WhyUs";
import Chat from "./Chat";

const Main = () => {
  return (
    <div className="overflow-hidde">
      <Navbar textColor="text-white" />
      <div className="max-sm:hidden"><Slider /></div>
      <WhyUs />
      <About />
      <Certificates />
      <Products />
      <Quality />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;

