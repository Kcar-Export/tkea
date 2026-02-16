"use client";

// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/drony.png", alt: "drone" },
    { src: "/phony.png", alt: "phone" },
    { src: "/playi.png", alt: "player" },
    { src: "/speaky.png", alt: "speaker" },
    { src: "/tvy.png", alt: "tv" },
    { src: "/camy.png", alt: "camera" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[700px] w-full bg-blue-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            THE PRODUCT OF THE FUTURE
          </h1>
          <p className="text-white max-sm:text-sm">
            Discover premium Korean electronics delivered straight to Cameroon and across Africa. Experience innovation, quality, and affordability in one digital marketplace.
          </p>
          <Link href="/shop" className="block text-blue-600 bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2 max-md:text-lg max-md:w-72 max-[480px]:w-60">
            SHOP NOW
          </Link>
        </div>
        <Image
          src={images[currentImageIndex].src}
          width={400}
          height={400}
          alt={images[currentImageIndex].alt}
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
