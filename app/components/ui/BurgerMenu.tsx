'use client'

import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function BurgerMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="block md:hidden">
            <Button isIconOnly variant="light" onPress={onOpen} className="rounded-full">
                <RxHamburgerMenu />
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    body: "relative"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <ul className="relative min-h-[40dvh] flex flex-col items-center pt-10 gap-8 font-medium">
                                    <li className="hover:underline hover:opacity-70 transition-opacity">
                                        <Link href="/" onClick={onClose}>Головна</Link>
                                    </li>
                                    <li className="hover:underline hover:opacity-70 transition-opacity">
                                        <Link href="/catalog" onClick={onClose}>Каталог</Link>
                                    </li>
                                    <li className="hover:underline hover:opacity-70 transition-opacity">
                                        <Link
                                            href="/" onClick={onClose}
                                        >
                                            Контакти
                                        </Link>
                                    </li>
                                </ul>
                                <img
                                    alt="Odin`s logo"
                                    src={"/images/odin`s-logo-black.svg"}
                                    className="h-[150px] w-[150px] opacity-10 absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
                                />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div >
    );
}