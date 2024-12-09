"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              FIRST CHOICE ENGINEERING & CONSTRUCTION PTE. LTD. is a dynamic company established in 2016. We are devoted to customer satisfaction and consistently strive to understand our customers' changing needs while maintaining exceptional quality in our products and services.
            </p>
            <p className="text-lg text-gray-700">
              We aim to achieve personnel and professional growth while expanding the strength of our organization. Our corporate growth allows us to further the opportunities for our employees and fulfill our commitment to our customers.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470"
              alt="Engineering work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}