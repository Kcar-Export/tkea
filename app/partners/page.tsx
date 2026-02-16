import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Partners | TKEA237",
  description: "Our trusted partners and brand collaborations.",
};

export default function PartnersPage() {
  const partners = [
    { name: "Samsung", category: "Electronics" },
    { name: "LG", category: "Electronics" },
    { name: "Sony", category: "Electronics" },
    { name: "Panasonic", category: "Electronics" },
    { name: "Hyundai Electronics", category: "Electronics" },
    { name: "Daewoo", category: "Electronics" },
    { name: "DHL", category: "Logistics" },
    { name: "FedEx", category: "Logistics" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Our Partners" subtitle="Leading brands and companies we work with" />
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Electronics Manufacturers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partners
              .filter(p => p.category === "Electronics")
              .map((partner, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md p-8 text-center border border-blue-100 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <p className="text-blue-600 text-sm mt-2">{partner.category}</p>
                </div>
              ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Logistics Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partners
              .filter(p => p.category === "Logistics")
              .map((partner, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md p-8 text-center border border-blue-100 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <p className="text-blue-600 text-sm mt-2">{partner.category}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-lg mb-6">
            Are you a manufacturer or logistics provider looking to expand your reach in Africa? We'd love to work with you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            Become a Partner
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-900 mb-2">Strategic Partnerships</h3>
            <p className="text-gray-600">We partner with industry leaders to bring the best products.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="font-bold text-gray-900 mb-2">Global Network</h3>
            <p className="text-gray-600">Our network spans across continents ensuring reliable service.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">All our partners meet strict quality and ethical standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
