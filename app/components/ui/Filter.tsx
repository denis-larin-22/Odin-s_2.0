'use client'

import { useState, useEffect, useRef } from "react"

export default function Filter() {
    const [isHide, setIsHide] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Effect for handling clicks outside of the component
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsHide(true);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            {isHide ?
                <button
                    className="absolute top-0 right-0 px-2 py-0.5 ring-1 rounded-md ring-gray-100"
                    onClick={() => setIsHide(false)}
                >
                    Сезон
                </button>
                :
                <div
                    className="absolute top-0 right-0 px-2 py-0.5 rounded-md ring-gray-100 shadow-lg bg-white text-sm flex flex-col gap-1"
                    onClick={() => setIsHide(true)}
                >
                    <p className="cursor-pointer">Літо</p>
                    <p className="cursor-pointer">Осінь</p>
                    <p className="cursor-pointer">Зима</p>
                    <p className="cursor-pointer">Весна</p>
                </div>
            }
        </div>
    )
}
