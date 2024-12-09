"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { ServiceList } from "@/components/ui/service-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const electricalServices = [
  {
    title: "Electrical Testing & Commissioning",
    description: "Comprehensive testing and commissioning services for electrical systems",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1469"
  },
  {
    title: "LV/MV/HV/EHV Services",
    description: "Expert services for all voltage levels",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1470"
  },
  {
    title: "Industrial Installation",
    description: "E&I installation works for various industries",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=1470"
  }
];

const mechanicalServices = [
  {
    title: "Precision Machining",
    description: "Manual Machining, CNC, Boring, Grinding & Honing",
    image: "https://images.unsplash.com/photo-1612690669207-fed642192c40?q=80&w=1470"
  },
  {
    title: "Welding Services",
    description: "Advanced welding solutions including PTA and Micro Plasma",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470"
  },
  {
    title: "Surface Treatment",
    description: "Thermal Spray Coating, Hard Chrome Plating, and more",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1469"
  }
];

const adHocServices = [
  {
    title: "Civil Works",
    description: "Minor civil works and structural modifications",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470"
  },
  {
    title: "Air Conditioning",
    description: "Installation, maintenance and servicing of HVAC systems",
    image: "https://unsplash.com/photos/a-person-holding-a-remote-control-in-front-of-a-wall-mounted-air-conditioner-3iLFQj2bXq0"
  },
  {
    title: "Fire Protection",
    description: "Fire safety systems installation and maintenance",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=1470"
  }
];

const electricalAdditionalServices = [
  "Comprehensive Electrical Maintenance",
  "Generator Servicing",
  "24/7 Emergency Breakdown Services",
  "Industrial Automation Solutions"
];

const mechanicalAdditionalServices = [
  "Laser Cutting",
  "Dynamic Balancing",
  "Non-Destructive Testing",
  "Ceramic Polymer & Epoxy Coating"
];

const adHocAdditionalServices = [
  "Plumbing & Sanitation Works",
  "General Facilities Maintenance",
  "Building Repairs",
  "Preventive Maintenance Services"
];

export function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <Tabs defaultValue="electrical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="electrical">Electrical Trade</TabsTrigger>
            <TabsTrigger value="mechanical">Mechanical Trade</TabsTrigger>
            <TabsTrigger value="adhoc">Ad-Hoc Works</TabsTrigger>
          </TabsList>
          
          <TabsContent value="electrical">
            <div className="grid md:grid-cols-3 gap-6">
              {electricalServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <ServiceList 
              title="Additional Electrical Services" 
              services={electricalAdditionalServices} 
            />
          </TabsContent>

          <TabsContent value="mechanical">
            <div className="grid md:grid-cols-3 gap-6">
              {mechanicalServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <ServiceList 
              title="Additional Mechanical Services" 
              services={mechanicalAdditionalServices} 
            />
          </TabsContent>

          <TabsContent value="adhoc">
            <div className="grid md:grid-cols-3 gap-6">
              {adHocServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <ServiceList 
              title="Additional Ad-Hoc Services" 
              services={adHocAdditionalServices} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}