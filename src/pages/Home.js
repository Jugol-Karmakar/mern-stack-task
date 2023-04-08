import React from "react";
import Hero from "../component/Home/Hero";
import Product from "./Product";
import Newsletter from "../component/Home/Newsletter";
import Reviews from "../component/Home/Reviews";
import Services from "../component/Home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product isHome />
      <Reviews />
      <Services />
      <Newsletter />
    </div>
  );
};

export default Home;
