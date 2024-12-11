"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const values = [
  {
    title: "Environmental Responsibility",
    description: "Constantly reminding our teams to be aware of environmental safety and guidelines to protect our environment.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Safety",
    description: "BizSAFE Star certificate holder to recognize and award Safety standards.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Work Ethics & Moral Conduct",
    description: "Great record of ethical values possessed by our teams during both onsite and off-site projects.",
    color: "from-orange-500 to-yellow-500"
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 values-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Our Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full bg-white bg-opacity-50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 w-24 mb-6 rounded-full bg-gradient-to-r ${value.color}`} />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}