"use client"
import CTA from "@/components/CTA";
import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full">
    <Hero />
    <Services />
    <AboutUs />
    <Partners />
    <WhatWeDo />
   </div>
  );
}
