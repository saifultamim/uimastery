"use client";

import React, { useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils/tailwind-utils";

interface HeroProps {
  children?: ReactNode;
  className?: string;
  backgroundImage?: StaticImageData | { src: string };
  overlay?: string;
}

const Hero: React.FC<HeroProps> = ({
  children,
  className,
  backgroundImage,
  overlay,
}) => {
  const [bgLoaded, setBgLoaded] = useState(false);

  const validSrc = backgroundImage?.src || null;

  return (
    <div
      className={cn("relative bg-gray-500 ", className)}
      style={{
        backgroundImage: validSrc ? `url(${validSrc}) ` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {validSrc && (
        <Image
          src={validSrc}
          alt="Hero Background"
          fill
          className="hidden "
          priority
          quality={85}
          sizes="100vw"
          onLoad={() => setBgLoaded(true)}
        />
      )}

      <div
        className={cn(
          "absolute inset-0 transition delay-150 duration-600 ease-in-out",
          bgLoaded ? "opacity-100" : "opacity-95 bg-gray-500"
        )}
        style={{
          backgroundImage: bgLoaded ? `url(${validSrc})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
        }}
      ></div>

      <div
        className={cn("absolute inset-0 bg-black bg-opacity-20", overlay)}
      ></div>

      {children}
    </div>
  );
};

export default Hero;
