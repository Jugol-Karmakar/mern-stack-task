import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Reviews = () => {
  const reviews = [
    {
      _id: "1",
      name: "Anagha Menen",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profession: "Teacher",
      review:
        "pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    },
    {
      _id: "2",
      name: "Jack Hooks",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profession: "Developer",
      review:
        "pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    },
    {
      _id: "3",
      name: "Charl marks",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profession: "Doctor",
      review:
        "pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    },
    {
      _id: "4",
      name: "Mr. Rahim Rahaman",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profession: "Engineer",
      review:
        "pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    },
  ];
  return (
    <section className="bg-pink-50 py-10 mt-10">
      <div className="flex justify-center pb-6">
        <h2 className="text-3xl font-bold py-1">What customer say</h2>
      </div>
      <div className="mx-20 pb-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="flex justify-around items-center mb-8 pb-6 px-20"
            >
              <div className="w-36 h-36">
                <img
                  className="w-full h-full object-cover rounded-full overflow-hidden"
                  src={review.image}
                  alt=""
                />
              </div>
              <div className="w-1/2 text-left ml-4">
                <h4 className="text-2xl font-medium ">{review.name}</h4>
                <p className="font-bold text-lg">{review.profession}</p>
                <p className="text-sm text-gray-800">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
