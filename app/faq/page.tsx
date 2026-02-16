import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "FAQ | TKEA237",
  description: "Frequently asked questions about TKEA237 and our products.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept Credit/Debit Cards (Visa, Mastercard), Mobile Money (MTN, Orange), Bank Transfers, and Cash on Delivery in select locations. All payments are processed securely."
    },
    {
      question: "How long is the delivery time?",
      answer: "Standard delivery takes 5-7 business days. Express delivery is available for 2-3 business days in major cities. Delivery time may vary depending on your location."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, 100% authentic! We source directly from authorized Korean manufacturers and distributors. All products come with manufacturer warranties and authenticity guarantees."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day money-back guarantee on all products. If you're not satisfied, simply return the item in original condition within 14 days for a full refund."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, all products come with manufacturer warranties. Most electronics have 1-2 year warranties. Extended warranties are also available for some products."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via email and SMS. You can track your package in real-time through our website."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to 15+ African countries including Cameroon, Nigeria, Ghana, Kenya, Uganda, and more. Shipping costs vary by destination."
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be cancelled within 2 hours of placement. After that, the order enters the fulfillment process. Contact our support team for assistance."
    },
    {
      question: "Do you have a physical store?",
      answer: "Currently, we operate primarily as an online store. We have a headquarters in Yaoundé where you can visit by prior appointment."
    },
    {
      question: "How do I join the Loyalty Card program?",
      answer: "Visit our Loyalty Card page and apply for free membership. Start earning points on every purchase and enjoy exclusive benefits."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Frequently Asked Questions" subtitle="Find answers to common questions about TKEA237" />
        
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <summary className="p-6 cursor-pointer font-bold text-gray-900 flex justify-between items-center hover:bg-blue-50">
                <span>{faq.question}</span>
                <span className="text-blue-600">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Didn't find your answer?</h2>
          <p className="text-lg mb-6">Our customer support team is here to help 24/7.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            Contact Support
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">Chat Support</h3>
            <p className="text-gray-600 text-sm">Get instant help via live chat. Available 24/7 for your convenience.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm">Send us an email at support@tkea237.com and we'll respond within 24 hours.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 text-sm">Call us at +237 XXXX XXXX. Our team is ready to assist you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
