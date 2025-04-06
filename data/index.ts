import React from "react";
import { FaHome, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export const navItems = [
    { name: "Home", link: "#about", icon: React.createElement(FaHome)},
    { name: "Projects",link: "#projects", icon: React.createElement(GrProjects)},
    { name: "Github", link: "https://github.com/nishthasingh20", icon: React.createElement(FaGithubSquare)},
    { name: "Linkedin", link: "https://linkedin.com/in/nishtha-singh-510871318", icon: React.createElement(FaLinkedin), },
    { name: "Gmail", link: "singhnishtha206@gmail.com", icon: React.createElement(MdEmail) },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CrytoPulse",
      des: "Invest Smart, Live Rich. A CryptoCurrency Tracker website",
      img: "crypto_bg.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://crypto-pulse-delta.vercel.app/",
    },
    {
      id: 2,
      title: "Plant Disease Prediction Model",
      des: "Predict the disease in plants using Machine Learning",
      img: "plant_bg.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/nishthasingh20/PlantDiseasePrediction_Model"
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