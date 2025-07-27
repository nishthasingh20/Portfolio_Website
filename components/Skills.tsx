"use client"
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
  tooltip: string;
}

const skillCategories = {
  languages: [
    { src: '/assets/skills/c++.webp', alt: 'C++', tooltip: 'C++' },
    { src: '/assets/skills/c.webp', alt: 'C', tooltip: 'C' },
    { src: '/assets/skills/python.webp', alt: 'Python', tooltip: 'Python' },
    { src: '/assets/skills/java.webp', alt: 'Java', tooltip: 'Java' },
    { src: '/assets/skills/js.webp', alt: 'JavaScript', tooltip: 'JavaScript' },
    { src: '/assets/skills/typescript.webp', alt: 'TypeScript', tooltip: 'TypeScript' },
    { src: '/assets/skills/html.webp', alt: 'HTML', tooltip: 'HTML' },
    { src: '/assets/skills/css.webp', alt: 'CSS', tooltip: 'CSS' },
  ],
  frameworks: [
    { src: '/assets/skills/react.webp', alt: 'React', tooltip: 'React & React Native' },
    { src: '/assets/skills/nextjs.webp', alt: 'Next.js', tooltip: 'Next.js' },
    // { src: '/assets/skills/nodejs.webp', alt: 'Node.js', tooltip: 'Node.js' },
    { src: '/assets/skills/springboot.webp', alt: 'Springboot', tooltip: 'Springboot' },
    { src: '/assets/skills/tailwind.webp', alt: 'Tailwind CSS', tooltip: 'Tailwind CSS' },
  ],
  databases: [
    { src: '/assets/skills/mysql.webp', alt: 'MySQL', tooltip: 'MySQL' },
    { src: '/assets/skills/postgre.webp', alt: 'PostgreSQL', tooltip: 'PostgreSQL' },
  ],
  tools: [
    { src: '/assets/skills/figma.webp', alt: 'Figma', tooltip: 'Figma' },
  ],
};

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <TooltipProvider delayDuration={0}>
      <div className='mt-20' id="skills">
        <h4 className="heading">
          My {' '}
          <span className="text-purple">Tech Stack</span>
        </h4>
        
        <div className="flex flex-col gap-12 mt-10 px-4">
          {Object.entries(skillCategories).map(([category, images]) => (
            <div key={category} className="w-full">
              <h3 className="text-xl font-semibold capitalize mb-6 text-purple/80">
                {category}:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-8 justify-items-center">
                {images.map((image, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div
                          className={`
                            transition-all duration-300 ease-in-out
                            ${hoveredIndex === index ? 'scale-125 z-10 rotate-360' : 'scale-80'}
                            ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm scale-75' : ''}
                          `}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    
                    {hoveredIndex === index && (
                      <TooltipContent className="p-2 text-sm bg-black text-white rounded">
                        <p className='font-bold text-xl'>{image.tooltip}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Skills;