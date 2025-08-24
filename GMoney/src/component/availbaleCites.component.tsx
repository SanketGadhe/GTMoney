import React from "react";

const cities = [
    "Pune", "Mumbai", "New Delhi", "Kolkata", "Chennai", "Navi Mumbai", "Bengaluru", "Ahmedabad", "Nagpur",
    "Hyderabad", "Jaipur", "Lucknow", "Bhopal", "Bhubaneswar", "Nashik", "Indore", "Ghaziabad", "Kanpur", "Amritsar",
    "Vasai", "Noida", "Gurugram", "Chandigarh", "Ranchi", "Cuttack", "Thane", "Kalyan", "Jalandhar", "Kolhapur",
    "Visakhapatnam", "Chakan", "Greater Noida", "Wagholi", "Raipur", "Panvel", "Belgaum", "Mohali", "Bhiwandi",
    "Talegaon", "Coimbatore", "Palghar", "Mumbra", "Sangli", "Surat", "Durgapur", "Ludhiana", "Kochi", "Agra",
    "Ahmednagar", "Ajmer", "Akola", "Aurangabad", "Baroda", "Beed", "Rewari", "Patiala", "Vellore", "Ranjangaon",
    "Nanded", "Nellore", "Panipat", "Panjim", "Madurai", "Mysore", "Mangalore", "Korba", "Mathura", "Kalaburagi",
    "Jalgaon", "Kharar", "Guwahati", "Kollam", "Jamshedpur", "Gwalior", "Saswad", "Solapur", "Varanasi", "Salem",
    "Sambalpur", "Jodhpur", "Hubli", "Panchkula", "Faridabad", "Amravati", "Ayodhya", "Badlapur", "Dehradun",
    "Parbhani", "Ujjain", "Udaipur", "Tiruchirappalli", "Srinagar", "Shimla", "Secunderabad", "Ratnagiri",
    "Pandharpur", "Ananthapuram", "Buldhana", "Hadapsar", "Baramati", "Chittoor", "Darjeeling", "Dhule", "Fatehpur",
    "Gandhinagar", "Haridwar", "Gorakhpur", "Jhansi", "Kanchipuram", "Kartarpur", "Kurukshetra", "Pondicherry",
    "Prayagraj", "Bharuch", "Bhusawal", "Bathinda", "Pathankot", "Nandurbar", "Niphad", "Kolar", "Ambala", "Kota",
    "Pendurthi", "Jabalpur", "Palwal", "Bhilai", "Bhiwani", "Bilaspur", "Patna", "Rohtak", "Phagwara", "Malegaon",
    "Vijayawada", "Bikaner", "Chiplun", "Darbhanga", "Roorkee", "Bhor", "Rajahmundry", "Margao", "Alwar", "Dhanbad",
    "Bulandshahr", "Aluva", "Mulshi", "Davanagere", "Kapurthala", "Anantapur", "Loni", "Latur", "Gondia",
    "Chhindwara", "Chandrapur", "Dharmapuri-TN", "Faridkot", "Dharwad", "Daund", "Chaksu", "Bareilly", "Kakinada",
    "Haldwani", "Doddaballapur", "Dindori-MH", "Bagru", "Kudus", "Kozhikode", "Gurdaspur", "Bokaro", "Berhampur",
    "Batala", "Barrackpore", "Ramgarh", "Meerut", "Bassi", "Dera Bassi", "Howrah", "Karjat Raigarh",
    "Thiruvananthapuram", "Bheemunipatnam", "Ambegoan", "Allahabad", "Aligarh", "Alappuzha", "Tirupathi",
    "Thoppumpady", "Srikakulam", "Siliguri", "Rourkela", "Mirzapur", "Gadag", "Bellary", "Tumkur", "Sonipat",
    "Hoshangabad", "Junnar", "Jalna", "Hisar", "Karnal", "Kottayam", "Muzzafarnagar", "Ramnagara", "Thrissur",
    "Bahadurgarh", "Balasore", "Baraut", "Dhar", "Ernakulam", "Gadhinglaj", "Chikodi", "Vaniyambadi", "Kamothe"
];

export default function CityNetwork() {
    return (
        <div className="p-6 ">
            <h2 className="text-xl font-bold text-blue-900 mb-4">
                Find your city under GMoney network
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
                {cities.map((city, index) => (
                    <span key={city}>
                        <a
                            href={`#${city.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                            {city}
                        </a>
                        {index !== cities.length - 1 && " | "}
                    </span>
                ))}
            </p>
        </div>
    );
}
