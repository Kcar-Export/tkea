import React from "react";
import { Heading } from "@/components";

export const metadata = {
  title: "Privacy Policy | TKEA237",
  description: "Privacy Policy for TKEA237 website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-24">
        <Heading title="Privacy Policy" subtitle="Your privacy is important to us" />
        
        <div className="mt-16 max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              TKEA237 ("we" or "us" or "our") operates the TKEA237 website. This page informs you of our policies regarding the collection, use, 
              and disclosure of personal data when you use our website and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection and Use</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We collect several different types of information for various purposes to provide and improve our service:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Account Information:</strong> Name, email address, phone number, shipping address</li>
              <li><strong>Payment Information:</strong> Credit card data (processed securely through payment gateways)</li>
              <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, and customer support interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Data</h2>
            <p className="text-gray-600 leading-relaxed mb-3">TKEA237 uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and maintain our website and services</li>
              <li>To notify you about changes to our website or services</li>
              <li>To allow you to participate in interactive features of our website</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information to improve our website</li>
              <li>To monitor usage of our website</li>
              <li>To detect, prevent, and address technical and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of Data</h2>
            <p className="text-gray-600 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic 
              storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its 
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mt-4">
              <p className="text-gray-600"><strong>Email:</strong> privacy@tkea237.com</p>
              <p className="text-gray-600"><strong>Address:</strong> Yaoundé, Cameroon</p>
              <p className="text-gray-600"><strong>Phone:</strong> +237 XXXX XXXX</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
