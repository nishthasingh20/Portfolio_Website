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
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
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