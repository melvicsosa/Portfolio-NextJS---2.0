"use client";

import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './background-gradient-animation'
import GridGlobe from './grid-globe'
import { useState } from 'react';
import animationData from '@/data/confetti.json';
import Lottie from 'react-lottie';
import MagicButton from './magic-button';
import { Icon } from '@iconify/react';
import { techStacksLeft, techStacksRight } from '@/data';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string
    id: number
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    img?: string
    imgClassName?: string
    titleClassName?: string
    spareImg?: string
}) => {
    {/* Email Copy handler */}
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('melvic.sosa@gmail.com');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }
    return (
        <div
            className={cn(
                'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
                className 
            )}
            style={{
                background: 'rgb(4, 7, 29)',
                backgroundColor: 'linear-gradient(135deg, rgba(4, 7, 29, 1) 0%, rgba(12, 35, 41, 1) 100%)',
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 6 && "w-full opacity-80"} `}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                {id === 6 && (
                    <BackgroundGradientAnimation />
                )}
                <div className={cn(
                    titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p:10"
                )}>
                    <div className="font-sans text-sm font-extralight text-gray-100 md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                        {title}
                    </div>

                    {/* Grid Globe Component */}
                    {id === 2 && <GridGlobe />}

                    {/* Tech Stacks */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {techStacksLeft.map((item, i) => (
                                <span
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                >
                                    {item}
                                </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                                {techStacksRight.map((item, i) => (
                                <span
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                >
                                    {item}
                                </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Email Section */}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div
                                className={`absolute -bottom-5 right-0 ${copied ? "block" : "hidden"
                                }`}
                            >
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    }
                                }} />
                            </div>  

                            <MagicButton 
                                title={copied ? 'Email copied' : 'Copy My Email'}
                                icon={<Icon icon="mdi:content-copy" />}
                                position='left'
                                otherClasses='!bg-[#161931]' 
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div> 
            </div>
        </div>
    )
}
