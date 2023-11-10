"use client";

import Image from "next/image";
import React, { useState } from "react";

interface iProductImagesProps {
  imageUrls: string[];
  name: string;
}
const ProductImages = ({ imageUrls, name }: iProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              imageUrl === currentImage &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => setCurrentImage(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
