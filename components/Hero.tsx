"use client";

import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { Icon } from '@iconify/react'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            {/* Spotlights */}
            <div>
                <Spotlight />
            </div>

            {/* Content */}
            <div className='flex justify-center  relative my-20 z-10'>
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]  flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-wider text-xs text-center text-blue-100 max-w-80">
                      Full-Stack Web Developer | Open to Work
                    </h2>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Where Concepts become Usable, Lovable Products"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Melvic Sosa, 10+ years of experience. Web Developer - Full-Stack & AI Enthusiast. MS Azure & Sharepoint Certified / Linux LPI Certified.
                    </p>
                    <a href='#about'>
                        <MagicButton
                            title='See My Work'
                            icon={<Icon icon="material-symbols:location-on-outline-rounded" />}
                            position='right'
                            otherClasses=''
                            handleClick={() => {}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
