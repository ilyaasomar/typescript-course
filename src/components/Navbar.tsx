import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto bg-indigo-600">
      <div className="flex justify-between py-5 px-4 items-center text-white">
        <h1>ilyasdev</h1>
        <div className="flex space-x-10">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
