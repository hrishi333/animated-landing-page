import React from "react";

const Navbar = () => {
  return (
    <div className="wrapper p-[16px]  bg-transparent  h-[10vh] flex justify-between font-Rubik">
      <div className="flex items-center font-semibold text-white text-[24px]">HummingBird</div>
      <div className="flex text-gray-100 items-center font-semibold  ">
        <p className="m-1 p-2 text-xl hover:text-white">services</p>
        <p className="m-1 p-2 text-xl hover:text-white">about</p>
        <p className="m-1 p-2 text-xl hover:text-white">prices</p>
        <p className="m-1 p-2 text-xl hover:text-white">contact</p>
    
        <button className="bg-lime-400 rounded-md shadow-lg ml-2 text-xl font-medium text-white hover:bg-lime-600 px-3 py-2 ">
         Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
