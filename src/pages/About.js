import React from "react";

const About = () => {
  return (
    <div className="bg-[#f6f9fc]">
      <h2 className="text-center font-bold text-3xl text-gray-700 py-6">
        About Us
      </h2>
      <div className="container mx-auto flex ">
        <div className="w-1/2">
          <img
            className="w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
            alt=""
          />
        </div>
        <div>
          <h3>fashion blog</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
