"use client";

import React from "react";
import { Button } from "../Button";
import Heading from "../Heading";
import Image from "next/image";
import Container from "../Container";
import toast from "react-hot-toast";

const Hero = () => {
  return (
    <Container>
      <div className="sm:h-[70vh] flex flex-col lg:flex-row items-center justify-between pt-5 overflow-hidden">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <Heading
            title="find clothes that matches your style"
            subttile="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
          />
          <Button title="shop now" />
          {/* Stats */}
          <div className="flex flex-row flex-wrap gap-y-2 sm:gap-x-0 gap-x-10 sm:justify-between justify-center text-center">
            <Heading title="200+" subttile="International Brands" small />
            <Heading title="2,000+" subttile="High-Quality Products" small />
            <div className="">
              <Heading title="30,000+" subttile="Happy Customers" small />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="grow relative w-full md:h-full h-60">
          <Image
            alt="hero"
            fill
            className="w-full object-cover"
            src={"/images/hero.png"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
