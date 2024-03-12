import React from "react";

import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import AddProductClient from "./AddProductClient";

const page = () => {
  return (
    <div className="py-10 w-full flex flex-col items-center">
      <Container>
        <Heading small title="Create a new product" center />
        <AddProductClient />
      </Container>
    </div>
  );
};

export default page;
