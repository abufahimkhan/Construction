'use client'
import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files![0] : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission process
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null
      });
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Careers at Zayan Contracting LLC</h1>

        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
              <p className="text-gray-600 mb-4">Thank you for applying to Zayan Contracting LLC. We will review your application and get back to you soon.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaBriefcase className="w-6 h-6 text-blue-500 mr-2" />
            Current Openings
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Construction Manager</h3>
              <p className="text-gray-600 mb-2">
                We are seeking a Construction Manager to oversee and manage our construction projects. The role involves planning, coordinating, and ensuring the timely and successful completion of projects.
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-green-500 mr-2" />
                Brooklyn, NY
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center">
                Apply Now <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">General Laborer</h3>
              <p className="text-gray-600 mb-2">
                Looking for General Laborers to assist with various tasks on construction sites. Responsibilities include manual labor, loading and unloading materials, and supporting skilled workers.
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-green-500 mr-2" />
                Brooklyn, NY
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center">
                Apply Now <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Painter</h3>
              <p className="text-gray-600 mb-2">
                We are looking for skilled Painters to handle both interior and exterior painting tasks. The role requires attention to detail, knowledge of paint techniques, and ability to work efficiently.
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-green-500 mr-2" />
                Brooklyn, NY
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center">
                Apply Now <FaArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Electrician</h3>
              <p className="text-gray-600 mb-2">
                Seeking an experienced Electrician to install and maintain electrical systems. Ideal candidates should have strong technical skills and a commitment to safety and quality work.
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-green-500 mr-2" />
                Brooklyn, NY
              </p>
              <a href="#" className="text-blue-500 hover:underline flex items-center">
                Apply Now <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaEnvelope className="w-6 h-6 text-blue-500 mr-2" />
            Submit Your Application
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="resume" className="block text-gray-700">Resume (PDF)</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Careers;
