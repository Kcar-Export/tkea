import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Contact Us | TKEA237",
  description: "Get in touch with TKEA237 customer service team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Contact Us" subtitle="We're here to help! Get in touch with our team" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
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
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600">
                <option>Select Subject</option>
                <option>Product Inquiry</option>
                <option>Order Support</option>
                <option>General Question</option>
                <option>Complaint</option>
                <option>Partnership</option>
              </select>
              <textarea 
                placeholder="Your Message" 
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📍 Headquarters</h3>
                <p className="text-gray-600">
                  Yaoundé, Cameroon<br/>
                  Central Africa
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📞 Phone</h3>
                <p className="text-gray-600">
                  +237 XXXX XXXX<br/>
                  Available 24/7
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📧 Email</h3>
                <p className="text-gray-600">
                  support@tkea237.com<br/>
                  info@tkea237.com
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">⏰ Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br/>
                  Saturday: 10:00 AM - 4:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">🚀 Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-200">Facebook</a>
                  <a href="#" className="hover:text-blue-200">Twitter</a>
                  <a href="#" className="hover:text-blue-200">Instagram</a>
                  <a href="#" className="hover:text-blue-200">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
