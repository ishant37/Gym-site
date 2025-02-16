import React from 'react';

const images = [
  { src: "https://i.postimg.cc/Jnk2kY2K/1.jpg", text: "Trainer" },
  { src: "https://i.postimg.cc/VvPHBByw/2.jpg", text: "Trainer" },
  { src: "https://i.postimg.cc/WzmY9Fjk/3.jpg", text: "Trainer" },
  { src: "https://i.postimg.cc/JzY6dWwP/4.jpg", text: "Trainer" },
  { src: "https://i.postimg.cc/sX7TXQMN/5.jpg", text: "Trainer" },
  { src: "https://i.postimg.cc/cCcTRpM7/6.jpg", text: "Trainer" }
];

function PhotoSection() {
  return (
    <div className=" bg-black  py-16 bg-gradient-to-r from-black via-gray-900 to-black p-6">
        {/* text section */}
        <div className="text-white text-2xl text-center pt-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-300 via-indigo-300 mb-5 to-teal-300 bg-clip-text text-transparent text-center ">Photo Section</h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto text-center mb-4">
  Our expert trainers are dedicated to guiding you every step of the way on your fitness journey. <br />With personalized attention and unwavering support, we'll help you achieve your goals with confidence and care.
</p>
        </div>
      {/* Faded white region */}
      <div className=" inset-0 bg-white opacity-60 z-0"></div>
      
      {/* 9 Photos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            {/* Image */}
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-50"

            />
            {/* Text Overlay */}
            <div className="absolute inset-0  bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-2xl font-semibold">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
      <img src="" alt="" />
    </div>
  );
}

export default PhotoSection;
