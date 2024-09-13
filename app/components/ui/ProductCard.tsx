'use client'

import { IProductItem } from "@/app/lib/contentful/contentful-api"
import Link from "next/link"
import { useState } from "react"

interface IProps {
    product: IProductItem
}

export function ProductCard({ product }: IProps) {
    const [coverImage, setCoverImage] = useState(false);

    return (
        <Link
            href={`/catalog/${product.sysId}/product`}
            key={product.id}
            onMouseEnter={() => setCoverImage(true)}
            onMouseLeave={() => setCoverImage(false)}
            className="w-[280px] xsm:w-[340px] lg:w-[360px] h-[280px] xsm:h-[340px] lg:h-[360px] relative flex items-center justify-center cursor-pointer rounded-md overflow-hidden group"
        >
            <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 group-hover:-rotate-1 group-hover:brightness-50 duration-500"
            />
            <p className="absolute bottom-[-50px] left-4 text-white/70 text-xl font-bold drop-shadow-2xl transform translate-y-12 group-hover:translate-y-0 group-hover:bottom-4 transition-all duration-500 ease-in-out">
                {product.name}
            </p>
        </Link>
    )
}
