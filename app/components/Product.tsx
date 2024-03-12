"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { HeartButton } from "./Button";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SafeUser } from "../types";

interface ProductProps {
  data: Product;
  currentUser?: SafeUser | null;
  actionLabel?: string;
  secondaryActionLabel?: string;
  actionClick?: () => void;
  secondaryActionClick?: (value: string) => void;
}

const Product: React.FC<ProductProps> = ({
  data,
  currentUser,
  actionLabel,
  actionClick,
  secondaryActionLabel,
  secondaryActionClick,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${data.id}`)}
      className="w-full min-w-52"
    >
      <div
        className="aspect-square 
            w-full 
            max-w-xs
            relative 
            overflow-hidden 
            rounded-xl
            
            "
      >
        <Image
          fill
          alt="product"
          src={data?.imageSrc || "/images/sample-product.png"}
          className="object-cover 
              h-full 
              w-full 
              transition
              hover:scale-110
              cursor-pointer
              "
        />
        <HeartButton listingId={data.id} currentUser={currentUser} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <p className="font-semibold text-lg">{data?.title || "Test"}</p>
          <span className="mx-1">-</span>
          <p className="text-sm text-neutral-600">{data?.category || "Test"}</p>
        </div>
        <div className="flex gap-1">
          <FaStar size={20} color="#FFC633" /> 5
        </div>
        <span className="font-semibold text-2xl">$ {data?.price || "120"}</span>
        {/* Optional Action Button */}
        {(actionLabel || secondaryActionLabel) && (
          <div className="flex justify-between gap-5">
            {actionLabel && (
              <button className="w-full bg-black hover:bg-black/90 text-white py-1 rounded-lg">
                Edit
              </button>
            )}
            <button
              onClick={() => secondaryActionClick?.(data?.id)}
              className="w-full bg-red-600 hover:bg-red-800 text-white py-1 rounded-lg"
            >
              {secondaryActionLabel ? secondaryActionLabel : "Delete"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
