import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaIdBadge } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <section className="overflow-hidden bg-[url('/contact.jpg')] bg-cover bg-top bg-no-repeat">
            <div className="bg-black/60 p-4 md:p-6 lg:px-8 lg:py-8 flex items-center justify-center min-h-[30vh]">
                <div className="relative bg-white/20 backdrop-blur-md p-4 md:p-6 lg:px-6 lg:py-8 rounded-lg shadow-lg text-center text-white max-w-lg mx-auto">
                    <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">Contact Us</h2>

                    <div className="max-w-md mx-auto mt-4 md:mt-6 space-y-2">
                        <p className="text-sm font-bold">Fully Licensed & Insured</p>
                        <p className="text-sm font-semibold">Nurul Karim, President & CEO</p>
                        <p className="text-sm font-semibold">Zayan Contracting LLC, General Contractor</p>
                        <p className="text-sm font-bold mt-2">Our Services:</p>
                        <p className="text-sm">
                            Roofing, Waterproofing, Steam Cleaning, Brick Pointing, Brownstone Repair, All kinds of Cement Work, Framing & Carpentry, Painting Exterior & Interior, Plumbing & Electric work
                        </p>
                        <p className="text-sm font-semibold">zayancontracting2024@gmail.com</p>
                        <p className="text-sm font-semibold">82 Louisa St. Brooklyn NY 11218</p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <a
                            href="tel:929-539-9509"
                            className="inline-block rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
