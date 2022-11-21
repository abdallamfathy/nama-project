import React from "react";
import location from "../assets/location.png";
import message from "../assets/message.png";
import call from "../assets/call.png";

const Contact = () => {
  return (
    <div className="Contact my-28 container mx-auto" id="contact">
      <div className="flex justify-center mb-14">
        <h1 className="text-4xl font-bold">اتصل بنا</h1>
      </div>
      <div className="flex justify-end relative right-16 ">
        <div className="flex justify-end flex-col items-end gap-10">
          <p className="text-right">
            الادارة : المدينة المنورة - شارع الملك عبد العزيز - مبنى الخمرى
            بلازا - الدور السابع - مكتب 13 <br /> المصنع : المنطقة الصناعية
            الجديدة مدن شارع (63)
          </p>
          <a href="#" className=" underline relative bottom-3">
            Nama-sales@khomrigroup.com
          </a>
          <p className="relative bottom-1">0555301707 - 0500361234</p>
        </div>
        <div className="flex flex-col items-center justify-center ml-6 gap-10">
          <div>
            <img src={location} alt="location" />
          </div>
          <div>
            <img src={message} alt="message" />
          </div>
          <div>
            <img src={call} alt="call" />
          </div>
        </div>
      </div>
      <div className="flex justify-center  mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207372.2748200199!2d39.20856832109524!3d24.27699447824544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bddb1beeced1e1%3A0xca956231a42fbcb4!2z2YXYtdmG2Lkg2YbZhdinINi32YrYqNipINmE2YTZhdmG2KrYrNin2Kog2KfZhNio2LHZg9in2YbZitipINmI2KfZhNin2LPZhdmG2KrZitip!5e0!3m2!1sen!2seg!4v1668497082937!5m2!1sen!2seg"
          className="h-[402px] w-[1150px] border-black "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
