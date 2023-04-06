import React from "react";
import Hero from "../component/Home/Hero";
import Product from "./Product";
import Newsletter from "../component/Home/Newsletter";
import Reviews from "../component/Home/Reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product isHome />
      <Reviews />
      <Newsletter />
    </div>
  );
};

export default Home;
