import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "How to Buy at TKEA237 | TKEA237",
  description: "Step-by-step guide on how to buy products at TKEA237.",
};

export default function HowToBuyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="How to Buy at TKEA237" subtitle="Simple steps to get your premium electronics" />
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                step: 1,
                title: "Create Account",
                description: "Sign up or log in to your TKEA237 account to get started shopping."
              },
              {
                step: 2,
                title: "Browse Products",
                description: "Explore our wide selection of Korean electronics and find what you need."
              },
              {
                step: 3,
                title: "Add to Cart",
                description: "Select your desired products and quantities, then add them to your cart."
              },
              {
                step: 4,
                title: "Checkout",
                description: "Review your order, enter shipping details, and choose your payment method."
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md p-6 text-center border border-blue-100">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Buying Guide</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">1. Account Registration</h3>
                <p className="text-gray-600 mb-3">
                  Visit our website and click "Register" or "Sign Up". Fill in your basic information including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Strong password</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  Once registered, you can save your preferences and payment methods for faster checkout next time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">2. Browsing & Searching</h3>
                <p className="text-gray-600 mb-3">
                  Use our intuitive interface to find products:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Browse by category (Smartphones, Tablets, Laptops, etc.)</li>
                  <li>Use search filters to narrow down by price, brand, and features</li>
                  <li>Read product descriptions and customer reviews</li>
                  <li>Check product availability and delivery timeframes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">3. Adding to Cart</h3>
                <p className="text-gray-600 mb-3">
                  When you find a product you like:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Click "Add to Cart" button</li>
                  <li>Select the quantity you want</li>
                  <li>You can continue shopping or proceed to checkout</li>
                  <li>Your cart is saved for 30 days if you don't purchase</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">4. Checkout Process</h3>
                <p className="text-gray-600 mb-3">
                  Complete these steps to finalize your purchase:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Review items in your cart</li>
                  <li>Enter or confirm shipping address</li>
                  <li>Select shipping method (Standard, Express, etc.)</li>
                  <li>Choose payment method (Cards, Mobile Money, Bank Transfer)</li>
                  <li>Review order summary and confirm purchase</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">5. Payment Methods</h3>
                <p className="text-gray-600 mb-3">
                  We accept multiple secure payment options:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Credit/Debit Cards (Visa, Mastercard)</li>
                  <li>Mobile Money (MTN, Orange)</li>
                  <li>Bank Transfer</li>
                  <li>Cash on Delivery (select locations)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">6. Order Confirmation & Tracking</h3>
                <p className="text-gray-600 mb-3">
                  After successful payment:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>You'll receive an order confirmation email</li>
                  <li>Track your shipment in real-time</li>
                  <li>Receive SMS updates on delivery status</li>
                  <li>Contact support anytime with questions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Secure Shopping</h3>
              <p className="text-gray-600 text-sm">All transactions are encrypted with SSL security.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Standard delivery within 5-7 business days.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900 mb-2">Authentic Products</h3>
              <p className="text-gray-600 text-sm">100% genuine Korean electronics guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
