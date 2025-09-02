import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mt-36  px-4 md:px-20 py-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <img
            src="/banner.webp"
            alt="R"
            className="h-[110px] rounded-lg  p-1 w-full object-cover "
          />
          <p className="text-sm">
            <strong>DR.SATHISH.MBBS, AFIH.,(GENERAL PHYSICIAN)</strong> <br />
            DR.SathishClinic
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a
              href="#"
              className="bg-blue-900 p-2 rounded-full hover:bg-blue-700"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-pink-600 p-2 rounded-full hover:bg-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-600 p-2 rounded-full hover:bg-red-500"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Orthopaedics</li>
            <li>Baby Fever Treatment</li>
            <li>Surgery & Sutures</li>
            <li>Obstetrics & Gynecology</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Contacts</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="">
                DR.SATHISH MBBS, AFIH
                <br />
                21A, Thiruvallur street, Potheri , (Near V Care Medicals ),SRM
                University Kattankulathur Chengelpattu , Tamil Nadu 603203
                INDIA.
              </span>
              <br />
            </li>
            <a className="mt-2 inline-block font-bold">
              drsathishclinic@gmail.com
            </a>
            <li className="font-bold">+91 9944455127</li>
          </ul>
        </div>

        {/* Embedded Google Map */}
        <div>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.376119864744!2d80.0350702417755!3d12.818954697563047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7b79682c19f%3A0xfdb0688853de2427!2sDR.SathishClinic!5e0!3m2!1sen!2sin!4v1756820386771!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border"
          />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-sm text-center border-t pt-6">
        <p>
          Copyright © 2025 <strong> DR.SathishClinic</strong> Developed by
          <a href="#" className="text-blue-600 hover:underline px-3">
            AmogoWebster
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
