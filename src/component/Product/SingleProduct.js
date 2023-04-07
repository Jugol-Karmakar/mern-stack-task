import React from "react";
import { Link } from "react-router-dom";

const SinglegiftItem = ({ giftItem }) => {
  return (
    <div className="flex flex-col border relative">
      <div className="overflow-hidden">
        <img
          className="w-full h-[200px] object-contain hover:scale-125 transition-all duration-300"
          src={giftItem.image}
          alt=""
        />
      </div>
      <div className="p-4 text-left">
        <h4 className="text-left">{giftItem.title}</h4>
        <p>Price: {giftItem.price}</p>
      </div>
      <div className="flex justify-end m-4">
        <Link
          to="/booking"
          className="border text-center font-medium border-black text-black hover:bg-black hover:text-white py-2 px-6 w-full transition-all duration-300"
        >
          Booking
        </Link>
      </div>
    </div>
  );
};

export default SinglegiftItem;
