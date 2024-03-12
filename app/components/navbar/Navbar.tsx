"use client";

import React from "react";
import Container from "../Container";
import NavLink from "./NavLink";
import Search from "./Search";
import Cart from "./Cart";
import UserMenu from "./UserMenu";
import { CiMenuBurger, CiSearch, CiUser } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import Brand from "../Brand";
import { disableNav } from "@/app/utils/disableNav";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const path = usePathname() as string;
  return (
    <>
      {!disableNav.includes(path) && (
        <div className="w-full sticky top-0 left-0 py-5 shadow bg-white z-[9998]">
          <Container>
            <div className="flex items-center justify-between gap-10">
              <div className="flex items-center gap-5">
                {/* Burger Menu */}
                <CiMenuBurger
                  size={25}
                  className="block lg:hidden cursor-pointer hover:text-black/80"
                />
                {/* Logo */}
                <Brand />
              </div>
              {/* Link */}
              <NavLink />
              {/* Search */}
              <Search />
              <div className="flex flex-row gap-4">
                {/* Search Menu */}
                <CiSearch
                  size={25}
                  className="block lg:hidden cursor-pointer text-black hover:text-black/80"
                />
                {/* Cart */}
                <Cart />
                {/* UserMenu */}
                <UserMenu currentUser={currentUser} />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navbar;
