import React, { useState } from "react";
import { FaMedal, FaUserTie, FaDumbbell, FaStar } from "react-icons/fa";
import wc1 from '../assets/wcu1.jpg'
import wc2 from '../assets/wcu2.jpg'
import wc3 from '../assets/wcu3.jpg'
import Yoy from "../assets/YO1.jpg"; 

const features = [
  {
    id: 1,
    icon: <FaMedal className="text-yellow-300 text-4xl" />,
    title: "Award-Winning",
    text: "Recognized for excellence and commitment.",
    img: wc1,
  },
  {
    id: 2,
    icon: <FaUserTie className="text-yellow-300 text-4xl" />,
    title: "Expert Trainers",
    text: "Guided by certified and experienced professionals.",
    img: wc2,
  },
  {
    id: 3,
    icon: <FaDumbbell className="text-yellow-300 text-4xl" />,
    title: "State-of-the-Art Equipment",
    text: "Premium facilities to enhance your training.",
    img: wc3,
  },
  {
    id: 4,
    icon: <FaStar className="text-yellow-300 text-4xl" />,
    title: "Top Ratings",
    text: "Rated 4.9/5 by thousands of satisfied customers.",
    img: Yoy,
  },
];

function Wcu() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="bg-gradient-to-b from-black via-green-50 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-300 via-indigo-300 to-teal-300 bg-clip-text text-transparent text-center">
          Why Choose Us
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto text-center">
          We provide the best services with top-notch quality, expert guidance, and reliable solutions.
        </p>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Options */}
          <div className="space-y-6">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-transform transform hover:scale-105 shadow-lg 
                  ${selectedFeature.id === feature.id ? "bg-yellow-300 text-black " : "bg-white text-gray-800"}`}
              >
                {feature.icon}
                <span className="text-lg font-semibold text-black">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Right Section: Selected Feature Content */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
            <img src={selectedFeature.img} alt={selectedFeature.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-bold text-gray-900">{selectedFeature.title}</h3>
            <p className="text-gray-600 mt-2">{selectedFeature.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wcu;
