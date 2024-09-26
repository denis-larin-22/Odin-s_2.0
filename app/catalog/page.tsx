'use client'

import Link from "next/link";
import { Filters, IActiveFilters } from "../components/ui/Filters";
import { useEffect, useState } from "react";
import { getProductList, ProductList } from "../lib/contentful/contentful-api";
import Loader from "../components/ui/Loader";
import CatalogItem from "../components/ui/CatalogItem";

interface IProductList {
    initList: ProductList,
    listToRender: ProductList
}

export default function CatalogPage() {
    const [productList, setProductList] = useState<IProductList | null>({
        initList: [],
        listToRender: []
    });

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        async function getContent() {
            const content = await getProductList();

            if (content === null) return;

            const productListObject: IProductList = {
                initList: content,
                listToRender: content
            }

            setProductList(productListObject);
        }

        getContent();
    }, []);

    function filterProductList(activeValues: IActiveFilters) {
        const { category, season } = activeValues;

        if (productList === null) return;

        const filteredProductList = productList.initList.filter((product) => {
            const matchCategory = category === null || category === product.gender;
            const matchSeason = season === null || season === product.season;

            return matchCategory && matchSeason;
        });

        setProductList({
            ...productList,
            listToRender: filteredProductList
        });

        setCurrentPage(1); // сбросить на первую страницу после фильтрации
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productList?.listToRender?.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil((productList?.listToRender?.length || 0) / productsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    if (productList === null) {
        return (
            <main className="w-full h-dvh flex items-center justify-center">
                <Loader />
            </main>
        )
    } else {
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
                    {
                        productList.listToRender &&
                        <Filters
                            productList={productList.initList}
                            filterHandler={filterProductList}
                        />
                    }
                </div>
                <ul className="relative z-10 select-none mt-16 grid grid-cols-2 md:grid-cols-3 items-end gap-4 mx-auto">
                    {currentProducts?.map((product, index) => (
                        <li key={product.id + index} >
                            <CatalogItem
                                product={product}
                            />
                        </li>
                    ))}
                </ul>
                {/* Отображать пагинацию только если больше одной страницы */}
                {totalPages > 1 && (
                    <div className="relative z-50 flex justify-between mt-8 text-sm">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1} // Отключение кнопки, если на первой странице
                            className={`px-3 py-1 border border-gray-300 rounded mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Назад
                        </button>
                        <div className="flex gap-0.5 w-fit overflow-x-auto">
                            {
                                pageNumbers.map((pageNumber) => (
                                    <button
                                        key={pageNumber}
                                        onClick={() => paginate(pageNumber)}
                                        className={`px-2 py-1 min-w-7 border border-gray-300 rounded ${currentPage === pageNumber ? 'bg-gray-300' : ''}`}
                                    >
                                        {pageNumber}
                                    </button>
                                ))
                            }
                        </div>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages} // Отключение кнопки, если на последней странице
                            className={`px-3 py-1 border border-gray-300 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Вперед
                        </button>
                    </div>
                )}
            </main>
        )
    }
}
