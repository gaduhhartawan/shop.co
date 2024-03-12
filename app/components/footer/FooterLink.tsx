"use client";
import React from "react";

const FooterLink = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-semibold uppercase tracking-widest">company</h3>
      <div className="flex flex-col gap-4">
        <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
          About
        </span>
        <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
          Features
        </span>
        <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
          Works
        </span>
        <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
          Career
        </span>
      </div>
    </div>
  );
};

export default FooterLink;
