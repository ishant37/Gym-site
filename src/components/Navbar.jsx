import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import  {FaEnvelope} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import {FaCommentDots} from "react-icons/fa";
function Navbar() {
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <div>
      <nav
       className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-800
       backdrop-blur-md shadow-lg z-50"
 
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
          {/* {logo} */}
          <div className="cursor-pointer font-bold text-2xl text-white font-[Cavet]">
            Gym Bro
          </div>
          <div className="hidden md:flex gap-8 items-center text-white font-semibold ">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
            >
              <FaUserTie />
              Trainer
            </Link>
            <Link
              to="opinions"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300 cursor-pointer"
            >
              <FaCommentDots />
              Trainer
            </Link>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300 cursor-pointer"
            >
               <FaEnvelope />
              Contact
            </Link>
          </div>
          <button className="md:hidden  text-white focus:outline-none" onClick={()=> setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen?<IoMdClose />
:<RxHamburgerMenu />}
          </button>
        </div>
        {/* {mobile navigation} */}
        {menuOpen && (
          <div className="md:hidden bg-grey-800 text-white flex flex-col items-center gap-4  py-4">
          <Link
                to="home"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                onClick={()=>setMenuOpen(false)}
              >
                Home
              </Link>
          <Link
                to="Opinion"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                onClick={()=>setMenuOpen(false)}
              >
                Contact
              </Link>
          <Link
                to="Trainer"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                onClick={()=>setMenuOpen(false)}
              >
                Trainer
              </Link>
          <Link
                to="Trainer"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                onClick={()=>setMenuOpen(false)}
              >
                Opinions
              </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
