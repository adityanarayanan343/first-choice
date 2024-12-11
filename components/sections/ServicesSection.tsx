"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { ServiceList } from "@/components/ui/service-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const electricalServices = [
  {
    title: "Electrical Testing & Commissioning",
    description: "Comprehensive testing and commissioning services for electrical systems",
    colorClass: "bg-[#FF6B6B]"
  },
  {
    title: "LV/MV/HV/EHV Services",
    description: "Expert services for all voltage levels",
    colorClass: "bg-[#4ECDC4]"
  },
  {
    title: "Industrial Installation",
    description: "E&I installation works for various industries",
    colorClass: "bg-[#45B7D1]"
  }
];

const mechanicalServices = [
  {
    title: "Precision Machining",
    description: "Manual Machining, CNC, Boring, Grinding & Honing",
    colorClass: "bg-[#96CEB4]"
  },
  {
    title: "Welding Services",
    description: "Advanced welding solutions including PTA and Micro Plasma",
    colorClass: "bg-[#FF8B94]"
  },
  {
    title: "Surface Treatment",
    description: "Specialized coating solutions for industrial applications",
    colorClass: "bg-[#9B5DE5]"
  }
];

const adHocServices = [
  {
    title: "Civil Works",
    description: "Minor civil works and structural modifications",
    colorClass: "bg-[#F15BB5]"
  },
  {
    title: "Air Conditioning",
    description: "Installation, maintenance and servicing of HVAC systems",
    colorClass: "bg-[#00BBF9]"
  },
  {
    title: "Fire Protection",
    description: "Comprehensive fire safety systems and solutions",
    colorClass: "bg-[#00F5D4]"
  },
  {
    title: "Plumbing Services",
    description: "Complete plumbing solutions and maintenance",
    colorClass: "bg-[#FEE440]"
  },
  {
    title: "Renovation Works",
    description: "Interior and exterior renovation services",
    colorClass: "bg-[#9B5DE5]"
  },
  {
    title: "Facility Management",
    description: "Comprehensive facility maintenance and management",
    colorClass: "bg-[#FF6B6B]"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
        >
          Our Services
        </motion.h2>
        
        <Tabs defaultValue="electrical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="electrical">Electrical Trade</TabsTrigger>
            <TabsTrigger value="mechanical">Mechanical Trade</TabsTrigger>
            <TabsTrigger value="adhoc">Ad-Hoc Works</TabsTrigger>
          </TabsList>
          
          <TabsContent value="electrical">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 gap-6"
            >
              {electricalServices.map((service, index) => (
                <motion.div key={index} variants={item}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="mechanical">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 gap-6"
            >
              {mechanicalServices.map((service, index) => (
                <motion.div key={index} variants={item}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="adhoc">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-3 gap-6"
            >
              {adHocServices.map((service, index) => (
                <motion.div key={index} variants={item}>
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}