"use client";
import { Product as Products } from "@prisma/client";
import React from "react";
import { SafeUser } from "../types";
import Heading from "../components/Heading";
import Product from "../components/Product";

interface Props {
  products: Products[];
  currentUser?: SafeUser | null;
}

const WishlistClient: React.FC<Props> = ({ products, currentUser }) => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {products.map((product) => (
        <Product key={product.id} data={product} currentUser={currentUser} />
      ))}
    </div>
  );
};

export default WishlistClient;
