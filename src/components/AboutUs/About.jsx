import React from "react";

const About = () => {
  return (
    <div className="mt-5 md:mt-20">
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/service/s1.jpg"
                alt="Home Collection"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center ">
                <p className="font-semibold">Orthopaedics</p>
                <p className="text-sm text-white">
                  Orthopaedics focuses on the diagnosis, treatment.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/service/s3.jpg"
                alt="ECG Test"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">Surgery & Sutures</p>
                <p className="text-sm text-white">
                  Comprehensive surgical care with expert precision in
                  procedures and suturing.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/service/s6.jpg"
                alt="100+ Tests"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">Obstetrics & Gynecology</p>
                <p className="text-sm text-white">
                  Expert care for women’s health, pregnancy, and childbirth with
                  compassionate.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/doctor/d1.jpg"
                alt="Doctor"
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl  "
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
            {/* <h4 className="text-cyan-700 font-semibold mb-2 text-sm sm:text-base">
              About Us
            </h4> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
              DR.SathishClinic in <br /> Potheri, Kattankulathur, Chennai
            </h2>
            <p className="  mb-4 text-sm md:text-3xl font-semibold sm:text-base">
              Health is Wealth
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              We don’t sell you medicines. We provide health care services which
              makes you Heal both physically and mentally. Nourish your Body,
              Mind and Soul.
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
