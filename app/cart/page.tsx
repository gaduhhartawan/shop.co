import React from "react";
import getCartProducts from "../actions/getCartProduct";
import Heading from "../components/Heading";
import CartClient from "./CartClient";
import getCurrentUser from "../actions/getCurrentUser";

const CartPage = async () => {
  const cartProduct = await getCartProducts();
  const currentUser = await getCurrentUser();

  if (cartProduct.length === 0) {
    return <Heading title="Your cart is empty" />;
  }

  return (
    <div className="py-10">
      <CartClient products={cartProduct} currentUser={currentUser} />
    </div>
  );
};

export default CartPage;
