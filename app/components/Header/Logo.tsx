import Image from "next/image";

interface IProps {
    width?: number,
    height?: number
}

export default function Logo({ width = 60, height = 60 }: IProps) {
    return (
        <Image
            width={60}
            height={60}
            alt="Odin`s logo"
            src={"/images/odin`s-logo-black.svg"}
        />
    )
}