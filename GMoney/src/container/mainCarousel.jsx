import React, { useState, useEffect } from "react";
import CarouselSlide from "../component/carousel.component";

const Carousel = ({ autoPlayInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: "src/assets/carousel1.webp",
            title: "10,300+ Hospitals And Clinics In India Trust GMoney Services",
            subtitle: "Join the GMoney network now",
            buttonText: "Contact Us",
            onButtonClick: () => alert("Contact clicked!"),
        },
        {
            image: "src/assets/carousel2.webp",
            title: "Making Healthcare Affordable",
            subtitle: "Helping patients access quality treatment",
            buttonText: "Contact Us",
            onButtonClick: () => alert("Contact clicked!"),
        },
        {
            image: "src/assets/carousel2.webp",
            title: "Partnering With Top Hospitals Nationwide",
            subtitle: "Trusted by doctors and clinics",
            buttonText: "Contact Us",
            onButtonClick: () => alert("Contact clicked!"),
        },
    ];

    // Auto play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [slides.length, autoPlayInterval]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slides wrapper */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 flex items-center justify-center "
                    >
                        <CarouselSlide {...slide} />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#e02a1d]" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
