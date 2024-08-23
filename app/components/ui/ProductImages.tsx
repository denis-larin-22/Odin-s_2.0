'use client'

import { IImage } from "@/app/lib/contentful/contentful-api";
import { useState } from "react";
import { MdZoomOutMap } from "react-icons/md";

export default function ProductImages({ images }: { images: IImage[] }) {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        < section className="relative z-20 flex flex-col-reverse lg:flex-row gap-2" >
            <div className="flex flex-row lg:flex-col gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-[56px] md:w-[112px] h-[70px] md:h-[140px] overflow-hidden rounded-md cursor-pointer hover:brightness-75 ${currentImage === image ? "brightness-75" : ""}`}
                        onClick={() => setCurrentImage(image)}
                    >
                        <img
                            src={image.src}
                            alt="Product image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="relative w-full md:w-[600px] h-[400px] md:h-[750px] overflow-hidden rounded-md">
                <img
                    src={currentImage.src}
                    alt="Product image"
                    className="w-full h-full object-cover"
                />

                <button
                    className="group absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white flex items-center justify-center"
                    onClick={() => setIsZoomed(true)}
                >
                    <MdZoomOutMap className="group-hover:scale-110 duration-150" />
                </button>

                {isZoomed &&
                    <div
                        className="bg-black/40 w-dvw h-dvh fixed top-0 left-0 flex items-center justify-center"
                        onClick={() => setIsZoomed(false)}
                    >
                        <img
                            src={currentImage.src}
                            alt="Product image"
                            className="w-fit h-fit md:h-full relative z-30 rounded-md"
                        />
                    </div>
                }
            </div>
        </section >
    )
}