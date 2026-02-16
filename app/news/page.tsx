import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "News | TKEA237",
  description: "Latest news and updates about Korean electronics and TKEA237.",
};

export default function NewsPage() {
  const articles = [
    {
      title: "New Samsung Galaxy Series Now Available",
      date: "February 15, 2026",
      excerpt: "Exclusive launch of the latest Samsung Galaxy smartphones with cutting-edge technology.",
      category: "Product Launch"
    },
    {
      title: "TKEA237 Expands to 15 African Countries",
      date: "February 10, 2026",
      excerpt: "We're thrilled to announce our expansion across Africa, bringing premium electronics closer to you.",
      category: "Business"
    },
    {
      title: "Customer Appreciation Week Starting Today",
      date: "February 8, 2026",
      excerpt: "Join us for our annual customer appreciation week with special deals and exclusive discounts.",
      category: "Promotion"
    },
    {
      title: "Smart Home Technology Guide Released",
      date: "February 5, 2026",
      excerpt: "Check out our comprehensive guide on setting up your smart home ecosystem.",
      category: "Educational"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Latest News & Updates" subtitle="Stay informed about our latest products and announcements" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-8">
                <span className="text-blue-600 text-sm font-semibold">{article.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <p className="text-gray-400 text-sm">{article.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest news and exclusive offers delivered to your inbox.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
