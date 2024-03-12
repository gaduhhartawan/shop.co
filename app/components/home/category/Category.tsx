"use client";

import React from "react";
import Container from "../../Container";
import Card from "./Card";

const Category = () => {
  return (
    <Container>
      <div className="bg-gray-100 rounded-xl py-10 flex flex-col gap-8">
        <h2 className="font-extrabold text-4xl uppercase text-center">
          browse by dress style
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-20 px-5 justify-items-stretch gap-5">
          <Card title="Unisex" imageSrc="/images/casual.png" />
          <Card title="Men" imageSrc="/images/men.png" grow />
          <Card title="Women" imageSrc="/images/women.png" grow />
          <Card title="Kids" imageSrc="/images/kids.png" />
        </div>
      </div>
    </Container>
  );
};

export default Category;
