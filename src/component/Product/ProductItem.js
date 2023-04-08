import React from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

const ProductItem = ({ isHome, giftItems }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {isHome
          ? giftItems
              .slice(0, 9)
              .map((giftItem) => (
                <SingleProduct key={giftItem.id} giftItem={giftItem} />
              ))
          : giftItems.map((giftItem) => (
              <SingleProduct key={giftItem.id} giftItem={giftItem} />
            ))}
      </div>
      {isHome ? (
        <div className="flex justify-center mt-5">
          <Link
            to="/product"
            className="border border-black py-2 px-4 text-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            See All Product
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductItem;
