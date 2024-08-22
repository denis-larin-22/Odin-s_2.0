import Link from "next/link";
import Filter from "../components/ui/Filter";

export default function CatalogFunction() {
    const data = [
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",
            image: "/images/nike.png"
        },
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",

            image: "/images/nike.png"
        },
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",
            image: "/images/nike.png"
        },
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",
            image: "/images/nike.png"
        },
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",
            image: "/images/nike.png"
        },
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",
            image: "/images/nike.png"
        },
        {
            name: 'Nike',
            model: "Air Alpha Force 88 x Billie",
            count: 234,
            season: "Літо",
            sizes: "40-45",
            image: "/images/nike.png"
        },

    ]

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
            <nav className="font-medium text-[15px] text-[#717171] hover:underline">
                <Link href={"/"}>Головна {'>'} Каталог</Link>
            </nav>
            <div className="flex items-start justify-between">
                <h1 className="text-2xl font-medium">Каталог</h1>
                <div className="">
                    <Filter />
                </div>
            </div>
            <ul className="relative z-10 select-none mt-16 grid grid-cols-1 xsm:grid-cols-2  md:grid-cols-3 items-end gap-4 mx-auto">
                {data.map((product, index) => (
                    <li key={index} className="group">
                        <Link
                            href={"/catalog"}
                        >
                            <div className="rounded-lg overflow-hidden">
                                <img src={product.image} alt={product.name + product.model} className="group-hover:scale-105 duration-150" />
                            </div>
                            <p className="text-[#9E3500] font-medium">{product.name}</p>
                            <p className="font-medium">{product.sizes}</p>
                            <p className="font-medium text-[#707072]">{product.season}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}