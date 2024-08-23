'use client'

import Link from "next/link";
import { Slider } from "./components/ui/Slider";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const banners = ["/images/banner1.jpg", "/images/banner2.jpg", "/images/banner3.jpg", "/images/banner4.jpg"];
  const [currentBanerImage, setCurrenBanerImage] = useState(0);

  const data = [
    {
      name: "Air max",
      image: "/images/image.png"
    },
    {
      name: "Air max",
      image: "/images/image.png"
    },
    {
      name: "Air max",
      image: "/images/image.png"
    },
    {
      name: "Air max",
      image: "/images/image.png"
    },
    {
      name: "Air max",
      image: "/images/image.png"
    },
    {
      name: "Air max",
      image: "/images/image.png"
    },
    {
      name: "Air max",
      image: "/images/image.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrenBanerImage(prevIndex => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <main className="">
      <div className="mt-20 w-full h-[60vh] md:h-[80vh] max-h-[100vh] overflow-hidden relative">
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
              src={banners[currentBanerImage]}
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
      </div>
      {/* Popular */}
      <section className="container mt-[60px] mb-5">
        <h2 className="text-3xl font-bold uppercase">Популярні</h2>
        <Slider sliderCount={data.length}>
          {
            data.map((item, index) => (
              <Link href={"/product"} key={index} className="w-[280px] xsm:w-[340px] lg:w-[360px] h-[280px] xsm:h-[340px] lg:h-[360px] relative flex items-center justify-center hover:brightness-95 duration-150 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <p className="text-[28px] font-bold uppercase absolute bottom-5 left-1/2 -translate-x-1/2">{item.name + index}</p>
              </Link>
            ))
          }
        </Slider>
      </section>
      {/* ALL SHOES */}
      <section className="container mb-5">
        <Link href={"/catalog"}>
          <h3 className="text-3xl font-bold uppercase max-w-11 mb-5">Все взуття</h3>
        </Link>
        <div className="h-[280px] xsm:h-[340px] lg:h-[360px] w-full overflow-hidden">
          <img
            src="/images/banner.png"
            alt="Banner image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* BEST OFFERS */}
      <section className="container mb-5">
        <h3 className="text-3xl font-bold max-w-11 uppercase">Найкращі пропозиції</h3>
        <Slider sliderCount={data.length}>
          {
            data.map((item, index) => (
              <div key={index} className="w-[280px] xsm:w-[340px] lg:w-[360px] h-[280px] xsm:h-[340px] lg:h-[360px] relative flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <p className="text-[28px] font-bold uppercase absolute bottom-5 left-1/2 -translate-x-1/2">{item.name}</p>
              </div>
            ))
          }
        </Slider>
      </section>
    </main>
  );
}
