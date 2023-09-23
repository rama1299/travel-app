import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarClasses = `fixed w-full z-50 ${scrolling ? "bg-white text-black drop-shadow-xl" : "bg-transparent text-white"
        }`;

    const buttonClasses = ` ${scrolling ? "bg-red-500 hover:bg-red-600 text-white hover:text-gray-100" : "hover:bg-red-600 hover:text-white"} hidden md:block px-4 py-2 border rounded-lg hover:text-white transition-colors`
    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto py-4">
                <div className="flex justify-around items-center">
                    <div className="flex items-center space-x-2">
                        <Link href="/">
                            <div className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                <span className="text-lg font-semibold">Go Travel</span>
                            </div>
                        </Link>
                    </div>
                    <ul className="hidden md:flex space-x-6 font-semibold">
                        <li>
                            <Link href="/home">
                                <span className="hover:text-red-500">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="hover:text-red-500">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service">
                                <span className="hover:text-red-500">Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="hover:text-red-500">Contact</span>
                            </Link>
                        </li>
                    </ul>
                    <button className={buttonClasses}>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;