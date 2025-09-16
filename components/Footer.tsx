import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                Ready to build something <span className="text-blue-300">great</span> together?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center text-lg">
                    Let&apos;s connect and explore how my skills can help grow your business or team.
                </p>
                <a href="/melvic-sosa-resume.pdf" download>
                    <MagicButton
                        title="Download Resume"
                        icon={<Icon icon="hugeicons:pdf-01" color="#d91304" width={30} height={30} />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex gap-6 mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Melvic Sosa
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <Icon icon={info.icon} color="white" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;