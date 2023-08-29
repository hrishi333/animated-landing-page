import React from "react";

const Navbar = () => {
  return (
    <div className="wrapper p-4 bg-transparent border border-black h-[10vh] flex justify-between ">
      <div className="flex items-center">LOGO</div>
      <div className="flex text-gray-600 items-center ">
        <p className="m-1 p-2 hover:text-white ">services</p>
        <p className="m-1 p-2 hover:text-white">about</p>
        <p className="m-1 p-2 hover:text-white">prices</p>
        <p className="m-1 p-2 hover:text-white">contact</p>
    
        <button className="bg-black text-white p-2 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
