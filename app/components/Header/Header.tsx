'use client'


import Link from "next/link";

import Logo from "./Logo";
import BurgerMenu from "../ui/BurgerMenu";
import CallModal from "../ui/CallModal";
import { getGenderIcon, getSeasonIcon } from "@/app/utils/utils";
import { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
    const [maleLink, setMaleLink] = useState(false);
    const [femaleLink, setFemaleLink] = useState(false);

    const links = [
        {
            title: "Чоловіче взуття",
            href: "/catalog",
            icon: (
                <img src={getGenderIcon('Для нього')} alt="Icon" className="w-7 h-7" />
            ),
            openState: maleLink,
            setOpenState: setMaleLink,
            subLinks: [
                {
                    title: "Зима",
                    icon: (
                        <img src={getSeasonIcon("Зима")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                },
                {
                    title: "Літо",
                    icon: (
                        <img src={getSeasonIcon("Літо")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                },
                {
                    title: "Весна",
                    icon: (
                        <img src={getSeasonIcon("Весна")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                }, {
                    title: "Осінь",
                    icon: (
                        <img src={getSeasonIcon("Осінь")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                }
            ]
        },
        {
            title: "Жіноче взуття",
            href: "/catalog",
            icon: (
                <img src={getGenderIcon('Для неї')} alt="Icon" className="w-7 h-6" />
            ),
            openState: femaleLink,
            setOpenState: setFemaleLink,
            subLinks: [
                {
                    title: "Зима",
                    icon: (
                        <img src={getSeasonIcon("Зима")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                },
                {
                    title: "Літо",
                    icon: (
                        <img src={getSeasonIcon("Літо")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                },
                {
                    title: "Весна",
                    icon: (
                        <img src={getSeasonIcon("Весна")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                }, {
                    title: "Осінь",
                    icon: (
                        <img src={getSeasonIcon("Осінь")} alt="Winter" className="w-7 h-7" />
                    ),
                    href: "#",
                }
            ]
        }
    ];

    return (
        <div className="py-2 fixed w-full h-fit z-[100] bg-white top-0 shadow-sm">
            <header className="px-5 max-w-full md:max-w-full lg:max-w-[1120px] mx-auto relative select-none">
                <div className="flex-row gap-4 flex justify-between items-center w-full">
                    <Link href={"/"} className="lg:hover:scale-105 duration-150">
                        <Logo />
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-5 font-medium">
                            <li key="catalog" className="hover:opacity-70 transition-opacity">
                                <Link href="/catalog">Каталог</Link>
                            </li>
                            {links.map((item) => (
                                <li
                                    key={item.title}
                                    onMouseEnter={() => item.setOpenState(true)}
                                    onMouseLeave={() => item.setOpenState(false)}
                                    className="flex items-center gap-1 h-16"
                                >
                                    {item.icon}
                                    <Link href={item.href}>{item.title}</Link>
                                    <img src="/icons/arrow.svg" alt="" className={`w-5 h-5 ${item.openState ? "rotate-180" : ""} duration-250`} />
                                    {
                                        item.openState &&
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7 }}
                                            className="absolute top-full bg-white flex p-2 rounded-b-xl shadow-lg"
                                        >
                                            {item.subLinks.map((link) => (
                                                <Link href={link.href} className="flex flex-col items-center gap-1 opacity-85 text-sm hover:bg-m-gray/10 duration-150 rounded-lg p-2">
                                                    {link.icon}
                                                    {link.title}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    }
                                </li>
                            ))}
                            <li key="about-us" className="hover:opacity-70 transition-opacity">
                                <Link href="/contacts">Про нас</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center">
                        <CallModal />
                        <BurgerMenu />
                    </div>
                </div>
            </header >
        </div >
    );
};
