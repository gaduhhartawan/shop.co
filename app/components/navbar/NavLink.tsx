"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NavLink = () => {
  const router = useRouter();
  return (
    <div className="hidden lg:flex flex-row items-center gap-4">
      <div
        className="text-sm cursor-pointer hover:text-black/80"
        onClick={() => router.push("/")}
      >
        Shop
      </div>
      <div
        className="text-sm cursor-pointer hover:text-black/80"
        onClick={() => router.push("/")}
      >
        On Sale
      </div>
      <div
        className="text-sm cursor-pointer hover:text-black/80"
        onClick={() => router.push("/")}
      >
        New Arrivals
      </div>
      <div
        className="text-sm cursor-pointer hover:text-black/80"
        onClick={() => router.push("/")}
      >
        Brands
      </div>
    </div>
  );
};

export default NavLink;
