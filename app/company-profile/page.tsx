import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Company Profile | TKEA237",
  description: "TKEA237 company information and background.",
};

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Company Profile" subtitle="TKEA237 - Premium Electronics for Africa" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Company Name</h3>
                <p className="text-gray-600">TKEA237 - Electronics & Technology Solutions</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Founded</h3>
                <p className="text-gray-600">2020</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Headquarters</h3>
                <p className="text-gray-600">Yaoundé, Cameroon</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Type</h3>
                <p className="text-gray-600">E-commerce & Electronics Retail</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Service Areas</h3>
                <p className="text-gray-600">15+ African Countries</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Operating Model</h3>
                <p className="text-gray-600">Direct partnerships with Korean manufacturers for authentic products at competitive prices</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Milestones</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2020</h3>
                <p className="text-gray-600">TKEA237 founded with vision to bring quality electronics to Africa</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2021</h3>
                <p className="text-gray-600">Expanded to 5 African countries, 5,000+ customers served</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2023</h3>
                <p className="text-gray-600">Reached 10,000+ customers across 10 countries</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2026</h3>
                <p className="text-gray-600">Operating in 15+ countries with 500+ product offerings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-blue-600 text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg leading-relaxed">
            We are committed to providing authentic Korean electronics with excellent customer service, fair pricing, 
            and reliable delivery across Africa. We believe in transparency, quality, and building lasting relationships with our customers.
          </p>
        </div>
      </div>
    </div>
  );
}
