"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { ServiceList } from "@/components/ui/service-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const electricalServices = [
  {
    title: "Electrical Testing & Commissioning",
    description: "Comprehensive testing and commissioning services for electrical systems",
    image: "https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg"
  },
  {
    title: "LV/MV/HV/EHV Services",
    description: "Expert services for all voltage levels",
    image: "https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg"
  },
  {
    title: "Industrial Installation",
    description: "E&I installation works for various industries",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
  }
];

const mechanicalServices = [
  {
    title: "Precision Machining",
    description: "Manual Machining, CNC, Boring, Grinding & Honing",
    image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg"
  },
  {
    title: "Welding Services",
    description: "Advanced welding solutions including PTA and Micro Plasma",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
  },
  {
    title: "Surface Treatment",
    description: "Thermal Spray Coating, Hard Chrome Plating, and more",
    image: "https://images.pexels.com/photos/4490192/pexels-photo-4490192.jpeg"
  }
];

const adHocServices = [
  {
    title: "Civil Works",
    description: "Minor civil works and structural modifications",
    image: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg"
  },
  {
    title: "Air Conditioning",
    description: "Installation, maintenance and servicing of HVAC systems",
    image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
  },
  {
    title: "Fire Protection",
    description: "Fire safety systems installation and maintenance",
    image: "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg"
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