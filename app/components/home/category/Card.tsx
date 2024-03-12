"use client";

import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  grow?: boolean;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, grow, imageSrc }) => {
  return (
    <div
      className={`${
        grow && "md:col-span-2 w-full"
      } relative flex justify-between bg-white rounded-xl hover:scale-105 cursor-pointer`}
    >
      <div>
        <span className="absolute z-10 top-3 left-3 font-bold text-xl">
          {title}
        </span>
      </div>
      <div className="relative right-0 object-cover w-60 h-52 rounded-xl">
        <Image alt="casual" src={imageSrc} fill objectFit="cover" />
      </div>
    </div>
  );
};

export default Card;
