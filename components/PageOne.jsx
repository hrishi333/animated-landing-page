import React,{useEffect,useRef} from "react";
import Typed from 'typed.js';

const PageOne = () => {

  const textRef = useRef();
  useEffect(() => {
    const options = {
      strings: ["Self-help", "adventure", "mystery"],
      typeSpeed: 150,       // Speed of typing in milliseconds
      backSpeed: 50,       // Speed of erasing in milliseconds
      backDelay: 2000,     // Delay before starting to erase
      startDelay: 0,       // Delay before typing starts
      loop: true           // Loop the animation
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy(); // Clean up when component unmounts
    };
  }, []);

  return (
    <div className="container_div flex-container flex px-[16px] py-[100px] my-auto items-center overflow-auto font-Rubik ">
      <div className="left_part flex-item flex-1">
        <div className="text-black font-bold text-[54px]">
          <h1 className="">Where Beautiful</h1>
          <h1>
            <span className="text-[#9fd50b]" ref={textRef}></span> Books
          </h1>
          <h1>are made.</h1>
        </div>
        <p className="text-black text-[24px] my-[16px] w-50">
          Meet the editor, designer or marketer who can help bring your book to
          life.
        </p>
        <div className="input_section flex w-100 mb-2">
          <input
            className="px-3 py-2 mr-2 text-[18px]  rounded-md shadow-lg outline-none "
            type="text"
            placeholder="enter your email"
          />
          <button className="bg-lime-400 text-[18px] rounded-md shadow-lg font-medium text-white hover:bg-lime-600 px-3 py-[12px]">
            Get Started
          </button>
        </div>
      </div>

      <div className="right_part flex-item flex-1">
        <img className=" object-cover relative" src="/hummingbird.png" alt="bg-Img"></img>
      </div>
    </div>
  );
};

export default PageOne;
