"use client";
import React, { useState } from "react";
import Heading from "../components/Heading";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const LoginClient = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-white py-5 px-7 rounded-xl w-full max-w-xs md:max-w-md flex flex-col gap-5">
      <Heading title="Sign In" small center />
      <Formik
        validationSchema={SigninSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          setIsLoading(true);

          signIn("credentials", { ...values, redirect: false }).then(
            (callback: any) => {
              setIsLoading(false);

              if (callback?.ok) {
                resetForm();
                toast.success("Logged in successfuly!");
                router.refresh();
                setTimeout(() => {
                  router.replace("/");
                }, 1000);
              }

              if (callback?.error) {
                toast.error(callback.error);
              }
            }
          );
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
                type="email"
                name="email"
                placeholder="e.g johndoe@mail.com"
                className="rounded border-[1px] border-black/35 p-2"
              />
            </div>
            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="******"
                className="rounded border-[1px] border-black/35 p-2"
              />
            </div>
            {/* Button */}
            <button
              disabled={!(isValid && dirty)}
              type="submit"
              className="bg-black text-white py-3 mt-5 hover:bg-black/90"
            >
              Sign In {isLoading ? "..." : null}
            </button>
          </Form>
        )}
      </Formik>
      <hr />
      <div className="flex gap-1 text-sm justify-center">
        <span>New to SHOP.CO?</span>
        <span
          onClick={() => router.push("/register")}
          className="cursor-pointer text-blue-600 hover:text-blue-800"
        >
          Create Account
        </span>
      </div>
    </div>
  );
};

export default LoginClient;
