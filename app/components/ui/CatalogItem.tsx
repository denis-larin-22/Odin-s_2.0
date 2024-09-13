import { IProductItem } from "@/app/lib/contentful/contentful-api"
import Link from "next/link"

interface IProps {
    product: IProductItem
}

export default function CatalogItem({ product }: IProps) {
    return (
        <Link href={`/catalog/${product.sysId}/product`} className="text-xs md:text-base group">
            <div className="rounded-lg overflow-hidden h-[170px] md:h-[436px]">
                <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="group-hover:scale-105 duration-150 w-full h-full object-cover"
                />
            </div>
            <p className="text-[#9E3500] font-medium mt-1">{product.name}</p>
            <p className="font-medium">{product.sizes}</p>
            <p className="font-medium text-[#707072]">{product.season}</p>
        </Link>
    )
};