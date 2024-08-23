'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductById, IProductItem } from "@/app/lib/contentful/contentful-api";
import ProductImages from "@/app/components/ui/ProductImages";
import Loader from "@/app/components/ui/Loader";

export default function ProductPage({ params }: { params: { id: string } }) {
    const productId = params.id;

    const [product, setProduct] = useState<IProductItem | null>(null);

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct = await getProductById(productId);

            setProduct(fetchedProduct);
        }

        fetchProduct();
    }, []);

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
                <Link href={"/catalog"} className="hover:underline">Каталог</Link>
            </nav>
            {product === null ?
                <div className="h-dvh flex items-center justify-center">
                    <Loader />
                </div>
                :
                <>
                    <div className="mt-5 flex flex-col xl:flex-row items-center xl:items-start gap-7">
                        <ProductImages images={product.images} />
                        <div className="w-full h-full flex flex-col gap-2 md:gap-5">
                            <p className="text-[#717171] font-medium text-sm md:text-base">{product.gender}</p>
                            <h2 className="text-2xl md:text-3xl w-full truncate max-w-full font-medium">{product.name}</h2>
                            <p className="text-[#717171] font-medium text-sm md:text-base">{product.season}</p>
                            <p className="font-bold  text-black">{product.sizes}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-3xl md:text-4xl font-medium text-black">Опис</h4>
                        <p className="text-sm md:text-base text-justify font-medium mt-9 text-[#717171]">{product.material}</p>
                    </div>
                </>
            }
        </main>
    )
}