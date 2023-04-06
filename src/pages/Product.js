import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

const Product = ({ isHome }) => {
  const products = [
    {
      id: "1",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "2",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "3",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "4",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "5",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "6",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "7",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "8",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "9",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
    {
      id: "10",
      name: "woman fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      detail:
        "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
      price: "$231",
      rating: "4.5",
    },
  ];
  return (
    <div className="mx-20">
      {isHome ? (
        <h2 className="text-center text-xl font-semibold py-10 mt-4">
          Products
        </h2>
      ) : (
        ""
      )}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="flex flex-col items-center rounded-md overflow-hidden mb-8 pb-6 max-h-[520px]"
          >
            <div className="w-full h-[300px] overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <div className="text-center my-2 p-4">
              <h2 className="text-xl font-bold text-gray-700">
                {product.name}
              </h2>
              <p>{product.price}</p>
              <p className="text-sm text-gray-600">{product.detail}</p>
              <div className="mx-2">
                <button className="w-full border mt-3 border-black rounded-md px-10 py-2 text-base black font-medium cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
