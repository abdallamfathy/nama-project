import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, href }) => {
  return (
    <>
      <div className="flex justify-center">
        <Link to={href}>
          <button className="text-lg text-[#FF7315] bg-[#232020] rounded-xl w-[122px] h-[51px] text-center mt-20 transition ease-in-out hover:text-xl hover:bg-[#FF7315] hover:text-[#232020] ">
            {text}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
