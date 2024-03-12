import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import React from "react";
import AddProductClient from "../../add/AddProductClient";
import getProductById from "@/app/actions/getProductById";

interface IParams {
  productId: string;
}

const page = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);

  return (
    <div className="py-10 w-full flex flex-col items-center">
      <Container>
        <Heading small title="Update your product" center />
        <AddProductClient product={product} />
      </Container>
    </div>
  );
};

export default page;
