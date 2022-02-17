import React from "react";
import { Navbar } from "./";
const Header = () => {
  return (
    <div className="sm:w-100 py-10 dark:bg-gray-800">
      <div className="container mx-auto text-center sm:flex sm:w-8/12 sm:justify-between sm:items-center">
        <div className="dark:text-white font-bold text-xl text-logo-grey capitalize">
          Tayfun Güler
        </div>
        <Navbar/>
      </div>
    </div>
  );
};

export default Header;
