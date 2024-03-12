"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="rounded-xl border-[1px] border-black/20 p-5 flex flex-col gap-2 max-w-[360px]">
      <div className="flex gap-4">
        <FaStar size={22} color="#FFC633" />
        <FaStar size={22} color="#FFC633" />
        <FaStar size={22} color="#FFC633" />
        <FaStar size={22} color="#FFC633" />
        <FaStar size={22} color="#FFC633" />
      </div>
      <span className="font-semibold text-lg">Sarah M.</span>
      <p className="text-sm text-gray-500 font-light w-full">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
        officia unde dolores id incidunt tempore ut illum inventore quibusdam
        dolore.
      </p>
    </div>
  );
};

export default Card;
