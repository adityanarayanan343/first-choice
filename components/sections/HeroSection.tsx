"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070"
        alt="Engineering background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          First Choice Engineering & Construction
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl">
          Your trusted partner in engineering excellence since 2016
        </p>
        <Button className="mt-8" size="lg">
          Contact Us
        </Button>
      </div>
    </section>
  );
}