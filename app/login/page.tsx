import React from "react";
import Brand from "../components/Brand";
import LoginClient from "./LoginClient";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-gray-200 h-screen">
      <Brand center />
      <LoginClient />
    </div>
  );
};

export default LoginPage;
