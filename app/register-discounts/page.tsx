import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Register Discounts | TKEA237",
  description: "Register now to unlock exclusive discounts and special offers.",
};

export default function RegisterDiscountsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Register for Exclusive Discounts" subtitle="Become a member and enjoy special benefits" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Member Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                <span className="text-gray-700">10% discount on all purchases</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                <span className="text-gray-700">Early access to new products</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                <span className="text-gray-700">Free shipping on orders over 50,000 XAF</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                <span className="text-gray-700">Exclusive member-only sales</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                <span className="text-gray-700">Priority customer support</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✓</span>
                <span className="text-gray-700">Earn loyalty points on every purchase</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Register Now</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <input 
                type="password" 
                placeholder="Create Password" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">I agree to terms and conditions</span>
              </label>
              <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
