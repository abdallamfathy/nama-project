import React from "react";
import { Products, Footer, Contact, AboutMob, ProductsMob } from ".";
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
    <div className="overflow-hidden">
      <Navbar textColor="text-white" />
      <div className="max-sm:hidden"><Slider /></div>
      <WhyUs />
      <div className="max-sm:hidden"><About /></div>
      <div className="md:hidden"><AboutMob /></div>
      <Certificates />
      <div className="max-sm:hidden"><Products /></div>
      <div className="md:hidden"><ProductsMob /></div>
      <Quality />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;

