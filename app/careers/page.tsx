import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Work With Us | TKEA237",
  description: "Join our team and help us build the future of electronics retail in Africa.",
};

export default function CareersPage() {
  const positions = [
    {
      title: "Sales Executive",
      location: "Yaoundé, Cameroon",
      type: "Full-time"
    },
    {
      title: "Customer Support Specialist",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      location: "Yaoundé, Cameroon",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Logistics Coordinator",
      location: "Yaoundé, Cameroon",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Work With Us" subtitle="Join our growing team and shape the future of tech retail" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="mr-4">📍 {position.location}</span>
                    <span>⏱️ {position.type}</span>
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span className="text-gray-600">Competitive salary & benefits</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span className="text-gray-600">Professional growth opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span className="text-gray-600">Flexible work arrangements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span className="text-gray-600">Health insurance coverage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span className="text-gray-600">Team-oriented environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span className="text-gray-600">Make an impact in Africa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
