import React from 'react';
import { FaShieldAlt, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          {/* <strong>Effective Date:</strong> [Insert Date] */}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
            Introduction
          </h2>
          <p className="text-gray-600">
            Zayan Contracting LLC is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Personal Information:</strong> Includes your name, email address, phone number, and any other details you provide.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including IP addresses and browser type.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
            How We Use Your Information
          </h2>
          <p className="text-gray-600">
            We use your information to provide, maintain, and improve our services, communicate with you, and ensure the security of our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
            Information Sharing and Disclosure
          </h2>
          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer your personal information to outside parties, except as required by law or as necessary to provide our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
            Security Measures
          </h2>
          <p className="text-gray-600">
            We implement various security measures to protect your information. However, no method of transmission over the Internet or electronic storage is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaShieldAlt className="w-6 h-6 text-green-500 mr-2" />
            Changes to Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaInfoCircle className="w-6 h-6 text-blue-500 mr-2" />
            Contact Us
          </h2>
          <div className="text-gray-600">
            <p className="flex items-center mb-2">
              <FaPhone className="w-5 h-5 text-green-500 mr-2" />
              408.649.1164
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="w-5 h-5 text-blue-500 mr-2" />
              <a href="mailto:zayancontracting2024@gmail.com">zayancontracting2024@gmail.com</a>
            </p>
            <p className="text-gray-600">
              82 Louisa St, Brooklyn NY 11218
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
