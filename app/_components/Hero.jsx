import React from "react";
// import Image from "next/image";
import { HeroSectionOne } from "@/components/ui/HeroSectionOne";
function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <HeroSectionOne/>
      </div>
    </section>
  );
}

export default Hero;
