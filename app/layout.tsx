import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import getCurrentUser from "./actions/getCurrentUser";
import React from "react";
import { Session } from "next-auth";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "SHOP.CO",
};

interface Props {
  session: Session | null;
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = async ({ children, session }) => {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar currentUser={currentUser} />
        <Toaster
          position="top-center"
          toastOptions={{ style: { zIndex: "9999" } }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
