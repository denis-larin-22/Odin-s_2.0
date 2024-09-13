'use client'

import { ProductList } from "@/app/lib/contentful/contentful-api";
import { removeDuplicates } from "@/app/utils/utils";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export type Filter = string[];

export interface IFilters {
    category: Filter,
    season: Filter
}

export interface IActiveFilters {
    category: string | null,
    season: string | null
}

interface IProps {
    productList: ProductList
    filterHandler: (activeValues: IActiveFilters) => void
    // setFilteredList: Dispatch<SetStateAction<ProductList | null>>
}

export function Filters({ productList, filterHandler }: IProps) {
    // Filters
    const categories = removeDuplicates(productList.map((item) => item.gender));
    const seasons = removeDuplicates(productList.map((item) => item.season));

    const filters = {
        category: categories,
        season: seasons
    }

    const [activeFiltersValues, setActiveFiltersValues] = useState<IActiveFilters>({
        category: null,
        season: null
    });

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-normal md:justify-end gap-x-2 my-2">
                <Select
                    label="Категорія"
                    placeholder="Оберіть категорію"
                    className="max-w-fit min-w-[150px]"
                    variant="bordered"
                    size="sm"
                    onChange={(e) => {
                        const updatedActiveFiltersValues: IActiveFilters = {
                            ...activeFiltersValues,
                            category: e.target.value.length === 0 ? null : e.target.value
                        }

                        filterHandler(updatedActiveFiltersValues);
                        setActiveFiltersValues(updatedActiveFiltersValues);
                    }}
                >
                    {filters.category.map((item) => (
                        <SelectItem key={item}>
                            {item}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Сезон"
                    className="max-w-fit min-w-[150px]"
                    variant="bordered"
                    size="sm"
                    onChange={(e) => {
                        const updatedActiveFiltersValues: IActiveFilters = {
                            ...activeFiltersValues,
                            season: e.target.value.length === 0 ? null : e.target.value
                        }

                        filterHandler(updatedActiveFiltersValues);
                        setActiveFiltersValues(updatedActiveFiltersValues);
                    }}
                >
                    {filters.season.map((item) => (
                        <SelectItem key={item}>
                            {item}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
}
