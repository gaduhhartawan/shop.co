"use client";

import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { SafeUser } from "../types";
import useWishlist from "../hooks/useWishlist";
import useCart from "../hooks/useCart";

interface ButtonProps {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-black hover:bg-black/80 py-2 md:w-52 w-full capitalize text-white rounded-full flex justify-center cursor-pointer`}
    >
      {title}
    </div>
  );
};

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useWishlist({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="absolute left-4 top-4 hover:scale-125 cursor-pointer"
    >
      {!hasFavorited ? (
        <FaRegHeart size={20} />
      ) : (
        <FaHeart size={20} color="red" />
      )}
    </div>
  );
};
