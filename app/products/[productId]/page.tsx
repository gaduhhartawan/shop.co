import getProductById from "@/app/actions/getProductById";
import React from "react";
import ProductClient from "./ProductClient";
import getProducts from "@/app/actions/getProducts";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  productId?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const products = await getProducts();
  const currentUser = await getCurrentUser();

  return (
    <div className="py-10 w-full">
      <ProductClient
        data={product!}
        products={products}
        currentUser={currentUser}
      />
    </div>
  );
};

export default page;
