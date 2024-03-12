"use client";

import React from "react";
import Container from "../Container";
import Brand from "../Brand";
import SocialIcon from "./SocialIcon";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterLink from "./FooterLink";
import { usePathname } from "next/navigation";
import { disableNav } from "@/app/utils/disableNav";

const Footer = () => {
  const path = usePathname() as string;
  return (
    <>
      {!disableNav.includes(path) && (
        <div className="bg-gray-100 py-8">
          <Container>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left */}
              <div className="max-w-md">
                <Brand subtitle="We have clothes that suits your style and which you’re proud to wear. From women to men." />
                {/* Social Media */}
                <div className="flex gap-3 mt-8">
                  <SocialIcon icon={FaTwitter} />
                  <SocialIcon icon={FaFacebookF} />
                  <SocialIcon icon={FaInstagram} />
                  <SocialIcon icon={FaGithub} />
                </div>
              </div>
              {/* RIght */}
              <div className="grow grid md:grid-cols-4 grid-cols-2 gap-y-5">
                <FooterLink />
                <FooterLink />
                <FooterLink />
                <FooterLink />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Footer;
