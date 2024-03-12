"use client";

import React from "react";

interface HeadingProps {
  title: string;
  subttile?: string;
  small?: boolean;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subttile,
  small,
  center,
}) => {
  return (
    <div className={`flex flex-col ${small ? "gap-0" : "gap-3"}`}>
      <h1
        className={`uppercase ${
          small
            ? "text-2xl font-semibold"
            : "lg:text-5xl text-4xl font-extrabold"
        } ${center && "text-center"}`}
      >
        {title}
      </h1>
      <p className={`text-sm text-gray-500`}>{subttile}</p>
    </div>
  );
};

export default Heading;
