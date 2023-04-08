import { Swiper, SwiperSlide } from "swiper/react";
import "../Home/Hero.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-hero relative"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
            alt=""
          />
          <div className="absolute px-10 py-6 mt-20 -ml-[600px] drop-shadow-xl">
            <h3 className="text-3xl font-bold text-white pb-4">
              Men's New Classical Watch
            </h3>
            <p className="text-sm font-medium text-white">
              Essentially, a dress watch is a timepiece designed to be worn with
              a suit or some other formal attire, <br /> though it can also be
              worn with semi-formal and even business casual attire depending on
              the outfits.
            </p>
            <button className="mt-4 border border-white hover:border-black text-white px-12 py-2 rounded hover:bg-black hover:text-white transition-all duration-300">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://images.unsplash.com/photo-1585298964673-eb8a63f230c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <div className="absolute px-10 py-6 mt-20 -ml-[700px] drop-shadow-xl">
            <h3 className="text-3xl font-bold text-white pb-4">
              New Summer Collection
            </h3>
            <p className="text-sm font-medium text-white">
              Classy & elegant, this handbag by Prive Roma is a must-have,{" "}
              <br /> that most fashion-conscious women will die to own.
            </p>
            <button className="mt-4 border border-black text-black px-12 py-2 rounded hover:bg-black hover:text-white transition-all duration-300">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="absolute px-10 py-6 mt-20 -ml-[800px] drop-shadow-xl">
            <h3 className="text-3xl font-bold text-white pb-4">
              Headphone Collection
            </h3>
            <p className="text-sm font-medium text-white">
              Classy & elegant, this handbag by Prive Roma is a must-have,{" "}
              <br /> that most fashion-conscious women will die to own.
            </p>
            <button className="mt-4 border border-black text-black px-12 py-2 rounded hover:bg-black hover:text-white transition-all duration-300">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
