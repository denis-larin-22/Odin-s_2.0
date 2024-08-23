'use client'

import { Select, SelectItem } from "@nextui-org/react";

export default function Filter() {
    const gender = [
        { key: "male", label: "Для нього" },
        { key: "female", label: "Для неї" },
        { key: "child", label: "Дитячі" },
        { key: "all", label: "Усі" },
    ];

    const season = [
        { key: "summer", label: "Літо" },
        { key: "winter", label: "Зима" },
        { key: "demi-season", label: "Демісезонна" },
    ];

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-normal md:justify-end gap-x-2 my-2">
                <Select
                    label="Категорія"
                    placeholder="Оберіть категорію"
                    className="max-w-fit min-w-[150px]"
                    variant="bordered"
                    size="sm"
                >
                    {gender.map((item) => (
                        <SelectItem key={item.key}>
                            {item.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    label="Сезон"
                    className="max-w-fit min-w-[150px]"
                    variant="bordered"
                    size="sm"
                >
                    {season.map((item) => (
                        <SelectItem key={item.key}>
                            {item.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </div>
    );
}
