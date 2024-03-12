"use client";
import React, { useState } from "react";
import Heading from "../components/Heading";

import { useRouter } from "next/navigation";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required!"),
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required!"),
  password: Yup.string()
    .min(6, "Password need at least 6 characters!")
    .max(25, "You've reached the maximum characters")
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .required("Please re-type your password!")
    .oneOf([Yup.ref("password")], "Password doesn't match"),
});

const RegisterClient = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="bg-white py-5 px-7 rounded-xl w-full max-w-xs md:max-w-md flex flex-col gap-5">
      <Heading title="Sign Up" small center />
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setIsLoading(true);

          axios
            .post("/api/register", values)
            .then(() => {
              toast.success("Registered successfully!");
              resetForm();
              router.push("/login");
            })
            .catch(() => toast.error("Something went wrong"))
            .finally(() => setIsLoading(false));
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="flex flex-col gap-3">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="e.g johndoe@mail.com"
                className="rounded border-[1px] border-black/35 p-2"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-700"
                name="email"
              />
            </div>
            {/* name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="e.g johndoe"
                className="rounded border-[1px] border-black/35 p-2"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-700"
                name="name"
              />
            </div>
            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="******"
                className="rounded border-[1px] border-black/35 p-2"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-700"
                name="password"
              />
            </div>
            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confpassword" className="text-sm">
                Confirm Password
              </label>
              <Field
                id="confpassword"
                type="password"
                name="confirmPassword"
                placeholder="******"
                className="rounded border-[1px] border-black/35 p-2"
              />
              <ErrorMessage
                component="div"
                className="text-sm text-red-700"
                name="confirmPassword"
              />
            </div>
            {/* Button */}
            <button
              disabled={!(isValid && dirty)}
              type="submit"
              className="bg-black text-white py-3 mt-5 hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              Sign Up {isLoading ? "..." : null}
            </button>
          </Form>
        )}
      </Formik>
      <hr />
      <div className="flex gap-1 text-sm justify-center">
        <span>Already have an account?</span>
        <span
          onClick={() => router.push("/login")}
          className="cursor-pointer text-blue-600 hover:text-blue-800"
        >
          Sign In
        </span>
      </div>
    </div>
  );
};

export default RegisterClient;
