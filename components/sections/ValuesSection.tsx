"use client";

import { Card } from "@/components/ui/card";

export function ValuesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Environmental Responsibility</h3>
            <p>Constantly reminding our teams to be aware of environmental safety and guidelines to protect our environment.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Safety</h3>
            <p>BizSAFE Star certificate holder to recognize and award Safety standards.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Work Ethics & Moral Conduct</h3>
            <p>Great record of ethical values possessed by our teams during both onsite and off-site projects.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}