import React from "react";
import Hero from "./components/home/Hero";
import Company from "./components/home/Company";
import ShopSection from "./components/ShopSection";
import Category from "./components/home/category/Category";
import Testimonials from "./components/home/testimonials/Testimonials";
import getProducts from "./actions/getProducts";
import getCurrentUser from "./actions/getCurrentUser";

const Home = async () => {
  const products = await getProducts();
  const currentUser = await getCurrentUser();

  return (
    <div className="w-full">
      <Hero />
      <Company />
      <ShopSection
        title="new arrivals"
        data={products}
        currentUser={currentUser}
      />
      <ShopSection
        title="top selling"
        data={products}
        currentUser={currentUser}
      />
      <Category />
      <Testimonials />
    </div>
  );
};

export default Home;
