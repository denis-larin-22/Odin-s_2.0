'use client'

import { Slider } from "./components/ui/Slider";

export default function Home() {
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
  ]

  return (
    <main className="">
      <div className="mt-20">
        <img
          alt="Baner image"
          src={"/images/banner-nike-shoe.jpg"}
          className="w-full h-[60vh] md:h-[80vh] max-h-[100vh] object-cover"
        />
      </div>
      {/* Popular */}
      <section className="container mt-[60px] mb-5">
        <h2 className="text-3xl font-bold uppercase">Popular</h2>
        <Slider sliderCount={data.length}>
          {
            data.map((item, index) => (
              <div key={index} className="w-[280px] xsm:w-[340px] lg:w-[360px] h-[280px] xsm:h-[340px] lg:h-[360px] relative flex items-center justify-center hover:brightness-95 duration-150 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <p className="text-[28px] font-bold uppercase absolute bottom-5 left-1/2 -translate-x-1/2">{item.name + index}</p>
              </div>
            ))
          }
        </Slider>
      </section>
      {/* ALL SHOES */}
      <section className="container mb-5">
        <h3 className="text-3xl font-bold uppercase max-w-11 mb-5">ALL SHOES</h3>
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
        <h3 className="text-3xl font-bold max-w-11 uppercase">BEST OFFERS</h3>
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
