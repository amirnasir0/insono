"use client";
import { useState } from "react";
import Hero from "./components/hero";
import Compare from "./components/compare";
import Feature from "./components/feature";
import Whychoose from "./components/whychoose";
import Testimonials from "@/components/testomonial";
import ProductSection from "@/components/ProductSection";
import FAQ from "./components/FAQ";
export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <Hero />
      </section>
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#fff] to-white flex flex-col items-center justify-center text-center -mt-10">
        <ProductSection />
      </section>
      <Feature />
      <Compare />
      <Whychoose />
      <Testimonials />
      <FAQ />
    </>
  );
}
