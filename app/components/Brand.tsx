"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Brand = ({
  subtitle,
  center,
}: {
  subtitle?: string;
  center?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col gap-2 ${center ? "text-center" : "text-left"}`}
    >
      <h1
        className="uppercase font-bold text-2xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        shop.co
      </h1>
      {subtitle && <p className="text-gray-500 font-light ">{subtitle}</p>}
    </div>
  );
};

export default Brand;
