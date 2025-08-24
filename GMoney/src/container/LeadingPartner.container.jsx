import React from "react";
import PrimaryButton from "../component/primaryButton";
import PartnerCompany from "../component/partnersCompanies.component";
const LeadingPatners = () => {
    const partners = [
        { name: "Aarambh", logo: "src/assets/Aarambh-Logo-2048x488.png" },
        { name: "Harvinder Finance Company", logo: "src/assets/harvinderfinance.png" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                    Grow with us.
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
                    Partnership Opportunities.
                </h2>

                <h5 className="text-xl md:text-2xl font-bold text-gray-800 mt-5 mb-10">
                    Our Lending Partners
                </h5>

                {/* Partner Logos */}
                <PartnerCompany partners={partners} />

                {/* Image */}
                <div className="mt-12">
                    <img
                        src="src/assets/e-Group.png"
                        alt="Groups"
                        className="mx-auto w-full max-w-4xl"
                    />
                </div>
                {/* CTA */}
                <div>
                    <h5 className="text-xl md:text-2xl font-bold text-gray-800 my-3">
                        Partner with us
                    </h5>
                    <PrimaryButton onClick={() => alert("Contact Us clicked!")}>
                        Contact Us
                    </PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default LeadingPatners;
