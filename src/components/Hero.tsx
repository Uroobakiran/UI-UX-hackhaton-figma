import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-auto bg-yellow-100 flex flex-col md:flex-row items-center justify-between px-6 py-16">
     
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          Rocket Single Seater
        </h1>
        <button className="text-black text-xl font-medium py-2 px-6 rounded underline hover:no-underline hover:text-blue-500 transition">
          Shop Now
        </button>
      </div>

      
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/img/homebanner.png"
          alt="Banner image"
          height={500}
          width={400}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
