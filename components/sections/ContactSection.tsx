"use client";

import Image from "next/image";

export function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">
              22 Sin Ming Lane, Mid View City<br />
              Level #06-76<br />
              Singapore 573969
            </p>
            <p className="mb-4">
              Mobile: (65) 90690716
            </p>
            <p>
              Email: sbalaji@firstchoiceenc.com<br />
              Website: www.firstchoiceenc.com
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469"
              alt="Contact"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}