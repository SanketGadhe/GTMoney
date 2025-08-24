import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import RegionalOfficeComponent from "../component/regionalOffice.component";
import CityNetwork from "../component/availbaleCites.component";

const FooterContainer = () => {
    const RegionalOfficeData = [
        {
            "city": "Mumbai HO",
            "name": "GMoney Pvt. Ltd.",
            "address": "315, 215 Atrium, Next to Courtyard by Marriott, A.K. Road, Andheri East, Mumbai - 400093",
            "phone": ["+91 86570 00105", "+91 72089 60444"]
        },
        {
            "city": "Bengaluru",
            "name": "GMoney Pvt. Ltd.",
            "address": "3rd floor, Ranka Junction, AH45, Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka - 560016",
            "phone": ["+91 72089 60444"]
        },
        {
            "city": "Pune",
            "name": "GMoney Pvt. Ltd.",
            "address": "91 Spring Board, Sky Loft, Creaticity Mall, Airport Rd, Opp. Golf Course, Shastrinagar, Yerawada, Pune, Maharashtra - 411006",
            "phone": ["+91 72089 60444"]
        },
        {
            "city": "Delhi",
            "name": "GMoney Pvt. Ltd.",
            "address": "Berry Co Works, 1E/3, Jhandewalan extension, Gate no. 2 Barakhambha Road, New Delhi, Delhi - 110001",
            "phone": ["+91 72089 60444"]
        },
        {
            "city": "Chandigarh",
            "name": "GMoney Pvt. Ltd.",
            "address": "SCO No. 292, First Floor, Sector 35D, Chandigarh - 160022",
            "phone": ["+91 72089 60444"]
        },
        {
            "city": "Hyderabad",
            "name": "GMoney Pvt. Ltd.",
            "address": "Dwaraka Pride, Plot no. 4/1, Survey No. 64, Huda Techno Enclave, Madhapur, Hyderabad (Telangana) - 500081",
            "phone": null
        },
        {
            "city": "Jaipur",
            "name": "GMoney Pvt. Ltd.",
            "address": "CODESKK Civil Tower, 121 122, Pandit TN Mishra Marg, Santhosh Nagar, Nirman Nagar, Jaipur - 302019",
            "phone": null
        },
        {
            "city": "Chennai",
            "name": "GMoney Pvt. Ltd.",
            "address": "DBS Business Center, 31A, Cathedral Garden Rd, Badrikari, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu - 600034",
            "phone": null
        }
    ]

    return (
        <footer className="bg-blue-50 py-12 px-12">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 px-6">
    {/* Reach Us */}
    <div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Reach Us</h3>
        <RegionalOfficeComponent officeData={RegionalOfficeData[0]} />
    </div>

    {/* Follow Us */}
    <div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Follow Us</h3>
        <div className="flex gap-6 text-blue-800">
            <a href="#"><FaFacebookF size={18} /></a>
            <a href="#"><FaYoutube size={18} /></a>
            <a href="#"><FaInstagram size={18} /></a>
            <a href="#"><FaLinkedinIn size={18} /></a>
        </div>
    </div>

    {/* Quick Links */}
    <div>
        <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Links</h3>
        <ul className="space-y-4 text-gray-800">
            <li><a href="#" className="hover:text-red-600">Hospital Registration</a></li>
            <li><a href="#" className="hover:text-red-600">Careers</a></li>
            <li><a href="#" className="hover:text-red-600">Blogs</a></li>
        </ul>
    </div>

    {/* Contact Us */}
    <div className="text-sm">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h3>
        <p className="text-gray-800">support@moneycare.com</p>
        <p className="text-gray-900 font-semibold py-1">
            No Cost EMI & Advance Against Mediclaim
        </p>
        <p className="text-gray-800">+91 86570 00105</p>
        <p className="text-gray-800">+91 72089 60444</p>
    </div>
</div>

            <div >
                <h3 className="text-xl font-bold text-blue-900 mb-4 ml-5">Regional Office</h3>
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {RegionalOfficeData.map((office, index) => (
                        index > 0 && <RegionalOfficeComponent key={index} officeData={office} />))}
                </div>
            </div>
            <div className="flex justify-center gap-12">
                <CityNetwork />
            </div>
            <div className="mt-3 border-blue-200  text-center text-sm text-blue-900">
                <div>
                    2025 © GMoney Technologies Pvt. Ltd. | 2025 © GMoney Pvt. Ltd. All Rights Reserved.
                </div>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:text-red-600">Terms and Conditions</a>
                    <span>|</span>
                    <a href="#" className="hover:text-red-600">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-red-600">Grievance Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterContainer;
