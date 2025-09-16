import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { Icon } from '@iconify/react';

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h2 className="heading">
                A small selection of{" "}
                <span className="text-blue-300">Recent Projects</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-24 mt-10">
                {projects.map(({id, img, title, description, iconLists, link}) => (
                    <div key={id} className="sm:h-[40rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] w-[80vw] flex items-center justify-center">
                        <PinContainer title={title} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden rounded-lg lg:rounded-3xl h-[220px] sm:h-[260px] lg:h-[360px] mb-10">
                                <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                                </div>
                                <img
                                    src={img}
                                    alt="cover"
                                    className="z-10 absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4 md:line-clamp-5" style={{
                                color: "#BEC1DD",
                                margin: "1vh 0",
                                }}>
                                {description}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        {/* Support both local/remote images and Iconify names */}
                                        {icon.includes(":") ? (
                                            <Icon icon={icon} className="p-1.5" width={36} height={36} />
                                        ) : (
                                            <img src={icon} alt="tech icon" className="p-1.5 w-9 h-9 object-contain" />
                                        )}
                                    </div>
                                ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-blue-300">
                                        Site Preview
                                    </p>
                                    <Icon icon="material-symbols:arrow-forward" color="#92c5fd" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RecentProjects
