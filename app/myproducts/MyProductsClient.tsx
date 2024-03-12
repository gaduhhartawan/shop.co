"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { useRouter } from "next/navigation";

import Heading from "../components/Heading";
import Product from "../components/Product";
import { Product as Products } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface Props {
  products: Products[] | null;
}

const MyProductsClient: React.FC<Props> = ({ products }) => {
  const router = useRouter();

  const onDeleteClick = (id: string) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure want to delete this product?",
      showCancelButton: true,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/products/${id}`)
          .then(() => {
            toast.success("Product deleted successfully!");
            router.refresh();
          })
          .catch((error) => toast.error(error?.response?.data?.error));
      }
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <Heading
          title="My Products"
          subttile="A portal that allows you to manage all your products in one place."
          small
        />
        <button
          onClick={() => router.push("/products/add")}
          className="gap-2 flex items-center text-sm bg-black text-white rounded-lg py-2 px-5 hover:bg-black/90"
        >
          <FaPlus />
          Create
        </button>
      </div>
      {/* List of Products */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        {products?.map((product) => (
          <Product
            data={product}
            key={product.id}
            actionLabel="Edit"
            secondaryActionLabel="Delete"
            secondaryActionClick={(value: string) => onDeleteClick(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProductsClient;
