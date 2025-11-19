import { link } from "fs";
import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Working Directly with clients to build and manage scalable web applications.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TextSage",
    des: "Our text message marketing app was designed to help you connect with your customers in a way that's engaging, compliant and not spam-like.",
    img: "/textSage.svg",
    iconLists: ["/ruby-svgrepo-com.svg", "/tail.svg", "/javascript-svgrepo-com.svg", "/postgresql-svgrepo-com.svg","robot-face-svgrepo-com.svg"],
    link: "https://textsage.net/",
  },
  {
    id: 2,
    title: "Camelstep",
    des: "A company and factory for specialty coffee.",
    img: "/camelStep.svg",
    iconLists: ["/ruby-svgrepo-com.svg", "/tail.svg", "/javascript-svgrepo-com.svg", "/postgresql-svgrepo-com.svg"],
    link: "https://camelstep.com/?srsltid=AfmBOoons7rMFkwlZHC8aKdZYB92TvQd_9EnNKOrvGksJJSFArZFgE0b",
  },
  {
    id: 3,
    title: "WeGuide",
    des: "We exist to improve patient's lives by simplifying health technology.",
    img: "/weguidehealth.png",
    iconLists: ["/ruby-svgrepo-com.svg", "/tail.svg", "/javascript-svgrepo-com.svg", "/postgresql-svgrepo-com.svg"],
    link: "https://www.weguide.health/",
  },
  {
    id: 4,
    title: "Real Time Chat App",
    des: "Developed a real-time chat application using React.js, Node.js, and Socket.io, enabling users to send and receive messages instantly with a user-friendly interface.",
    img: "/real time.png",
    iconLists: ["/react.svg", "/tail.svg", "/mongodb.svg", "/nodejs.svg"],
    link: "https://chat-app-sont.onrender.com/",
  },
];

export const testimonials = [
  {
    quote:
      "Abdur's expertise in managing my applications using a component-based approach was remarkable. His structured methodology ensured scalability and maintainability, making the entire process seamless.",
    name: "Sophia",
  },
  {
    quote:
      "It was great working with Abdur. He is not only a smart developer but also a proactive problem solver who always delivers on time.",
    name: "Carlos",
  },
  {
    quote:
      "Abdur's positive attitude and smart approach to tackling challenges made him a joy to work with. His enthusiasm is contagious, and his results speak for themselves.",
    name: "Darvey stanley",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Abdurrehman0024"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/abdur-rehman-6a0a312a9/"
  },
];