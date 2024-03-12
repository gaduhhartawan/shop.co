"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";

const Company = () => {
  return (
    <div className="bg-black text-white py-8">
      <Container>
        <div className="flex flex-wrap justify-between gap-y-8 gap-x-10 items-center">
          <Image
            alt="versace"
            src={"/images/versace.png"}
            width={120}
            height={100}
          />
          <Image alt="zara" src={"/images/zara.png"} width={90} height={80} />
          <Image
            alt="gucci"
            src={"/images/gucci.png"}
            width={120}
            height={100}
          />
          <Image
            alt="prada"
            src={"/images/prada.png"}
            width={120}
            height={100}
          />
          <Image
            alt="calvin"
            src={"/images/calvin.png"}
            width={120}
            height={100}
          />
        </div>
      </Container>
    </div>
  );
};

export default Company;
