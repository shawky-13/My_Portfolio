import React, { useState } from "react";
import { nav } from "../constants";
import { useLocation } from "react-router-dom";
import MenuSvg from "./MenuSvg";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-n-8/80 backdrop-blur-sm shadow-md shadow-amber-400 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex relative justify-between items-center px-5 py-3 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* creating image logo of brainwave */}
        <a
          onClick={() => setIsOpen(false)}
          href="#"
          className=" block uppercase tracking-tagline font-code text-yellow-300 transition-colors text-3xl hover:text-yellow-500 lg:mr-8"
        >
          sm
        </a>
        {/* creating nav of links */}
        <nav className={`hidden justify-center items-center md:flex z-10`}>
          <div className={`flex flex-row justify-center items-center m-auto`}>
            {nav.map((link, index) => (
              <a
                href={link.url}
                key={link.id}
                className={`text-xl transition-colors uppercase font-code ${index === 4 ? "mr-0" : "mr-10"} ${location.hash === link.url ? "text-amber-600" : " text-yellow-300"} hover:text-yellow-500`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </nav>
        {/* end of links */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="block cursor-pointer p-3 border border-yellow-300/25 rounded-md md:hidden"
        >
          <MenuSvg openNavigation={isOpen} />
        </div>
        {/* links for mobile screen */}
        <div
          className={`z-1 w-full absolute ${isOpen ? "right-0 opacity-100" : "-right-[50rem] opacity-0"} top-[4.3rem] backdrop-blur-sm bg-n-8/80 flex flex-col justify-center items-center p-10 text-center transition-all duration-500 shadow-inner shadow-yellow-400 md:hidden`}
        >
          {nav.map((link, index) => (
            <a
              onClick={() => setIsOpen((prev) => !prev)}
              href={link.url}
              key={link.id}
              className={`text-xl transition-colors uppercase font-code ${index === 4 ? "mb-0" : "mb-5"} ${location.hash === link.url ? "text-amber-600" : " text-yellow-300"} hover:text-yellow-500`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
