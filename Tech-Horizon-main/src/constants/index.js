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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  galaxy,
  mars,
  jupiter,
  neptune,
  planet,
  worldwide,
  rocket,
  Advert,
  McD,
} from "../assets";

// constants.js
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "features", title: "Highlights" },
  { id: "prizes", title: "Prizes" },
  { id: "sponsors", title: "Sponsors" },
  { id: "work", title: "Timeline" },
  { id: "faq", title: "FAQ" },
  { id: "guidelines", title: "Guidelines" },
  { id: "support", title: "Support" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Problem Solving Skills",
    icon: web,
  },
  {
    title: "Time Management Skills",
    icon: mobile,
  },
  {
    title: "Critical Thinking Skills",
    icon: backend,
  },
  {
    title: "Software Development Skills",
    icon: creator,
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];
const technologies = [
  {
    name: "Advent Engineers",
    icon: Advert,
  },
  {
    name: "McDonalds",
    icon: McD,
  },
  // {
  //   name: "TVS Sports",
  //   icon: javascript,
  // },
  // {
  //   name: "Dioss",
  //   icon: typescript,
  // },
 
 
];

const experiences = [
  {
    title: "20th January 2025",
    company_name: "Registration Period Starts",
    icon: planet,
    iconBg: "#383E56",
    points: ["Participants can register from 20th January 2025 to 7th February 2025."],
  },
  {
    title: "7th February 2025",
    company_name: "Last Date of Registration",
    icon: mars,
    iconBg: "#E6DEDD",
    points: ["Form Filling Procedure Ends."],
  },
  {
    title: "12th February 2025",
    company_name: "Shortlist Announcement",
    icon: jupiter,
    iconBg: "#383E56",
    points: ["Announcement of shortlisted participants through email."],
  },
  {
    title: "23rd February 2025",
    company_name: "Theme Declaration",
    icon: neptune,
    iconBg: "#E6DEDD",
    points: ["The central theme and detailed guidelines for the event are revealed."],
  },
  {
    title: "27th February 2025",
    company_name: "First Day",
    icon: mars,
    iconBg: "#383E56",
    points: [
      "8:30 AM: Registration and Check-In",
      "9:00 AM: Official Opening Ceremony & First Technical Session",
      "10:00 AM: Hint Reveal & Clues",
      "10:00 AM: H Kickoff: Ideation and Initial Coding",
      "12:00 PM: Lunch Break",
      "1:30 PM: Mentoring Round 1",
      "4:30 PM: Fun Activity",
      "6:00 PM: Round 1 (Examination)**"
    ],
  },
  {
    title: "28th February 2025",
    company_name: "Second Day",
    icon: worldwide,
    iconBg: "#E6DEDD",
    points: [
      "9:00 AM: Second Technical Session",
      "10:00 AM: Hint Reveal & Clues",
      "10:00 AM: Coding Round",
      "12:00 PM: Lunch Break",
      "1:30 PM: Mentoring Round 2",
      "3:30 PM: Fun Activity",
      "4:00 PM: Round 2 (Examination)**",
      "5:00 PM: Top 5 Teams Announcement**",
      "5:00 PM to 5:30 PM: Debate Competition",
      "6:30 PM: Awards & Closing Ceremony**"
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
