import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Complaints | TKEA237",
  description: "File a complaint or report an issue with TKEA237.",
};

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Customer Complaints" subtitle="We value your feedback and take your concerns seriously" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">File a Complaint</h2>
            <form className="bg-white rounded-lg shadow-md p-8 space-y-4">
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
                type="text" 
                placeholder="Order Number (if applicable)" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600">
                <option>Select Complaint Type</option>
                <option>Product Quality</option>
                <option>Delivery Issue</option>
                <option>Wrong Item</option>
                <option>Damaged Package</option>
                <option>Customer Service</option>
                <option>Payment Issue</option>
                <option>Other</option>
              </select>
              <textarea 
                placeholder="Describe your complaint in detail" 
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
                Submit Complaint
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Complaint Process</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Submit Your Complaint</h3>
                    <p className="text-gray-600">Fill out the complaint form with all relevant details about your issue.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Investigation</h3>
                    <p className="text-gray-600">Our team will investigate your complaint within 48 hours and contact you.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Resolution</h3>
                    <p className="text-gray-600">We will work to resolve your issue and provide compensation if necessary.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Follow-up</h3>
                    <p className="text-gray-600">We will follow up to ensure you are satisfied with the resolution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-3">Response Time Commitment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Initial response within 48 hours</li>
                <li>✓ Investigation completed within 5 business days</li>
                <li>✓ Resolution provided within 10 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
