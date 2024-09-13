import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function removeDuplicates(list: string[]) {
    const result = new Set(list);

    return Array.from(result);
}

export type GenderValue = "Для нього" | "Для неї" | "Унісекс" | "Дитяча";

export function getGenderIcon(value: GenderValue): string {
    switch (value) {
        case "Для нього":
            return "/icons/him.svg";

        case "Для неї":
            return "/icons/her.svg";

        case "Унісекс":
            return "/icons/unisex.svg";

        case "Дитяча":
            return "/icons/child.svg";
    }
}

export type SeasonValue = "Зима" | "Літо" | "Весна" | "Осінь";

export function getSeasonIcon(value: SeasonValue): string {
    switch (value) {
        case "Зима":
            return "/icons/winter.svg";

        case "Літо":
            return "/icons/summer.svg";

        case "Весна":
            return "/icons/spring.svg";

        case "Осінь":
            return "/icons/fall.svg";
    }
}