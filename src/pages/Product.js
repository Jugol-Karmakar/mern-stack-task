import React, { useState } from "react";
import ProductCatagory from "../component/Product/ProductCatagory";
import ProductItem from "../component/Product/ProductItem";
import Data from "../Data";

const Product = ({ isHome }) => {
  const [giftItems, setGiftItems] = useState(Data);

  const menuItems = [...new Set(Data.map((Value) => Value.category))];

  const filterItem = (currentCatagory) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === currentCatagory;
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
