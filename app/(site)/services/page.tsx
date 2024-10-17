import React from 'react';
import Image from 'next/image';

const Service: React.FC = () => {
    return (
        <section className="bg-white text-black">
            <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-8">
                <span className="relative flex justify-center mt-10 mb-10">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-100"
                        >

                    </div>

                    <span className="relative z-10 bg-white px-6 py-2 text-3xl font-bold text-gray-900 text-center">
                        What We Provide
                    </span>
                </span>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block rounded-xl p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4">
                            <Image
                                alt="Roofing & Waterproofing"
                                src="/roof.png"
                                width={64}
                                height={64}
                                objectFit="contain"
                                className="w-full h-full"
                            />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-black">Roofing & Waterproofing</h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Specializing in roofing, waterproofing, steam cleaning, brick pointing, and brownstone repair.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4">
                            <Image
                                alt="Comprehensive Construction"
                                src="/construction.png"
                                width={64}
                                height={64}
                                objectFit="contain"
                                className="w-full h-full"
                            />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-black">Comprehensive Construction</h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Offering cement work, framing, carpentry, painting (exterior & interior), plumbing, and electrical work.
                        </p>
                    </a>

                    <a
                        className="block rounded-xl p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                        href="#"
                    >
                        <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4">
                            <Image
                                alt="Expert Building & Renovation"
                                src="/renovation.png"
                                width={64}
                                height={64}
                                objectFit="contain"
                                className="w-full h-full"
                            />
                        </div>

                        <h2 className="mt-4 text-xl font-bold text-black">Expert Building & Renovation</h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Expertise in framing, carpentry, painting (exterior & interior), plumbing, and electrical work.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Service;
