"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">First Choice Engineering</h3>
            <p className="text-sm">
              Your trusted partner in engineering excellence since 2016. Providing comprehensive
              electrical and mechanical solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <p className="text-sm">
                  22 Sin Ming Lane, Mid View City<br />
                  Level #06-76, Singapore 573969
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <p className="text-sm">(65) 6424 0423</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:sbalaji@firstchoiceenc.com" className="text-sm hover:text-white">
                  sbalaji@firstchoiceenc.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-sm hover:text-white">About Us</Link>
              <Link href="#services" className="block text-sm hover:text-white">Our Services</Link>
              <Link href="#values" className="block text-sm hover:text-white">Our Values</Link>
              <Link href="#contact" className="block text-sm hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} First Choice Engineering & Construction Pte Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}