import React from "react";
import { FiMenu, FiX } from "react-icons/fi"; // menu & close icons
import BrandLogo from "../component/brandLogo";
import WebNavbar from "../component/webNavbar.component";
import PrimaryButton from "../component/primaryButton";

const Navbar = () => {
    const links = [
        { name: "Services", path: "/services" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Policies", path: "/policies" },
        { name: "About Us", path: "/about" },
    ];

    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm relative">
            {/* Mobile View */}
            {isMobile ? (
                <>
                    {/* Left: Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="text-2xl text-gray-700"
                    >
                        <FiMenu />
                    </button>

                    {/* Center: Logo */}
                    <BrandLogo src="/src/assets/logo-02-1.svg" alt="GMoney Logo" />

                    {/* Right: Login Button */}
                    <PrimaryButton onClick={() => alert("Login clicked!")}>
                        Login
                    </PrimaryButton>

                    {/* Sidebar Menu */}
                    {isMobileMenuOpen && (
                        <div className="fixed inset-0 bg-opacity-50 z-40 flex">
                            {/* Left Drawer */}
                            <div className="bg-white w-64 p-6 shadow-lg h-full flex flex-col gap-6 z-50">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl self-end text-gray-700"
                                >
                                    <FiX />
                                </button>

                                {/* Nav Links */}
                                <WebNavbar links={links} vertical />
                            </div>

                            {/* Click outside to close */}
                            <div
                                className="flex-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        </div>
                    )}
                </>
            ) : (
                // Desktop View
                <>
                    <BrandLogo src="/src/assets/logo-02-1.svg" alt="GMoney Logo" />
                    <WebNavbar links={links} />
                    <PrimaryButton onClick={() => alert("Login clicked!")}>
                        Login
                    </PrimaryButton>
                </>
            )}
        </nav>
    );
};

export default Navbar;
