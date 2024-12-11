"use client";

import { Card } from "./card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  colorClass?: string;
}

export function ServiceCard({ title, description, colorClass = "bg-primary" }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={cn(
        "relative overflow-hidden h-64 group cursor-pointer transition-all duration-300",
        colorClass,
        isHovered ? "shadow-2xl" : "shadow-lg"
      )}>
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />
        </div>
        <div className="relative h-full p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className={cn(
            "text-white/90 transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-80"
          )}>
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}