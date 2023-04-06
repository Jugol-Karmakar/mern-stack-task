import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div className="container mx-auto flex justify-around py-4">
        <div className="max-w-[400px]">
          <h2 className="text-2xl font-bold text-black">FOOTER</h2>
          <p className="py-3 text-sm text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            tempora, fugiat reiciendis impedit veniam iure laudantium, dolorem
            praesentium ex, repudiandae perspiciatis. Eum dolores eos obcaecati
            possimus maiores neque, eligendi perspiciatis!
          </p>
          <div className="flex items-center justify-start mt-3">
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
        <div>
          <h3 className="text-xl font-semibold mb-3">Prodduct</h3>
          <p className="text-sm font-medium text-gray-800 mb-1">
            Men's Collection
          </p>
          <p className="text-sm font-medium text-gray-800 mb-1">
            Woman Collection
          </p>
          <p className="text-sm font-medium text-gray-800 mb-1">
            Kid's Collection
          </p>
          <p className="text-sm font-medium text-gray-800 mb-1">
            Cosmetic and Electronics
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Usefull Links</h3>
          <p className="text-sm font-medium text-gray-800 mb-1">Products</p>
          <p className="text-sm font-medium text-gray-800 mb-1">Booking</p>
          <p className="text-sm font-medium text-gray-800 mb-1">About</p>
          <p className="text-sm font-medium text-gray-800 mb-1">Contact</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Address</h3>
          <p className="text-sm font-medium text-gray-800 mb-1 flex items-center">
            <MdLocationPin className="text-lg mr-2" /> 107, Banani Road, Dhaka
          </p>
          <p className="text-sm font-medium text-gray-800 mb-1 flex items-center">
            <FaPhoneAlt className="text-lg mr-2" /> +8488338783
          </p>
          <p className="text-sm font-medium text-gray-800 mb-1 flex items-center">
            <MdEmail className="text-lg mr-2" /> user@gmail.com
          </p>
        </div>
      </div>
      <div className="mx-20 py-2">
        <hr />
      </div>
      <p className="text-center py-5">
        Copyright © {year} - All right reserved.
      </p>
    </div>
  );
};

export default Footer;
