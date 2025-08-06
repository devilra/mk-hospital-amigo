import React from "react";

const About = () => {
  return (
    <div className="mt-5 md:mt-20">
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/about/about1.png"
                alt="Home Collection"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center ">
                <p className="font-semibold">HOME COLLECTION</p>
                <p className="text-sm text-white">Sampling At Your Address</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/about/about2.png"
                alt="ECG Test"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">ECG TEST</p>
                <p className="text-sm text-white">Accurate Results</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/about/about3.png"
                alt="100+ Tests"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">100+ DIFFERENT TESTS</p>
                <p className="text-sm text-white">Comprehensive Checkups</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/about/about4.png"
                alt="Doctor"
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl"
              />
              <div className="p-3 sm:p-4 text-center">
                <p className="font-semibold text-sm sm:text-base">
                  EXPERT DOCTORS
                </p>
                <p className="text-xs sm:text-sm text-white">
                  Professional Guidance
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-cyan-700 font-semibold mb-2 text-sm sm:text-base">
              About Us
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
              Best Scan Center in <br /> Nanmangalam, Chennai
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              We are{" "}
              <span className="font-semibold">
                RKPhospitals & Diagnostic Center
              </span>
              , a state-of-the-art medical facility providing accurate and
              reliable diagnostic services.
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Equipped with advanced imaging technology and a team of expert
              professionals, we offer a wide range of tests including ECHO, CT
              scan, ultrasound, X-ray, and laboratory diagnostics.
            </p>

            <ul className="space-y-3 mb-6 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Led by Passionate
                Experts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Safe Diagnoses and
                Effective Therapies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Advanced Technology
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Affordable Health
                Packages
              </li>
            </ul>

            <button className="px-6 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition text-sm sm:text-base">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
