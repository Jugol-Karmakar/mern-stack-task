import React from "react";
import Mission from "../component/About/Mission";
import Blogs from "../component/About/Blogs";
import Newsletter from "../component/Home/Newsletter";

const About = () => {
  return (
    <div className="bg-[#f6f9fc]">
      <h2 className="text-center font-bold text-3xl text-gray-700 py-6 mb-8">
        About Us
      </h2>
      <div className="container mx-auto px-10 flex gap-6">
        <div className="w-1/2">
          <img
            className="w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800  pb-6">
            Mission and Story About
          </h3>
          <p className="text-sm font-thin text-fray-400">
            We are proud of our products and the positive impact they have on
            our customers and the environment. Our hope is that through our
            skincare, we inspire a deeper connection with nature, and empower
            our customers to embrace self-care rituals that are not only good
            for their skin, but also for the planet we call home.
          </p>
          <button className="bg-black text-white px-10 py-2 mt-4 drop-shadow-lg rounded ">
            About More
          </button>
        </div>
      </div>
      <Mission />
      <Blogs />
      <Newsletter />
    </div>
  );
};

export default About;
