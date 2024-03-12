"use client";

import React from "react";
import Container from "../../Container";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 200,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8 py-8">
        <div className="flex justify-between items-center">
          <h2 className="uppercase text-4xl font-extrabold">
            our happy customers
          </h2>
          {/* <div className="flex gap-3">
            <button>Left</button>
            <button>Right</button>
          </div> */}
        </div>
        <Carousel responsive={responsive} infinite>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
