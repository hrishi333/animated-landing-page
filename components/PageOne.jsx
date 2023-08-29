import React from "react";

const PageOne = () => {
  return (
    <div className="container_div flex h-[100vh]">
      <div className="left_part">
        <div className="border border-red-300">
          <h1>Where Beautiful</h1>
          <h1>
            <span>Self-help</span> Books
          </h1>
          <h1>are made.</h1>
        </div>
        <p>
          Meet the editor, designer or marketer who can help bring your book to
          life.
        </p>
        <div className="input_section">
          <input
            className="px-3 py-2 mr-2 rounded-md shadow-lg outline-none "
            type="text"
            placeholder="enter your email"
          />
          <button className="bg-lime-400 rounded-md shadow-lg font-medium text-white hover:bg-lime-600 px-3 py-2">
            Get Started
          </button>
        </div>
      </div>

      <div className="right_part ">
        <img src="" alt="bg-Img"></img>
      </div>
    </div>
  );
};

export default PageOne;
