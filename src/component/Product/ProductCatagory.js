import React from "react";
import Data from "../../Data";

const ProductCatagory = ({ menuItems, setItems, filterItem }) => {
  return (
    <div className="bg-white border w-full max-w-[240px] max-h-[500px]">
      <h3 className="bg-[#b8defe] py-2 px-6 text-xl font-semibold text-black">
        Categories
      </h3>
      <div className="flex flex-col items-center">
        <button
          className="bg-[#f6f9fc] w-full text-left px-5 py-2 text-lg font-medium mb-0.5 hover:shadow-md transition-all duration-300 overflow-hidden"
          onClick={() => setItems(Data)}
        >
          View All Gifts
        </button>

        {menuItems.map((menuItem, id) => (
          <button
            className="bg-[#f6f9fc] w-full text-left px-5 py-2 text-lg font-medium mb-0.5 hover:shadow-md transition-all duration-300"
            key={id}
            onClick={() => filterItem(menuItem)}
          >
            {menuItem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCatagory;
