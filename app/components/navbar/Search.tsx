"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="bg-gray-100 hidden lg:flex flex-row items-center px-3 gap-2 rounded-full grow ">
      <CiSearch size={22} />
      <input
        type="text"
        placeholder="Search for products"
        className="py-2 bg-transparent outline-none w-full"
      />
    </div>
  );
};

export default Search;
