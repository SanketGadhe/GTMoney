import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonCardComponent from "../component/personCard.component";

const Testimonials = () => {
    const [activeTab, setActiveTab] = useState("HOSPITALS");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    // Data
    const data = {
        HOSPITALS: [
            {
                name: " Dr. Rajeev Agrawal",
                title: "KKasturi medicare pvt ltd, Bhayander",
                image: "/src/assets/d1.png",
                quote: "EMI options and financing options are need of the hour.",
                description:
                    " EMI options and financing options are need of the hour. It helps patients to choose better and timely treatment. Happy that Kamaljeet Kaur from Money is collaborating with our center to provide patients with more financial flexibility.",
            },
            {
                name: "Dr. Baldeep Singh",
                title: "DEEP NURSING HOME AND CHILDREN HOSPITAL, Ludhiana",
                image: "/src/assets/dr1.png",
                quote: "Convenient, Near Cashless, Highly Beneficial!",
                description:
                    "We appreciate the support provided by GMoney towards our uninsured and under insured patients. Convenient near cashless treatment is highly beneficial to our customers. Welook forward to the long term association.",
            },
            {
                name: "Dr. Jinish",
                title: "ANSSI WELLNESS CENTRE Mumbai",
                image: "/src/assets/d2.png",
                quote: "Convenient, responsive, supportive partnership.",
                description:
                    "GMoney's No-Cost EMI has greatly benefited our patients. Our capacity to offer cutting-edge wellness treatments has been greatly improved by their quick response time, scheme convenience, and exceptional support. We are grateful for our partnership with GMoney.",
            },
            {
                name: "Motherhood Hospital",
                title: "",
                image: "/src/assets/31.png",
                quote: "Improved patient experience with Financing.",
                description:
                    "At Motherhood, we are excited to work with GMoney across all our hospitals, enabling our patients to access hassle- free financing through Advance Against Mediclaim and No Cost EMIs. This collaboration has further improved our patient experience, which our patients are truly appreciating..",
            },
            {
                name: "Dr. Prince Varde",
                title: "Navkar Hospital, Mumbai",
                image: "/src/assets/d3.png",
                quote: "Happy With GMoney Service!",
                description:
                    "Had very good experience with Gmoney, specially Jayshree was very cooperative and prompt to handle all patients queries with cashless facilities.",
            },
        ],
        CUSTOMERS: [
            {
                name: "Raghav Sharma",
                title: "Bangalore",
                image: "",
                quote: "",
                description: "I recently underwent surgery at Kamal Laparoscopic Hospital, Jaipur performed very smoothly by GMoney team. Nice description, all formalities regarding mediclaim for my surgery were handled well. The health insurance company helped me really quickly, their customer service was great, they explained everything clearly, and the whole process was smooth. Thank you GMoney."
            },
            {
                name: "Devaraj Sankar",
                title: "Mumbai",
                image: "",
                quote: "",
                description: "I was in an emergency situation and while the hospital did not provide a cashless option, they partnered with GMoney, which turned out to be an excellent solution. GMoney made the entire process of reimbursement seamless and stress-free."
            },
            {
                name: "Gummadi Rajasekher Reddy",
                title: "Mumbai",

                image: "",
                quote: "",
                description: "They paid the hospital in advance by arranging a loan, which allowed me to focus on my recovery rather than worrying about immediate payments."
            },
            {
                name: "Virat Bhardwaj",
                title: "Delhi",

                image: "",
                quote: "",
                description: "Connecting with GMoney gave me a great feeling of relief. During my medical funding process, the entire experience was smooth and hassle-free. This organization is providing really excellent support."
            },
            {
                name: "Pratiksha Shetty",
                title: "Mumbai",

                image: "",
                quote: "",
                description: "I had a smooth and hassle-free experience with GMoney when I applied for insurance. The staff supported in getting the loan within an hour of applying for it. Thanks to the GMoney team!"
            },
            {
                name: "Sarita Yadav",
                title: "Mumbai",

                image: "",
                quote: "",
                description: "Thanks to the guidance and assistance team, it was incredibly helpful, clearly explaining all the necessary formalities and steps involved, which made the entire process smooth. Thanks Team GMoney."
            },
        ]
    };
    const items = data[activeTab];

    // Handlers
    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
            setFade(true);
        }, 200);
    };

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
            setFade(true);
        }, 200);
    };

    // Auto-scroll every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, activeTab]);

    return (
        <section className="relative py-16 bg-gradient-to-br from-blue-100 via-white to-blue-100">
            <div className="container mx-auto px-6 text-center relative">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                    Real-Life Stories From Our Customer
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-10 text-lg font-semibold">
                    {["HOSPITALS", "CUSTOMERS"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setCurrentIndex(0);
                            }}
                            className={`${activeTab === tab
                                ? "text-red-600 border-b-2 border-red-600"
                                : "text-blue-900"
                                } pb-1`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="relative flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                        <ChevronLeft className="w-7 h-7 text-blue-800" />
                    </button>

                    {/* Animated Content */}
                    <div
                        key={currentIndex}
                        className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                            } max-w-4xl mx-auto`}
                    >
                        {/* Person Card */}
                        <div className="flex justify-center items-center">
                            <PersonCardComponent person={items[currentIndex]} /></div>

                        {/* Quote + Description */}
                        <div className="max-w-3xl mx-auto mt-8">
                            {items[currentIndex].quote && (
                                <p className="text-red-600 text-2xl mb-4">
                                    <span className="mr-2">“</span>
                                    <span className="text-blue-900 font-bold">
                                        {items[currentIndex].quote}
                                    </span>
                                    <span className="ml-2">”</span>
                                </p>
                            )}
                            <p className="text-gray-700 text-base leading-relaxed">
                                {items[currentIndex].description}
                            </p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                        <ChevronRight className="w-7 h-7 text-blue-800" />
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;