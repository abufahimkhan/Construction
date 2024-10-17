'use client'
import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaHandshake, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/about.jpg" // Replace with the path to your image
          alt="Zayan Contracting Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Company Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Zayan Contracting LLC is a premier construction and renovation company committed to delivering excellence in every project we undertake. With over a decade of experience, we specialize in a range of services, including roofing, waterproofing, painting, and much more. Our team is dedicated to ensuring the highest quality craftsmanship and customer satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaBuilding className="w-8 h-8 text-blue-500 mr-2" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide top-notch construction and renovation services that exceed our client&apos;s expectations. We aim to create lasting relationships built on trust, integrity, and exceptional service. Our focus is on delivering projects on time and within budget while maintaining the highest standards of quality and safety.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaHandshake className="w-8 h-8 text-blue-500 mr-2" />
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>Integrity: We conduct our business with honesty and transparency.</li>
            <li>Quality: We are committed to delivering high-quality workmanship.</li>
            <li>Customer Satisfaction: We prioritize our client&apos;s needs and strive to exceed their expectations.</li>
            <li>Safety: We adhere to the highest safety standards on all our projects.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaUsers className="w-8 h-8 text-blue-500 mr-2" />
            Our Team
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our team consists of highly skilled professionals with extensive experience in the construction industry. Each member is dedicated to providing exceptional service and ensuring the success of every project. We believe that a strong, collaborative team is key to achieving our goals and delivering outstanding results.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaPhone className="w-8 h-8 text-blue-500 mr-2" />
            Contact Us
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              <FaEnvelope className="inline-block w-5 h-5 text-blue-500 mr-2" />
              Email: <a href="mailto:zayancontracting2024@gmail.com" className="text-blue-500 hover:underline">zayancontracting2024@gmail.com</a>
            </p>
            <p className="text-gray-700 mb-4">
              <FaPhone className="inline-block w-5 h-5 text-blue-500 mr-2" />
              Phone: <a href="tel:+14155552671" className="text-blue-500 hover:underline">+1 (415) 555-2671</a>
            </p>
            <p className="text-gray-700 mb-4">
              <FaMapMarkerAlt className="inline-block w-5 h-5 text-blue-500 mr-2" />
              Address: 82 Louisa St. Brooklyn NY 11218
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
