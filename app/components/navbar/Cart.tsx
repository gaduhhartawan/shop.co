"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="cursor-pointer text-black hover:text-black/80"
    >
      <CiShoppingCart size={25} />
    </div>
  );
};

export default Cart;
