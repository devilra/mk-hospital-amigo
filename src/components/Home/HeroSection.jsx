// src/components/HomeSection.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import About from "../AboutUs/About";
import { useLocation } from "react-router-dom";

const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: false,
};

const HeroSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay the scroll slightly to ensure the element is rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay
    }
  }, [location]);

  return (
    <div className="">
      <div className="hidden md:block">
        <section
          className="relative  px-4 md:px-20 h-[800px] md:h-fit py-10 flex flex-col md:flex-row items-center justify-end gap-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://globalscans.in/wp-content/uploads/2025/04/CT-SCAN-1.png')",
          }}>
          {/* Left Content */}

          {/* Right Form */}
          <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg hidden md:block">
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Request a call back to
            </h3>
            <p className="font-semibold text-blue-800 mb-4">
              Book an appointment
            </p>

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
              <span className="text-red-600">*</span>By submitting this form I
              agree to the T&C, Privacy Policy and receiving SMS & Whatsapp
              communication
            </p>
          </div>
        </section>
      </div>
      <div className="md:hidden w-full">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="">
              <img
                src="/scan/scan1.png"
                alt="CT-scan"
                className="h-[300px] w-full object-cover object-left "
              />
            </div>
            <div className="">
              <img
                src="/scan/scan2.png"
                alt="Xray-scan"
                className="h-[300px] w-full object-cover object-left "
              />
            </div>
            <div>
              <img
                src="/scan/scan3.png"
                alt="Ultrasonic"
                className="h-[300px] w-full object-cover object-left "
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* {About Page} */}

      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default HeroSection;
