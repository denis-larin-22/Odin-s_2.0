import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <div className="py-2 fixed w-full h-fit z-[100] bg-white top-0 shadow-sm">
            <header className="px-5 max-w-full md:max-w-full lg:max-w-[1120px] mx-auto relative select-none">
                <div className="flex-row gap-4 flex justify-between items-center w-full">
                    <Link href={"/"} className="lg:hover:scale-105 duration-150">
                        <Image
                            width={60}
                            height={60}
                            alt="Odin`s logo"
                            src={"/images/odin`s-logo-black.svg"}
                        />
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex gap-8 font-medium">
                            <li className="hover:underline hover:opacity-70 transition-opacity">
                                <Link href="/">Головна</Link>
                            </li>
                            <li className="hover:underline hover:opacity-70 transition-opacity">
                                <Link href="/catalog">Каталог</Link>
                            </li>
                            <li className="hover:underline hover:opacity-70 transition-opacity">
                                <Link
                                    href="/"
                                >
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
