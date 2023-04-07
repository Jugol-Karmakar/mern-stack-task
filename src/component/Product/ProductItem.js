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
      {isHome ? <Link to="/product">See All Product</Link> : ""}
    </div>
  );
};

export default ProductItem;
