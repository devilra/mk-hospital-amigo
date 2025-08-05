// src/components/HomeSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative px-4 md:px-20 h-[800px] md:h-fit py-10 flex flex-col md:flex-row items-center justify-end gap-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://globalscans.in/wp-content/uploads/2025/04/CT-SCAN-1.png')",
      }}>
      {/* Left Content */}
      {/* <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          LAB BLOOD TESTS
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900">
          40% OFF
        </h1>
        <ul className="space-y-3 text-blue-900 text-md md:text-lg">
          <li className="flex items-center gap-3">
            📄 <span>Report within 1 day</span>
          </li>
          <li className="flex items-center gap-3">
            🧑‍⚕️ <span>Highly Experienced Radiologist</span>
          </li>
          <li className="flex items-center gap-3">
            🤝 <span>Honest and Transparent Pricing</span>
          </li>
        </ul>
      </div> */}

      {/* Center Circular Image */}
      {/* <div className="hidden md:flex justify-center items-center">
        <div className="w-[300px] h-[300px] border-8 border-[#2e5c73] rounded-full overflow-hidden">
          <img
            src="/scan/scan1.png"
            alt="Lab test"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}

      {/* Right Form */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg hidden md:block">
        <h3 className="text-xl font-bold text-blue-900 mb-1">
          Request a call back to
        </h3>
        <p className="font-semibold text-blue-800 mb-4">Book an appointment</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name*"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="City*"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
            Submit
          </button>
        </form>

        <p className="text-xs mt-3 text-center text-gray-600">
          <span className="text-red-600">*</span>By submitting this form I agree
          to the T&C, Privacy Policy and receiving SMS & Whatsapp communication
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
