import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "TKEA237 Loyalty Card | TKEA237",
  description: "Join our loyalty program and earn rewards on every purchase.",
};

export default function LoyaltyCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="TKEA237 Loyalty Card" subtitle="Earn rewards and enjoy exclusive benefits" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-2">TKEA237 Loyalty Card</h3>
              <p className="text-blue-100 mb-6">Your ticket to exclusive rewards</p>
              <div className="bg-white bg-opacity-20 rounded p-4 font-mono text-lg">TKEA237-XXXX-XXXX-XXXX</div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-gray-900">Sign Up</h3>
                  <p className="text-gray-600">Register for a free TKEA237 Loyalty Card</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-gray-900">Shop & Earn</h3>
                  <p className="text-gray-600">Earn 1 point per 100 XAF spent</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-gray-900">Redeem</h3>
                  <p className="text-gray-600">Use points to get discounts on future purchases</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Card Benefits</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">💰 Earn Points</h3>
                <p className="text-gray-600">Accumulate points with every purchase and redeem for rewards</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🎁 Exclusive Offers</h3>
                <p className="text-gray-600">Get access to exclusive deals and early product launches</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🚚 Free Shipping</h3>
                <p className="text-gray-600">Free shipping on orders over 50,000 XAF for card members</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📞 Priority Support</h3>
                <p className="text-gray-600">Get priority customer support on all your inquiries</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🎉 Birthday Bonus</h3>
                <p className="text-gray-600">Receive special birthday discounts and bonus points</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🌟 VIP Tier</h3>
                <p className="text-gray-600">Unlock VIP status with higher point multipliers</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 mt-8">
              Apply for Loyalty Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
