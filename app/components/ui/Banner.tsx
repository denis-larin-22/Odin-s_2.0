'use client'

import { BannerImages } from "@/app/lib/contentful/contentful-api"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

interface IProps {
    images: BannerImages
}

export default function Banner({ images }: IProps) {
    const [currentBanerImage, setCurrenBanerImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrenBanerImage(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <AnimatePresence>
            <motion.div
                key={currentBanerImage} // Trigger animation when the key changes
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }} // Duration of the fade transition
                className="absolute inset-0"
            >
                <motion.img
                    alt="Baner image"
                    src={images[currentBanerImage].src}
                    className="w-full h-full object-cover"
                    animate={{
                        scale: [1, 1.1], // Scale animation
                        rotate: [0, 2]
                    }}
                    transition={{
                        duration: 8, // Duration of the scale animation
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            </motion.div>
        </AnimatePresence>
    )
}