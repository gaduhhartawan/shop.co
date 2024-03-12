"use client";

import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ImageUpload from "@/app/components/ImageUpload";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Product name is required!"),
  description: Yup.string().required("Description is required!"),
  price: Yup.number().min(1).required("Price is required!"),
  category: Yup.string(),
  imageSrc: Yup.string().required("Image is required!"),
});

interface Props {
  product?: Product | null;
}

const AddProductClient: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="mt-8">
      <Formik
        enableReinitialize
        validationSchema={ProductSchema}
        initialValues={{
          title: product ? product.title : "",
          description: product ? product.description : "",
          price: product ? product.price : 0,
          category: product ? product.category : "",
          imageSrc: product ? product.imageSrc : "",
        }}
        onSubmit={(values, { resetForm }) => {
          if (!product) {
            axios
              .post("/api/products", values)
              .then(() => {
                toast.success("Product added successfully!");
                resetForm();
                router.refresh();
                setTimeout(() => {
                  router.replace("/myproducts");
                }, 1000);
              })
              .catch(() => toast.error("Something went wrong"));
          } else {
            axios
              .patch(`/api/products/${product.id}`, values)
              .then(() => {
                toast.success("Product updated successfully!");
                resetForm();
                router.refresh();
                setTimeout(() => {
                  router.replace("/myproducts");
                }, 1000);
              })
              .catch(() => toast.error("Something went wrong"));
          }
        }}
      >
        {({ setFieldValue, values, isValid, dirty }) => (
          <Form className="flex flex-col gap-3">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-sm">
                Product Name
              </label>
              <Field
                className="border-[1px] py-2 px-3 outline-none rounded-lg w-full bg-neutral-100"
                id="title"
                type="text"
                name="title"
                placeholder="e.g Example Product"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-600"
                name="title"
              />
            </div>
            {/* description */}
            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <Field
                as="textarea"
                className="border-[1px] py-2 px-3 outline-none rounded-lg w-full bg-neutral-100"
                id="description"
                type="text"
                name="description"
                placeholder="e.g Example Product"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-600"
                name="description"
              />
            </div>
            {/* Proce */}
            <div className="flex flex-col gap-1">
              <label htmlFor="price" className="text-sm">
                Price
              </label>
              <Field
                className="border-[1px] py-2 px-3 outline-none rounded-lg w-full bg-neutral-100"
                id="price"
                type="number"
                min={1}
                name="price"
                placeholder="e.g Example Product"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-600"
                name="price"
              />
            </div>
            {/* Category */}
            <div className="flex flex-col gap-1">
              <label htmlFor="category" className="text-sm">
                Category
              </label>
              <Field
                className="border-[1px] py-2 px-3 outline-none rounded-lg w-full bg-neutral-100"
                id="category"
                name="category"
                as="select"
              >
                <option value="Unisex">Unisex</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kid">Kid</option>
              </Field>
            </div>
            {/* Image */}
            <div className="flex flex-col gap-1">
              <label htmlFor="image" className="text-sm">
                Image
              </label>
              {/* <Field type="file" name="imageSrc" accept="image/*" id="image" /> */}
              <ImageUpload
                value={values.imageSrc}
                onChange={(value) => setFieldValue("imageSrc", value)}
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-600"
                name="imageSrc"
              />
            </div>
            {/* Button */}
            <button
              disabled={!(isValid && dirty)}
              type="submit"
              className="bg-black text-white rounded-lg py-2 mt-3 disabled:cursor-not-allowed disabled:bg-black/30"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductClient;
