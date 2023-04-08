import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      name: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1523754865311-b886113bb8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80",
      detail: "consequat vulputate eget metumpeng magna commodo purus etiam.",
    },
    {
      id: 2,
      name: "New Hot Item",
      image:
        "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      detail: "consequat vulputate eget metumpeng magna commodo purus etiam.",
    },
    {
      id: 3,
      name: "Kid's Hot Item",
      image:
        "https://images.unsplash.com/photo-1622290319146-7b63df48a635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      detail: "consequat vulputate eget metumpeng magna commodo purus etiam.",
    },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Blogs</h2>
        <p className="text-center text-sm text-gray-400">
          Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras
          quirntum <br /> Feugiat elit placerat. Diam tempor malesuada.
        </p>
      </div>
      <div className="container mx-auto px-20 grid grid-cols-3 gap-6 py-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-hidden w-full h-60">
              <img
                className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
                src={blog.image}
                alt=""
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg text-center font-bold">{blog.name}</h2>
              <p className="mt-5 text-sm text-gray-500 text-center">
                {blog.detail}
              </p>
              <div className="flex justify-center mt-4">
                <button className="border border-black px-6 py-2 rounded-full text-black text-lg font-medium hover:bg-black hover:text-white transition-all duration-500">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
