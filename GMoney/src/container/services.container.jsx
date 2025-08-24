import React from "react";
import ServiceCard from "../component/serviceCard.component";

const services = [
    {
        name: "Advance Against Mediclaim (Non Empaneled Hospital)",
        description: "This product helps NEW and Non Empaneled hospitals to offer Near Cashless experience to their patients. GMoney pays the bill in advance as loan...",
        image: "/src/assets/1@3x.png",
        link: "/services/advance-mediclaim",
    },
    {
        name: "Medical Bills Payment in No Cost EMI",
        description: "Using this product Health care service make quality healthcare affordable for their patients. This product is very popular at IVF centers, Dentists, Cosmetic clinics and ma...",
        image: "/src/assets/2@3x.png",
        link: "/services/medical-bills-emi",
    },
    {
        name: "IVF Optimiser",
        description: "OPT IVF, a clinically tested and proven model that recommends personalized dosage, reduces sides effects and improves Grade A follicles during an IVF cycle. Along with this MetSights provides system bio...",
        image: "/src/assets/ivf.png",
        link: "/services/ivf-optimiser",
    },
    {
        name: "Revenue Cycle Management",
        description: "As the largest Revenue cycle managers of India, we solve some of the real-life problems faced by large hospitals. We work as an integral part of the hospital from pre-auth level till claim settlement.",
        image: "/src/assets/4@3x.png",
        link: "/services/revenue-cycle-management",
    },
    {
        name: "Receivable Finance",
        description: "Receivables stuck up for months in credit schemes / mediclaims is one of the major challenges faced by the healthcare industry today. For all our RCM and Claim Assist clients we offer receivable financing at...",
        image: "/src/assets/5@3x.png",
        link: "/services/receivable-finance",
    },
    {
        name: "Cashless Claim Assist",
        description: "A single window for 50+ Insurance Companies and TPAs to manage from Preauthorization, Tracking, Query Management, Final Approval and Disbursal Status along with a detailed Management...",
        image: "/src/assets/6@3x.png",
        link: "/services/cashless-claim-assist",
    },
    {
        name: "Consumable Supply (GMedz)",
        description: "All large hospitals work on rate contracts and thus enjoy great savings, assured supplies, longer credit periods without worrying about day to day price fluctuat...",
        image: "/src/assets/consumable.png",
        link: "/services/consumable-supply",
    },
    {
        name: "Reimbursement Claim Assist",
        description: "Hospitals can offer reimbursement claim support to their premium clients and save them from the associated hassles. Patient...",
        image: "/src/assets/9@3x.png",
        link: "/services/reimbursement-claim-assist",
    }
];

function ServicesGrid() {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    );
}

export default ServicesGrid;
