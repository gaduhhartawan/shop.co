import React from "react";
import Brand from "../components/Brand";
import RegisterClient from "./RegisterClient";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-gray-200 h-screen">
      <Brand center />
      <RegisterClient />
    </div>
  );
};

export default RegisterPage;
