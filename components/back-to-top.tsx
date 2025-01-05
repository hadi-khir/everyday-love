'use client'

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <button
                onClick={scrollToTop}
                className="group flex flex-col items-center justify-center p-3 hover:shadow-lg"
            >
                <FaArrowUp
                    className="text-xl transition-transform duration-300 group-hover:-translate-y-5"
                />
                <div className="relative w-8 h-8 mt-2">
                    <Image
                        src="/cardinal.png"
                        alt="Logo"
                        width={48}
                        height={48}
                    />
                </div>
            </button>
        </div>
    );
};

export default BackToTop;