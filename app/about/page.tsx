import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "About TKEA237 | TKEA237",
  description: "Learn about TKEA237 - your trusted source for premium Korean electronics in Africa.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="About TKEA237" subtitle="Your trusted source for premium Korean electronics" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              TKEA237 was founded with a simple mission: to bring premium Korean electronics to Africa at affordable prices. 
              We believe that quality technology should be accessible to everyone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Since our inception, we've served thousands of satisfied customers across multiple African countries. 
              Our commitment to excellence and customer satisfaction has made us a trusted name in the electronics industry.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We partner directly with leading Korean manufacturers to ensure authentic products and the best prices 
              for our customers in Cameroon and across Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">15K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Brands</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">15</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">To provide authentic, high-quality Korean electronics to customers across Africa at competitive prices.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">To be the leading electronics marketplace in Africa, known for quality, reliability, and customer excellence.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">Integrity, quality, innovation, and customer satisfaction in everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
