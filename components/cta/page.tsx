import Image from "next/image";
import React from "react";

const CTA: React.FC = () => {
    return (
        <section className="overflow-hidden bg-gray-50 sm:flex">
            <div className="relative w-full sm:w-1/2  lg:h-[510px] md:h-[510px] sm:h-[510px] h-[210px] mb-2 lg:mb-5 mt-8">
                <Image
                    alt="Worker"
                    src="/worker.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="w-full h-full"
                />
            </div>

            <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex items-center justify-center w-full sm:w-1/2">
                <div className="max-w-xl text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Zayan Contracting LLC General Contractor
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Free Estimates
                    </p>

                    <p className="mt-2 text-gray-500">
                        At Zayan Contracting LLC, we offer comprehensive services including roofing, waterproofing, steam cleaning, brick pointing, brownstone repair, all types of cement work, framing and carpentry, exterior and interior painting, and plumbing and electric work. Our team of skilled professionals is dedicated to providing top-notch workmanship and exceptional customer service for all your construction and renovation needs.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;
