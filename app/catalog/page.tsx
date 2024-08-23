'use client'

import Link from "next/link";
import Filter from "../components/ui/Filter";
import { useEffect, useState } from "react";
import { getProductList, ProductList } from "../lib/contentful/contentful-api";
import Loader from "../components/ui/Loader";

export default function CatalogPage() {
    const [productList, setProductList] = useState<ProductList | null>(null);

    useEffect(() => {
        async function getContent() {
            const content = await getProductList();

            setProductList(content);
        }

        getContent();
    }, []);

    return (
        <main className="container relative mt-24 min-h-dvh">
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
            <nav className="font-medium text-[15px] text-[#717171] hover:underline">
                <Link href={"/"}>Головна {'>'} Каталог</Link>
            </nav>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <h1 className="text-2xl font-medium my-4">Каталог</h1>
                <Filter />
            </div>
            {
                productList === null ?
                    <div className="h-full flex items-center justify-center">
                        <Loader />
                    </div>
                    :
                    <>
                        <ul className="relative z-10 select-none mt-16 grid grid-cols-1 xsm:grid-cols-2  md:grid-cols-3 items-end gap-4 mx-auto">
                            {productList.map((product) => (
                                <li key={product.id} className="group">
                                    <Link
                                        href={`/catalog/${product.sysId}/product`}
                                    >
                                        <div className="rounded-lg overflow-hidden h-[436px]">
                                            <img
                                                src={product.images[0].src}
                                                alt={product.images[0].alt}
                                                className="group-hover:scale-105 duration-150 w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-[#9E3500] font-medium">{product.name}</p>
                                        <p className="font-medium">{product.sizes}</p>
                                        <p className="font-medium text-[#707072]">{product.season}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
            }
        </main>
    )
}