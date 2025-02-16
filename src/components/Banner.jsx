import React from "react";
import { 
  FaRunning, FaPlay, FaFacebook, FaTwitter, FaInstagram, 
  FaUser, FaCertificate, FaThumbsUp 
} from "react-icons/fa";
import { FaHeartPulse, FaMedal, FaDumbbell } from "react-icons/fa6";
import bgimg from "../assets/bannertop.png";

function Banner() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Content Section */}
        <div className="relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent h-full w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-600 animate-slideInLeft text-center lg:text-left"> 
            Elevate your <span className="text-yellow-300">Workout</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-4 mb-8 animate-fadeInUp text-center lg:text-left">
            Strength, power, muscle, endurance, motivation, and hard work—achieve it all with us! 💪🔥
          </p>

          {/* Icons Section */}
          <div className="flex flex-wrap sm:flex-row lg:items-center gap-6 lg:justify-start animate-fadeIn delay-300 mb-8">
            {[ 
              { icon: <FaDumbbell />, label: "Strength" }, 
              { icon: <FaHeartPulse />, label: "Heart" }, 
              { icon: <FaRunning />, label: "Endurance" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="text-yellow-300 text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-lg font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start mb-6 gap-4">
            <button className="px-6 py-2.5 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
              Get Started
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
              <FaPlay className="text-black text-xl" />
              Watch Demo
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-4 animate-fadeIn delay-800 justify-center lg:justify-start">
            {[
              { icon: <FaFacebook />, color: "text-blue-500" },
              { icon: <FaInstagram />, color: "text-pink-500" },
              { icon: <FaTwitter />, color: "text-sky-500" }
            ].map((item, index) => (
              <a key={index} href="#" aria-label="Social Link" className={`${item.color} text-2xl transition-transform transform hover:scale-110`}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 flex justify-center items-center">
        <img  
  src={bgimg} 
  alt="Workout"  
  className="opacity-90 w-full h-full lg:max-w-[60%] object-cover animate-zoomInSlow"
/>

        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black py-16 text-white">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {[
              { icon: <FaMedal />, text: "5+ Years of Experience" },
              { icon: <FaCertificate />, text: "50+ Certified Trainers" },
              { icon: <FaUser />, text: "1000+ Satisfied Customers" },
              { icon: <FaThumbsUp />, text: "4.5/5 Ratings" }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col animate-fadeIn gap-4 items-center delay-${index * 200}`}>
                <div className="text-yellow-300 text-4xl">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-lg font-semibold md:text-xl">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
