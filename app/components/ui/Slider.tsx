import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface SliderProps {
    children: ReactNode;
    sliderCount: number;
}

export function Slider({ children, sliderCount }: SliderProps) {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);

    function handlePrevClick() {
        if (current > 0) {
            setCurrent(current - 1);
        }
    }

    function handleNextClick() {
        if (current < sliderCount - 1) {
            setCurrent(current + 1);
        }
    }

    useEffect(() => {
        if (slideRef.current) {
            const visibleWidth = slideRef.current.offsetWidth;
            const totalWidth = slideRef.current.scrollWidth;
            const individualSlideWidth = totalWidth / sliderCount;

            setCarouselWidth(individualSlideWidth * sliderCount - visibleWidth);
        }
    }, [sliderCount]);

    return (
        <section id="popular-plans-section" className="w-full h-full relative">
            <div className="absolute top-1/2 left-0 w-fit flex justify-between px-5 z-[20]">
                <Button
                    isIconOnly
                    className={`p-3 rounded-full h-fit w-fit bg-white cursor-pointer select-none ${current === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handlePrevClick}
                >
                    <RiArrowLeftSLine size={22} />
                </Button>
            </div>
            <div className="absolute top-1/2 right-0 w-fit flex justify-between px-5 z-[20]">
                <Button
                    className={`p-3 rounded-full h-fit w-fit bg-white cursor-pointer select-none ${current === sliderCount - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleNextClick}
                    isIconOnly
                >
                    <RiArrowRightSLine size={22} />
                </Button>
            </div>
            <div
                className="overflow-x-hidden overflow-y-hidden flex h-full relative z-[15] touch-none"
                ref={slideRef}
            >
                <motion.div
                    animate={{
                        x: `-${current * (carouselWidth / (sliderCount - 1))}px`,
                    }}
                    className={`mt-5 gap-2 flex mx-auto`}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
