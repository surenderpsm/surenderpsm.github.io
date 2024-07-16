import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => (
    <header className="h-screen flex flex-col justify-center snap-start snap-always">
        <div className="flex flex-col items-center m-10">
            <StaticImage
                src="../../images/dp.jpg"
                className="animate-[fadeInBottom_1s_ease-in-out] size-[150px] xs:size-[200px] rounded-full"
                alt="A headshot of Surender with foliage in the background"
            />
            <div className="animate-[fadeInBottom_1.5s_ease-in-out] font-display font-extralight text-center text-3xl xs:text-4xl mt-10 mb-2">
                Hi, I am{' '}
                <span className="font-extrabold text-4xl xs:text-5xl">
                    Surender
                </span>
            </div>
            <div className="animate-[fadeInBottom_2s_ease-in-out] font-mono text-center text-sm xs:text-base">
                Computer Science Graduate | Front-end Developer | Data Science
                Enthusiast
            </div>
        </div>
    </header>
);

export default Hero;
