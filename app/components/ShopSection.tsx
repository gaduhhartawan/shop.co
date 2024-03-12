import React from "react";
import Container from "./Container";
import Product from "./Product";
import { Product as Products } from "@prisma/client";
import { SafeUser } from "../types";

interface ShopSectionProps {
  data?: Products[] | null;
  currentUser?: SafeUser | null;
  title: string;
}

const ShopSection: React.FC<ShopSectionProps> = ({
  title,
  data,
  currentUser,
}) => {
  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold uppercase text-center">{title}</h1>
          {/* Products */}
          <div className="flex flex-row justify-between sm:overflow-x-hidden overflow-x-scroll gap-x-8">
            {data?.map((product) => (
              <Product
                data={product}
                currentUser={currentUser}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopSection;
