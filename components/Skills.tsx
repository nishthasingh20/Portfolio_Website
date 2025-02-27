"use client"
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import { FaTools } from 'react-icons/fa';

interface ImageData {
  src: string;
  alt: string;
  tooltip: string;
}

const images: ImageData[] = [
  { src: '/assets/skills/c++.webp', alt: 'C++', tooltip: 'C++' },
  { src: '/assets/skills/css.webp', alt: 'CSS', tooltip: 'CSS' },
  { src: '/assets/skills/figma.webp', alt: 'Figma', tooltip: 'Figma' },
  { src: '/assets/skills/git.webp', alt: 'Git', tooltip: 'Git' },
  { src: '/assets/skills/github_white.webp', alt: 'GitHub', tooltip: 'GitHub' },
  { src: '/assets/skills/html.webp', alt: 'HTML', tooltip: 'HTML' },
  { src: '/assets/skills/js.webp', alt: 'JavaScript', tooltip: 'JavaScript' },
  { src: '/assets/skills/mysql.webp', alt: 'MySQL', tooltip: 'MySQL' },
  { src: '/assets/skills/nextjs.webp', alt: 'Next.js', tooltip: 'Next.js' },
  { src: '/assets/skills/nodejs.webp', alt: 'Node.js', tooltip: 'Node.js' },
  { src: '/assets/skills/react.webp', alt: 'React', tooltip: 'React' },
  { src: '/assets/skills/typescript.webp', alt: 'TypeScript', tooltip: 'TypeScript' },
  { src: '/assets/skills/ubuntu.webp', alt: 'Ubuntu', tooltip: 'Ubuntu' },
  { src: '/assets/skills/vercel_white.webp', alt: 'Vercel', tooltip: 'Vercel' },
  { src: '/assets/skills/tailwind.webp', alt: 'Tailwind CSS', tooltip: 'Tailwind CSS' },
  { src: '/assets/skills/python.webp', alt: 'Python', tooltip: 'Python' },
  { src: '/assets/skills/photoshop.webp', alt: 'Photoshop', tooltip: 'Photoshop' },
];

const HoverImageComponent: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <TooltipProvider delayDuration={0}>
      <div className='mt-20' id="skills">
        <h4 className="heading">
          My {' '}
          <span className="text-purple">Tech Stack</span>
        </h4>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-14 gap-x-14 justify-items-center px-2 py-2 mt-10">
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
                    {image && (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              </TooltipTrigger>
              
              {hoveredIndex === index && image && (
                <TooltipContent className="p-2 text-sm bg-black text-white rounded">
                  <p className='font-bold text-xl'>{image.tooltip}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default HoverImageComponent;