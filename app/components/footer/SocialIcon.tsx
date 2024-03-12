import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps {
  icon: IconType;
  outline?: boolean;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, outline }) => {
  return (
    <div
      className={`${
        outline ? "bg-white" : "bg-black"
      } border-[1px] border-black/30 rounded-full h-10 w-10 flex justify-center items-center p-2`}
    >
      <Icon size={18} color="white" />
    </div>
  );
};

export default SocialIcon;
