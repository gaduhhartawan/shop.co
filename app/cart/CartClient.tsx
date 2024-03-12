"use client";

import React from "react";
import Container from "../components/Container";
import { Product as Products } from "@prisma/client";
import { SafeUser } from "../types";
import Product from "../components/Product";

interface Props {
  products: Products[];
  currentUser?: SafeUser | null;
}

const CartClient: React.FC<Props> = ({ products, currentUser }) => {
  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
            currentUser={currentUser}
            secondaryActionLabel="Remove"
          />
        ))}
      </div>
    </Container>
  );
};

export default CartClient;
