import React from "react";
import Container from "../components/Container";
import MyProductsClient from "./MyProductsClient";
import getSellerProducts from "../actions/getSellerProducts";

const MyProductsPage = async () => {
  const products = await getSellerProducts();
  return (
    <div className="py-10">
      <Container>
        <MyProductsClient products={products} />
      </Container>
    </div>
  );
};

export default MyProductsPage;
