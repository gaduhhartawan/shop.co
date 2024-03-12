"use client";
import React from "react";

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="hover:bg-neutral-100 transition py-3 px-4"
    >
      {label}
    </span>
  );
};

export default MenuItem;
