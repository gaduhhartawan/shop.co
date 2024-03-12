"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import MenuItem from "./MenuItem";
import { SafeUser } from "@/app/types";
import { signOut, useSession } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handlePush = (dest: string) => {
    setIsOpen(false);
    router.push(dest);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer text-black hover:text-black/80"
      >
        <CiUser size={25} />
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-xl bg-white right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer w-40">
            {currentUser ? (
              <>
                {currentUser.role !== "seller" ? (
                  <MenuItem
                    label="Become a seller"
                    onClick={() => handlePush("/profile")}
                  />
                ) : (
                  <>
                    <MenuItem
                      label="My Sales"
                      onClick={() => handlePush("/sales")}
                    />
                    <MenuItem
                      label="My Products"
                      onClick={() => handlePush("/myproducts")}
                    />
                  </>
                )}
                <MenuItem
                  label="My Wishlist"
                  onClick={() => handlePush("/wishlist")}
                />
                <MenuItem
                  label="History"
                  onClick={() => handlePush("/wishlist")}
                />
                <hr />
                <MenuItem label="Sign Out" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem
                  label="Sign In"
                  onClick={() => handlePush("/login")}
                />
                <hr />
                <MenuItem
                  label="Sign Up"
                  onClick={() => handlePush("/register")}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
