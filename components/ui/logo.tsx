"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpeg"
export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-48 h-12">
        <Image
          src={logo}
          alt="First Choice Engineering & Construction"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}