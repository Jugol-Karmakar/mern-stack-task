import React, { useState } from "react";
import { data } from "../Data";
import { useParams } from "react-router-dom";
import BookingForm from "../component/Product/BookingForm";
import { HiMinus, HiPlus } from "react-icons/hi";

const Booking = () => {
  const { id } = useParams();
  const productData = data;
  const [count, setCount] = useState(1);

  // const [giftItem, setGiftItem] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const product = productData.find((item) => item.id === parseInt(id));
  console.log(product);

  return (
    <div className="bg-[#f6f9fc]">
      <div className="container mx-auto py-10 px-20">
        <div className="flex justify-between">
          <div className="flex shadow-lg rounded-md p-6 bg-white w-full max-w-2xl">
            <div className="w-36 h-36 rounded-full overflow-hidden border">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-bold text-black">{product.title}</h3>
              <h4 className="text-sm font-bold mt-2">{product.category}</h4>
              <p className="text-lg pt-3 ">Price: {product.price}</p>
              <div className="flex items-center mt-2">
                <button
                  className="border border-pink-500 p-1 rounded"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}
                >
                  <HiMinus className="text-lg font-semibold text-pink-500" />
                </button>
                <h4 className="p-2 text-lg font-medium">{count}</h4>
                <button
                  className="border border-pink-500 p-1 rounded"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <HiPlus className="text-lg font-semibold text-pink-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex shadow-lg rounded-md p-6 bg-white w-full max-w-sm"></div>
        </div>

        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
