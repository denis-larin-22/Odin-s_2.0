'use client'

import Link from "next/link";
import { useState } from "react";
import { MdZoomOutMap } from "react-icons/md";

export default function ProductPage() {
    const data = {
        name: 'Nike',
        model: "Air Alpha Force 88 x Billie",
        count: 234,
        season: "Літо",
        sizes: "40-45",
        image: ["/images/nike.png", "/images/image.png", "/images/nike.png", "/images/image.png", "/images/nike.png"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quaerat nam rerum nostrum fugit, eum illum animi magnam quisquam commodi veritatis exercitationem est iste quod doloremque, placeat in at repellat?"
    };

    const [currentImage, setCurrentImage] = useState(data.image[0]);
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <main className="container relative mt-24">
            <img
                alt="Odin`s logo"
                src={"/images/odin`s-logo-black.svg"}
                className="h-[50vh] w-[50vw] opacity-10 fixed top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-0"
            />
            <img
                alt="Odin`s logo"
                src={"/images/odin`s-logo-black.svg"}
                className="hidden lg:block h-[50vh] w-[50vw] opacity-10 fixed top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-0"
            />
            <nav className="font-medium text-[15px] text-[#717171]">
                <Link href={"/"} className="hover:underline">Головна {'>'}</Link>
                <Link href={"/catalog"} className="hover:underline">Каталог {'>'} {data.name}</Link>
            </nav>
            <div className="mt-5 flex flex-col xl:flex-row items-center xl:items-start gap-7">
                {/* Images */}
                <section className="relative z-20 flex flex-col-reverse lg:flex-row gap-2">
                    <div className="flex flex-row lg:flex-col gap-2">
                        {data.image.map((image, index) => (
                            <div
                                key={index}
                                className={`w-[56px] md:w-[112px] h-[70px] md:h-[140px] overflow-hidden rounded-md cursor-pointer hover:brightness-75 ${currentImage === image ? "brightness-75" : ""}`}
                                onClick={() => setCurrentImage(image)}
                            >
                                <img
                                    src={image}
                                    alt="Product image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full md:w-[600px] h-[400px] md:h-[750px] overflow-hidden rounded-md">
                        <img
                            src={currentImage}
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
                                    src={currentImage}
                                    alt="Product image"
                                    className="w-fit h-fit md:h-full relative z-30 rounded-md"
                                />
                            </div>
                        }
                    </div>
                </section>
                {/* Deskription */}
                <div className="w-full h-full flex flex-col gap-2 md:gap-5">
                    <p className="text-[#717171] font-medium text-sm md:text-base">{data.name}</p>
                    <h2 className="text-2xl md:text-3xl w-full truncate max-w-full font-medium">{data.model}</h2>
                    <p className="text-[#717171] font-medium text-sm md:text-base">{data.season}</p>
                    <p className="font-bold  text-black">{data.sizes}</p>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-3xl md:text-4xl font-medium text-black">Опис</h4>
                <p className="text-sm md:text-base text-justify font-medium mt-9 text-[#717171]">{data.description}</p>
            </div>
        </main>
    )
}