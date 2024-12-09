"use client";

import { Check } from "lucide-react";

interface ServiceListProps {
  title: string;
  services: string[];
}

export function ServiceList({ title, services }: ServiceListProps) {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}