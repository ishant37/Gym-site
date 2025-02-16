import React, { useState } from "react";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    { title: "Basic Plan", price: "$10", features: ["Gym Access", 'Group Classes',"Locker Access","Fitness Assessment"] },
    { title: "Medium", price: "$12", features: ["Gym Access",
       " Group Classes",
        "Personal Training",
        "Sauna/Steam Room"] },
    { title: "Premium Plan", price: "$20", features: ["Full Access",
        "Unlimited Personal Training",
        "Nutrition Plan",
        "Premium Classes",
       " Spa Access",
        "Exclusive Events"] },
  ];

  const yearlyPlans = [
    { title: "Basic Plan", price: "$100", features: ["Discounted Price", "Free Session", "Priority booking for group classes"] },
    { title: "Medium", price: "$150", features: ["Discounted price for yearly membership", "2 additional personal training sessions per year", "Priority booking for personal training sessions", "Protein Intake"] },
    { title: "Premium Plan", price: "$200", features: ["Discounted Price",
"Extra Sessions",
"Free Guest Passes",
"Early Access"] },
  ];

  return (
    <div className="py-16 bg-black   bg-gradient-to-r from-black via-gray-900 to-black p-6">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-8 py-3 text-xl font-semibold rounded-full transition-all duration-300 ease-in-out 
          ${!isYearly ? "bg-yellow-500 text-white shadow-lg" : "bg-white text-gray-800"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-8 py-3 mx-3 text-xl font-semibold rounded-full transition-all duration-300 ease-in-out 
          ${isYearly ? "bg-yellow-500 text-white shadow-lg" : "bg-white text-gray-800"}`}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 focus:outline-none focus:ring-2 focus:ring-yellow-300">
        {(isYearly ? yearlyPlans : monthlyPlans).map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
            <p className="text-4xl font-bold text-yellow-500 mb-6">{plan.price}</p>
            <ul className="text-gray-700 space-y-4 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-lg">{feature}</li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
