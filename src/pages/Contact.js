import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 my-10 py-10">
        <div className="shadow-xl rounded-xl py-10">
          <h2 className="text-center font-bold text-3xl my-4">Send Message</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 mb-4 px-6 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 mb-4 px-6 py-3"
            />
            <input
              type="text"
              placeholder="Website"
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 mb-4 px-6 py-3"
            />
            <textarea
              className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 mb-4 px-6 py-3"
              placeholder="Write Message"
              cols="30"
              rows="2"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="max-w-sm lg:w-full lg:max-w-md mx-14 mb-4 text-lg font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
            />
          </form>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Office Address</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">
                  4920 Northwest 2 Avenue Medford, MN 55049 kigkong,USA
                </p>
              </div>
            </div>
            <div className="p-8 border rounded-xl">
              <h2 className="text-xl font-bold text-center">Phone Number</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">+888-555-333</p>
                <p className="text-base text-gray-600">878454545</p>
                <p className="text-base text-gray-600">02-3254789645</p>
              </div>
            </div>
            <div className="border p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Email Address</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">www.rent@gmailmil.com</p>
                <p className="text-base text-gray-600">www.rentensupport.com</p>
                <p className="text-base text-gray-600">facebook/renten.net</p>
              </div>
            </div>
            <div className="border p-8 rounded-xl">
              <h2 className="text-xl font-bold text-center">Fax Number</h2>
              <div className="py-3 text-center">
                <p className="text-base text-gray-600">
                  4920 Northwest 2 Avenue Medford, MN 55049 kigkong,USA
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="bg-black mr-2 p-2 cursor-pointer drop-shadow">
              <BsFacebook className="text-xl text-white" />
            </div>
            <div className="bg-black mr-2 p-2 cursor-pointer drop-shadow">
              <FaTwitter className="text-xl text-white" />
            </div>
            <div className="bg-black mr-2 p-2 cursor-pointer drop-shadow">
              <FaLinkedinIn className="text-xl text-white" />
            </div>
            <div className="bg-black mr-2 p-2 cursor-pointer drop-shadow">
              <FaGooglePlusG className="text-xl text-white" />
            </div>
            <div className="bg-black mr-2 p-2 cursor-pointer drop-shadow">
              <BsInstagram className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
