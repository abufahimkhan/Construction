import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
    const images = [
        "/project/p-1.jpg",
        "/project/p-2.jpg",
        "/project/p-3.jpg",
        "/project/p-4.jpg",
        "/project/p-5.jpg",
        "/project/p-6.jpg",
        "/g4.jpg"
    ];

    return (
        <section className="bg-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="relative flex justify-center py-8 mb-10">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-3xl font-bold text-gray-900 text-center">
                        Our Projects
                    </span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.slice(0, -1).map((src, index) => (
                        <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2">
                            <Image
                                src={src}
                                alt={`Project Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                    <div className="relative col-span-full w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={images[images.length - 1]}
                            alt="Full Width Project Image"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
