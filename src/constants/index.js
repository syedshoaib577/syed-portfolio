import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  // slk,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development Engineer in Test",
    icon: web,
  },
  {
    title: "Web, Desktop & Mobile App Automation",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Mentor & Teacher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

import slk from '../assets/company/slk.png';
const experiences = [
  {
    title: "Software Development Engineer in Test",
    company_name: "SLK Software Pvt. Ltd.",
    icon: slk,
    iconBg: "#E6DEDD",
    date: "October 2021 - Present",
    points: [
      'Extensive experience in the banking domain, specializing in Global Payments Systems such as MTS, SWIFT and UPF to enhance testing efficiency and ensure seamless transactions.',
      'Led and mentored QA teams, developing and maintaining test automation frameworks using WebDriverIO, Cypress and Selenium, achieving significant efficiency gains and managing end-to-end project delivery.',
      'Proficient in JavaScript and Java, building robust, scalable test scripts that improved test coverage and reduced manual efforts.',
      'Strong understanding of SDLC, Agile and CI/CT pipelines, ensuring seamless integration, continuous testing and high-quality software releases',
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Thank you for all your additional contributions outside of your project work. You are not only good in technical but also good in understanding the customer needs and work towards resolving the customer problems via technology. You always try to identify the solution out of the box and with other alternatives. You are always willing to help other team members in need — that adds another feather to your professionalism and a good 'Team Player.' You are a true asset to the organization. Keep up the good work, Syeed.",
    name: "Sharanabasava Math",
    designation: "Functional Test Manager",
    company: "SLK Software Pvt. Ltd.",
    // image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Syed is a valuable individual contributor to the team and takes care of Automation activities for Global Payments. He is working on automation tools like Katalon and WebDriverIO. He is learning new tools as part of the QA to QE transformation journey. He understands project criticality and manages workload effectively. Syed is very approachable, helps newly onboarded team members and supports other teams in implementing automation framework. He is a key team player for Payments Team, His ability to deliver under pressure and align with both customer and organizational goals makes him a true asset to the team.",
    name: "Praveen Kollu",
    designation: "Project Manager",
    company: "SLK Software Pvt. Ltd.",
    // image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

import mts from '../assets/mts.jpg';
import swift from '../assets/swift.png';
import upf from '../assets/upf.jpg';
const projects = [
  {
    name: "Money Transfer System",
    description:
      "Desktop-based platform that allows users to initiate payments. It provides a user-friendly interface for sending money, tracking transactions and managing payment history.",
    tags: [
      {
        name: "Katalon",
        color: "blue-text-gradient",
      },
      {
        name: "Hybrid Framework",
        color: "green-text-gradient",
      },
    ],
    // image: carrent,
    image: mts
    // source_code_link: "https://github.com/",
  },
  {
    name: "SWIFT Payment System",
    description:
      "A comprehensive payment system that enables users to send and receive money globally, ensuring secure and efficient transactions.",
    tags: [
      {
        name: "WebdriverIO",
        color: "pink-text-gradient",
      },
      {
        name: "Cucumber Framework",
        color: "green-text-gradient",
      },
    ],
    image: swift
  },
  {
    name: "UPF Payment System",
    description:
      "A comprehensive payment system that enables users to send and receive money globally, ensuring secure and efficient transactions.",
    tags: [
      {
        name: "Cypress",
        color: "pink-text-gradient",
      },
      {
        name: "Mocha Framework",
        color: "green-text-gradient",
      },
    ],
    image: upf
  },
];

import RockstarPic from '../assets/award/22.23 Q1 RockstarPic.jpeg';
import ShiningStarPic1 from '../assets/award/24.25 Q1 ShiningStarPic.png';
import ShiningStarPic2 from '../assets/award/23.24 Q2 ShiningStarPic.jpg';
import VisionChampion from '../assets/award/24.25 Q1 Vision Champion.jpg';
import Thanks from '../assets/award/23.24 Q4 Thanks.jpg';
import TeamPlayer from '../assets/award/24.25 Q2 Team Player.jpg';
import HighFive from '../assets/award/2022 Jun - High Five.jpg';
const awards = [
  {
    awardTitle: "Shining Star Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: ShiningStarPic2,
  },
  {
    awardTitle: "Shining Star Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: ShiningStarPic1,
  },
  {
    awardTitle: "Budding RockStar Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: RockstarPic,
  },
  {
    awardTitle: "Vision Champion Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: VisionChampion,
  },
  {
    awardTitle: "Thankyou Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: Thanks,
  },
  {
    awardTitle: "Team-Player Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: TeamPlayer,
  },
  {
    awardTitle: "High-Five Award",
    orgName: "SLK Software Pvt. Ltd.",
    icon: HighFive,
  },

];

export { services, technologies, experiences, testimonials, projects, awards };
