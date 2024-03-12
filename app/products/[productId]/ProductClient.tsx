"use client";

import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";
import ShopSection from "@/app/components/ShopSection";
import useCart from "@/app/hooks/useCart";
import { SafeUser } from "@/app/types";
import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface Props {
  products: Product[] | null;
  data: Product;
  currentUser?: SafeUser | null;
}

const ProductClient: React.FC<Props> = ({ data, products, currentUser }) => {
  const { onCart, toggleCart } = useCart({ productId: data.id, currentUser });
  return (
    <div>
      {/* Image Section */}
      <Container>
        <div className="flex flex-col md:flex-row gap-x-10 mb-16">
          <Image
            alt="image"
            width={400}
            height={200}
            src={data?.imageSrc || "/images/sample-product.png"}
          />
          <div className="grow flex flex-col justify-around">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-5xl">{data?.title}</h1>
              <span className="text-neutral-500 text-lg">{data?.category}</span>
              <h3 className="font-semibold text-3xl">${data?.price}</h3>
              <p>{data?.description}</p>
            </div>
            <Button onClick={toggleCart} title="Add to Cart" />
          </div>
        </div>
      </Container>
      {/* Shop Section */}
      <ShopSection title="You might also like" data={products} />
    </div>
  );
};

export default ProductClient;
