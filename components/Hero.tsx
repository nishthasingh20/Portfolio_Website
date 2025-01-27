import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="silver" />
                <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="blue" />
                <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="purple" />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute tp-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />  
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Hello, I'm Nishtha Singh
                    </h2>

                    <TextGenerateEffect 
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="About Me"
                    />

                    <p className="text-center">
                        Greetings, I'm a passionate web developer with a keen interest in building web applications. I'm also a machine learning enthusiast. I possess problem solving skills which help me tackle data structures and algortihms problems. 
                        I'm eager to learn new technologies and frameworks and get opportunities to grow further in my career.
                    </p>

                    <a href="#about">
                        <MagicButton 
                        title="Show my work"
                        position="relative"/>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Hero;