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
  meta,
  starbucks,
  tesla,
  shopify,
  zoom,
  threads,
  chatapp,
  threejs,
  express,
  vite,
  docker,
  NextJs,
  github,
  rust,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },

  {
    title: "Problem Solver",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "rust",
    icon: rust,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "NextJs",
    icon: NextJs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Collage Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2024 - june 2024",
    points: [
      "Developed a time and money management application using React.js.",
      "Implemented features for tracking expenses, budgets, and scheduling tasks.",
      "Ensured responsive design and cross-browser compatibility.",
      "Collaborated with a team to optimize performance and user experience.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Collage Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Built a Zoom-like video conferencing platform using Next.js.",
      "Integrated real-time communication features using WebRTC and WebSockets.",
      "Implemented authentication, meeting scheduling, and screen sharing functionalities.",
      "Ensured scalability and performance optimization for seamless user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zoom ",
    description:
      "A powerful Zoom app designed to enhance virtual meetings with advanced productivity tools and analytics. Seamlessly integrates with Zoom to offer real-time insights and a user-friendly interface. Perfect for professionals and teams seeking efficient collaboration.",
    tags: [
      {
        name: "nextjs",
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
    image: zoom,
    source_code_link: "https://zoom-clone-web-app.vercel.app/",
  },
  {
    name: "Chat App",
    description:
      "A simple and secure chat app focused on real-time messaging with an intuitive user interface. Perfect for personal and professional one-on-one conversations. Designed to keep communication fast and efficient.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "pusher",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://my-chat-webapp.vercel.app/dashboard",
  },
  {
    name: "Threads",
    description:
      "A Threads app designed for quick, real-time microblogging and social interaction. Features a sleek feed and post sharing. Ideal for staying updated with trends and engaging with a community.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://threads-next-webapp.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
