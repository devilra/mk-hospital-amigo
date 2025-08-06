// src/components/HomeSection.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import About from "../AboutUs/About";
import { useLocation } from "react-router-dom";

const services = [
  {
    title: "CT SCAN",
    price: "₹ 2000",
    description:
      "A CT scan (Computed Tomography) is an advanced imaging technique that uses X-rays and computer processing...",
    img: "/services/s1.jpg",
  },
  {
    title: "LAB FOR BLOOD TESTS",
    price: "₹ 50",
    description:
      "A blood test is a diagnostic tool that analyzes a blood sample to assess overall health, detect diseases, and monitor...",
    img: "/services/s2.jpg",
  },
  {
    title: "ULTRA SOUND",
    price: "₹ 1000",
    description:
      "An ultrasound is a diagnostic tool that uses sound waves to create images of internal organs, helping assess...",
    img: "/services/s3.jpg",
  },
];

const Coresettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // default desktop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // below 640px (mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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
      <div className="md:hidden ">
        <div className="slider-container overflow-hidden">
          <Slider {...settings}>
            <div className="">
              <img
                src="/scan/scan1.png"
                alt="CT-scan"
                className="h-[300px]  object-cover object-left "
              />
            </div>
            <div className="">
              <img
                src="/scan/scan2.png"
                alt="Xray-scan"
                className="h-[300px]  object-cover object-left "
              />
            </div>
            <div>
              <img
                src="/scan/scan3.png"
                alt="Ultrasonic"
                className="h-[300px]  object-cover object-left "
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* {About Page} */}

      <div id="about">
        <About />
      </div>

      <div>
        <div className="py-10 px-4 md:px-10 bg-white">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Our Core Services
          </h2>
          <Slider {...Coresettings}>
            {services.map((service, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105 "
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-teal-600 font-bold mt-2">
                      Starting from {service.price}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {service.description}
                    </p>
                    <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
