import React from "react";
import { FaHome, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export const items = [
    { name: "Home", icon: React.createElement(FaHome), href: "#about" },
    { name: "Projects",icon: React.createElement(GrProjects), href: "#projects" },
    { name: "Github",icon: React.createElement(FaGithubSquare), href: "#github" },
    { name: "Linkedin",icon: React.createElement(FaLinkedin), href: "#linkedin" },
    { name: "Gmail",icon: React.createElement(MdEmail), href: "#gmail" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "My Tech Stack",
      description: "",
      className: "lg:col-span-1.5 md:col-span-2 md:row-span-1 lg:min-h-[20vh] z-index-50",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];