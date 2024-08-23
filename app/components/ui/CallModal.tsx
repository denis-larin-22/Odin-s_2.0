'use client'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { IoCallOutline } from "react-icons/io5";
import Logo from "../Header/Logo";

export default function CallModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button isIconOnly onPress={onOpen} variant="light" className="w-10 h-10 rounded-full">
                <IoCallOutline />
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    body: "h-fit"
                }}
            >
                <ModalContent>
                    {(onCallClose) => (
                        <>
                            <ModalHeader className="flex justify-start">
                                <Logo width={40} height={40} />
                            </ModalHeader>
                            <ModalBody className="flex flex-col xs:flex-row items-center justify-between pt-0">
                                <div className="self-start xs:self-auto">
                                    <p className="uppercase block font-medium text-xs sm:text-[14px] mb-2">EMAIL</p>
                                    <a href="mailto:denislarin2017@gmail.com" className="font-medium text-sm sm:text-base  hover:underline">denislarin2017@gmail.com</a>
                                    <p className="uppercase block font-medium text-xs sm:text-[14px] mt-5 mb-2">Телефон</p>
                                    <a href="tel:0981269508" className="font-medium text-sm sm:text-base  hover:underline">098 126 85 08</a>
                                </div>
                                <img src="/images/qr-code.png" alt="Qr-code" className="h-full w-[150px]" />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}