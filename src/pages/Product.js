import React, { useState } from "react";
import ProductCatagory from "../component/Product/ProductCatagory";
import ProductItem from "../component/Product/ProductItem";
import { data } from "../Data";

const Product = ({ isHome }) => {
  const [giftItems, setGiftItems] = useState(data);

  const menuItems = [...new Set(data.map((Value) => Value.category))];

  const filterItem = (currentCatagory) => {
    const newItem = data.filter((newCatagory) => {
      return newCatagory.category === currentCatagory;
    });
    setGiftItems(newItem);
  };

  return (
    <div className="container mx-auto px-10 my-10 flex gap-8">
      <ProductCatagory
        menuItems={menuItems}
        setItems={setGiftItems}
        filterItem={filterItem}
      />
      <ProductItem isHome={isHome} giftItems={giftItems} />
    </div>
  );
};

export default Product;
