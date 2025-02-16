import React from 'react';
// import './FeedbackForm.css'; // Import the CSS file for custom animations

function FeedbackForm() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-6">
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
            {/* Contact Info */}
            <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="flex items-center gap-2 mb-3">
                <span className="text-blue-400">📍</span> Gym Street, Fitness City, LKO
              </p>
              <p className="flex items-center gap-2 mb-3">
                <span className="text-blue-400">📞</span> +91 1234213000
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-400">✉</span> contact@gym.com
              </p>
            </div>
    
            {/* Contact Form */}
            <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm mb-1">Your Name</label>
                  <input type="text" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea rows="4" className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      );
    };
export default FeedbackForm;
