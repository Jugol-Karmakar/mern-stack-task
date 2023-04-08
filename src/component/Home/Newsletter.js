import React from "react";

const Newsletter = () => {
  return (
    <section className="flex flex-col items-center py-8 bg-gray-50 mb-8">
      <div className="">
        <h2 className="text-center text-4xl font-bold text-black mb-3">
          Newsletter
        </h2>
        <p className="text-sm text-center text-gray-800">
          Stay up to date with our latest news and product
        </p>
      </div>
      <div className="mt-5 w-1/2 flex justify-center items-center py-6">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-400 focus:border-gray-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-lg px-4 py-3"
        />
        <div className="flex items-center justify-center">
          <button className="px-4 py-3 bg-gray-700 text-base font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
