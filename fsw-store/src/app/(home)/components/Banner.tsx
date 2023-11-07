import Image, { ImageProps } from "next/image";
import React from "react";

const Banner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className="h-auto w-full"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default Banner;
