import React, { useRef, useEffect, useState } from "react";
import Counter from "../component/counter.component";
import PrimaryButton from "../component/primaryButton";
const HeroStats = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[500px] flex items-center justify-center"
            style={{
                backgroundImage: "url('/src/assets/hospital.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/60 to-blue-600/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl text-center px-6">
                <p className="text-gray-200 text-sm md:text-base mb-2 uppercase tracking-wide">
                    Be a part of GMoney Family
                </p>

                <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">
                    At GMoney We Make Quality <br /> Healthcare Affordable.
                </h1>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <Counter target={10000} label="Hospitals / HSPs added" isVisible={isVisible} />
                    <Counter target={200} label="Strong team across India" isVisible={isVisible} />
                    <Counter target={6} label="Offices PAN India" isVisible={isVisible} />
                    <Counter target={26} label="States covering 454 Cities" isVisible={isVisible} />
                </div>

                {/* CTA */}
                <p className="text-white text-base mb-4 font-medium">
                    Join Our Network Hospitals
                </p>
                <PrimaryButton onClick={() => alert("Contact Us clicked!")}>
                    Contact Us
                </PrimaryButton>
            </div>
        </section>
    );
};

export default HeroStats;
