import React from "react";
import Hero from "../component/Home/Hero";
import Product from "./Product";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product isHome />
      <About />
    </div>
  );
};

export default Home;
