"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-20 about-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              FIRST CHOICE ENGINEERING & CONSTRUCTION PTE. LTD. is a dynamic company established in 2016. We are devoted to customer satisfaction and consistently strive to understand our customer`s changing needs while maintaining exceptional quality in our products and services.
            </p>
            <p className="text-lg text-gray-700">
              We aim to achieve personnel and professional growth while expanding the strength of our organization. Our corporate growth allows us to further the opportunities for our employees and fulfill our commitment to our customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl bg-opacity-50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Our Mission</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span>Delivering excellence in engineering solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <span>Maintaining highest quality standards</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                <span>Building lasting client relationships</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}