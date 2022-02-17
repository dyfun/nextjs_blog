import React from "react";
import Link from "next/link";
import ChangeMode from "./ChangeMode";

const Navbar = () => {
  const [mode, setTheme] = ChangeMode();
  return (
    <>
      <nav className="uppercase flex gap-x-8 items-center justify-center mt-5 sm:mt-0 dark:text-white">
        <Link href="/" key="1">
          <a className="text-opacity-80 uppercase font-bold text-sm transition hover:text-opacity-100 hover:text-gray-600">
            Home
          </a>
        </Link>
        <Link href="/about" key="2">
          <a className="text-opacity-80 uppercase font-bold text-sm transition hover:text-opacity-100 hover:text-gray-600">
            about
          </a>
        </Link>
        <Link href="/contact" key="3">
          <a className="text-opacity-80 uppercase font-bold text-sm transition hover:text-opacity-100 hover:text-gray-600">
            contact
          </a>
        </Link>
        <div className="flex gap-x-4">
          <div className="relative">
            <img src="/search.svg" className="w-5" alt="search" />
          </div>
          <div>
            {mode === "light" ? (
              <img
                src="/moon.svg"
                className="w-5"
                alt="moon"
                onClick={() => setTheme("light")}
              />
            ) : (
              <img
                src="/moon.svg"
                className="w-5"
                alt="moon"
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
