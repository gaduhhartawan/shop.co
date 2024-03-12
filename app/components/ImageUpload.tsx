"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<Props> = ({ onChange, value }) => {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="ecommerce_preset"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <>
            <div
              onClick={() => open?.()}
              className="bg-white border-[1px] border-black/30 rounded-lg py-5 px-3 cursor-pointer flex items-center justify-between"
            >
              <div>Click to Upload</div>
              {value && (
                <Image
                  alt="image"
                  width={90}
                  height={90}
                  objectFit="cover"
                  src={value}
                />
              )}
            </div>
          </>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
