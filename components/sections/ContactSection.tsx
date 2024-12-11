"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 contact-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  22 Sin Ming Lane, Mid View City<br />
                  Level #06-76<br />
                  Singapore 573969
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  Tel: (65) 6424 0423<br />
                  Mobile: (65) 90690716
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">sbalaji@firstchoiceenc.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Globe className="w-6 h-6 text-cyan-500 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Website</h3>
                <p className="text-gray-600">www.firstchoiceenc.com</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl bg-opacity-50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Business Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-semibold">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday & Public Holidays</span>
                <span className="font-semibold">Closed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}