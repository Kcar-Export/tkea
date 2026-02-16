import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Discounts | TKEA237",
  description: "Discover our latest discounts and special offers on premium Korean electronics.",
};

export default function DiscountsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Special Discounts" subtitle="Save big on our premium electronics" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">20% Off Smartphones</h3>
            <p className="text-gray-600 mb-4">Premium Korean smartphones at unbeatable prices. Valid until end of month.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Shop Now</button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">15% Off Tablets</h3>
            <p className="text-gray-600 mb-4">High-performance tablets with advanced features. Limited stock available.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Shop Now</button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Free Shipping on Laptops</h3>
            <p className="text-gray-600 mb-4">Complimentary shipping on all laptop purchases. Nationwide delivery.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Shop Now</button>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Flash Sale This Weekend</h2>
          <p className="text-lg mb-6">Get up to 50% off on selected accessories. Don&apos;t miss this incredible opportunity!</p>
          <button className="bg-white text-blue-600 px-8 py-3 font-bold rounded hover:bg-gray-100">Browse Flash Sale</button>
        </div>
      </div>
    </div>
  );
}
