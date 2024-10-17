import React from 'react';

const Hero: React.FC = () => {
    return (

        <section className="relative overflow-hidden bg-[url('/banner.jpg')] bg-cover bg-top bg-no-repeat">
            <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Building Dreams, One Brick at a Time
                    </h2>
                    <p className="hidden max-w-lg text-white/90 mx-auto md:mt-6 md:block md:text-lg md:leading-relaxed">
                        At Zayan Contracting LLC, we turn your visions into reality with our expert construction and renovation services. From roofing to interior painting, our skilled team is dedicated to delivering excellence in every project.
                    </p>
                    <div className="mt-4 sm:mt-8">
                        <a
                            href="/services"
                            className="inline-block rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:none"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
