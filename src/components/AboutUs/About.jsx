import React from "react";

const About = () => {
  return (
    <div className="mt-28">
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src="/about/about1.png"
                alt="Home Collection"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">HOME COLLECTION</p>
                <p className="text-sm text-gray-500">
                  Sampling At Your Address
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src="/about/about2.png"
                alt="ECG Test"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">ECG TEST</p>
                <p className="text-sm text-gray-500">Accurate Results</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src="/about/about3.png"
                alt="100+ Tests"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">100+ DIFFERENT TESTS</p>
                <p className="text-sm text-gray-500">Comprehensive Checkups</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src="/about/about4.png"
                alt="Doctor"
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />
              <div className="p-3 sm:p-4 text-center">
                <p className="font-semibold text-sm sm:text-base">
                  EXPERT DOCTORS
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Professional Guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
