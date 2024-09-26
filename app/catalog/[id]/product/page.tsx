'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProductById, IProductItem } from "@/app/lib/contentful/contentful-api";
import ProductImages from "@/app/components/ui/ProductImages";
import Loader from "@/app/components/ui/Loader";
import { GenderValue, getGenderIcon, getSeasonIcon, SeasonValue } from "@/app/utils/utils";

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
            {product === null ? (
                <div className="h-dvh flex items-center justify-center">
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="mt-5 flex flex-col xl:flex-row items-center xl:items-start gap-7">
                        <ProductImages images={product.images} />
                        <div className="w-full h-full flex flex-col text-sm md:text-base text-m-gray font-medium">
                            <h2 className="text-2xl md:text-5xl w-full truncate max-w-full mt-5 mb-10 text-black flex items-center gap-2"><span className="text-3xl text-m-gray">Модель: </span> {product.name}</h2>
                            <div className="flex items-center gap-1">
                                <img src={getGenderIcon(product.gender as GenderValue)} alt="Icon" className="w-5 h-5" />
                                <p className="">{product.gender}</p>
                            </div>
                            <div className="flex items-center gap-1 mb-10">
                                <img src={getSeasonIcon(product.season as SeasonValue)} alt="Icon" className="w-5 h-5" />
                                <p className="">{product.season}</p>
                            </div>
                            <p className="mb-1">Розміри:</p>
                            <ul className="font-bold  text-black flex gap-1 mb-10">
                                {parseSizeRange(product.sizes).map((size) => (
                                    <li key={size} className="w-8 h-8 rounded-md ring-1 ring-slate-100 flex items-center justify-center">{size}</li>
                                ))}
                            </ul>
                            <h4 className="text-3xl md:text-4xl font-medium text-black">Опис</h4>
                            <p className="text-sm md:text-base text-justify font-medium mt-5 text-[#717171]">{product.material}</p>
                        </div>
                    </div>
                </>
            )
            }
        </main >
    );
}




function parseSizeRange(sizes: string): number[] {
    const [start, end] = sizes.split('-').map(Number); // Преобразуем строку в числа
    const sizeArray: number[] = [];

    if (start && end) {
        for (let i = start; i <= end; i++) {
            sizeArray.push(i);
        }
    }

    return sizeArray;
}