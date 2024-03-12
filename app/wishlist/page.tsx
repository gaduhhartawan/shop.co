import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import WishlistClient from "./WishlistClient";
import getWishlistProducts from "../actions/getWishlistProducts";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const products = await getWishlistProducts();
  const currentUser = await getCurrentUser();

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <Heading
          title="You have no wishlist products"
          subttile="Let's find out your wishlist products"
          small
          center
        />
      </div>
    );
  }
  return (
    <div className="py-10">
      <Container>
        <Heading title="Your Wishlist" />
        <WishlistClient products={products} currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default page;
