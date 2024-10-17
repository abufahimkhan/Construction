import React from 'react';
import { FaFileContract, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-4">
          {/* <strong>Effective Date:</strong> [Insert Date] */}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaFileContract className="w-6 h-6 text-blue-500 mr-2" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By using Zayan Contracting LLC&apos;s website, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaFileContract className="w-6 h-6 text-blue-500 mr-2" />
            Use of the Website
          </h2>
          <p className="text-gray-600">
            You may use our website for lawful purposes only. You agree not to use the website for any illegal or unauthorized activities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaFileContract className="w-6 h-6 text-blue-500 mr-2" />
            Limitation of Liability
          </h2>
          <p className="text-gray-600">
            Zayan Contracting LLC is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaFileContract className="w-6 h-6 text-blue-500 mr-2" />
            Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms of Service are governed by and construed in accordance with the laws of the state.
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

export default TermsOfService;
