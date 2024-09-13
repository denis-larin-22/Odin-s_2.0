'use client'

import Link from "next/link";
import { Slider } from "./components/ui/Slider";
import { useState, useEffect } from "react";
import { BannerImages, getBannerImages, getProductList, ProductList } from "./lib/contentful/contentful-api";
import Banner from "./components/ui/Banner";
import Loader from "./components/ui/Loader";
import { ProductCard } from "./components/ui/ProductCard";

export default function Home() {
  const [bannerImages, setBannerImages] = useState<BannerImages | null>(null);

  useEffect(() => {
    async function getContent() {
      const content = await getBannerImages();

      setBannerImages(content);
    }

    getContent();
  }, []);

  const [productList, setProductList] = useState<ProductList | null>(null);

  useEffect(() => {
    async function getContent() {
      const content = await getProductList();

      setProductList(content);
    }

    getContent();
  }, []);

  return (
    <main className="">
      <div className="mt-20 w-full h-[60vh] md:h-[80vh] max-h-[100vh] overflow-hidden relative">
        {bannerImages === null ?
          <div className="h-full flex items-center justify-center">
            <Loader />
          </div>
          :
          <Banner images={bannerImages} />
        }
      </div>
      {/* Popular */}
      <section className="container mt-[60px] mb-5">
        <h2 className="text-3xl font-bold uppercase">Популярні</h2>
        {
          productList === null ?
            <div className="h-[250px] flex items-center justify-center">
              <Loader />
            </div>
            :
            <Slider sliderCount={productList.filter(product => product.isPopular).length}>
              {
                productList.filter(product => product.isPopular).map((product) => (
                  <div key={product.name + product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              }
            </Slider>
        }
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
        {
          productList === null ?
            <div className="h-full flex items-center justify-center">
              <Loader />
            </div>
            :
            <Slider sliderCount={productList.filter(product => product.isBestOffers).length}>
              {
                productList.filter(product => product.isBestOffers).map((product) => (
                  <div key={product.name + product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              }
            </Slider>
        }
      </section>
    </main>
  );
}
