import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `As a frontend developer proficient in HTML,CSS,javascript,React,Bootstrap.
        I specialize in crafting visually appealing and interactive user interfaces.
        With a keep eye for design and a passion for innovation.I strive to create
        seamless and engaging web experiences that delight users..`;

export const ABOUT_TEXT = `The combination of my passion for design, code & interaction positions me in a unique place in the web design world. Born in the DC area - now serving clients worldwide.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

// export const PROJECTS = [
//   {
//     title: "InnovateU Web-page",
//     description: "A cutting-edge web application for innovation management.",
//     image: project1,
//     year: "2024",
//   },
//   {
//     title: "E-ShopEaze (A Multi-vendor E-commerce Application)",
//     description: "A comprehensive multi-vendor e-commerce platform.",
//     image: project2,
//     year: "2023",
//   },
//   {
//     title: "EmpowerMSE",
//     description: "A mobile app to empower small and medium enterprises.",
//     image: project3,
//     year: "2023",
//   },
//   {
//     title: "Metaverse Madness",
//     description: "An immersive metaverse experience.",
//     image: project4,
//     year: "2023",
//   },
// ];


export const PROJECTS = [
  {
    title: "Training and Placement Management System",
    image: project1,
    description:
      "A Training and Placement Management System designed for educational institutions, developed with React.js on the frontend and Spring Boot on the backend. This system streamlines the management of student training programs and placement activities, providing an efficient interface for students, administrators, and companies.",
    technologies: [ "React.js", "SpringBoot", "mySQL", "Github"],
    videoUrl: "https://www.youtube.com/embed/video_id1", 
  },
  {
    title: "Student Mentoring Management System",
    image: project2,
    description:
      "The Student Mentoring Management System is designed to facilitate and manage the mentoring process within educational institutions. The system provides a structured platform for assigning mentors to students, tracking progress, and fostering effective communication between mentors and mentees.",
    technologies: ["HTML", "CSS", "Bootstrap", "Jsp", "Servlet","JDBC","mySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Vehicle Parking Management System",
    image: project4,
    description:
      "The Vehicle Parking Management System is a web-based application designed to efficiently manage vehicle parking in various facilities such as malls, offices, and residential complexes. This system simplifies the process of allocating parking spaces, tracking vehicle entries and exits, and managing payments.",
    technologies: ["HTML", "CSS", "JavaScript", "BootStrap", "mySQL", "Xampp"],
  },
];

export const CONTACT = {
  address: "CRP Square, Bhubaneswar ",
  phoneNo: "+91 9348957874 ",
  email: "saktimayeenayak579@.com",
};
