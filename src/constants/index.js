import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project5.jpg";

export const HERO_CONTENT = `I am a passionate fresher Java and frontend developer eager to craft robust and scalable web applications. With a solid foundation in front-end technologies like HTML, CSS, JavaScript, TailWind and React.js, as well as back-end technologies including Core Java and Spring Boot, I am excited to apply my skills in real-world projects. I also have experience with MySQL and Oracle SQL. My goal is to leverage my knowledge to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile fresher Java and frontend developer with a passion for creating efficient and user-friendly web applications. I have a solid foundation in front-end technologies like HTML, CSS, JavaScript, and React.js, as well as back-end technologies including Core Java and Spring Boot. My journey in web development began with a deep curiosity for how things work, and I am excited to continuously learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "JUL 2024 - Present",
    role: "Java Full Stack Development",
    company: "JSPIDERS",
    description: `I am currently pursuing training at QSpider, where I am focusing on Core Java, Advanced Java, SQL, Hibernate, MVC, Spring Framework, and Spring Boot. Through structured coursework and hands-on projects, I am actively developing my practical skills and knowledge in full-stack development, preparing myself to tackle real-world challenges and contribute effectively to future projects.`,
    technologies: [
      "HTML & CSS",
      "JavaScript",
      "TailWind",
      "Core Java",
      "Spring Boot",
    ],
  },
  {
    year: "JUL 2024 - AUG 2024",
    role: "Web Development Intern",
    company: "Aadi Foundation",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "AUG 2023 - NOV 2023",
    role: "Full Stack Development With PHP & MYSQL",
    company: "Ardent Pvt Ltd.",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "RESTFul Contact Management API",
    image: project1,
    description:
      "This RESTful API, developed with Spring Boot and MySQL, allows for the management of user information,including names, contact details, and addresses.",
    technologies: ["Spring Boot", "MYSQL"],
  },
  {
    title: "NETFLIX Clone",
    image: project2,
    description:
      "Integrated seamlessly with the TMDb API to fetch and display real-time movie and TV show data, showcasing adept API utilization skills.",
    technologies: ["ReactJs", "Tailwind", "TMDB Api"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer Motion", "React Icons"],
  },
  {
    title: "GelleryHub Web Application",
    image: project4,
    description:
      "Created a photo gallery website with React.js and Tailwind CSS, utilizing the Pixabay API to showcase user-uploaded images. The app features a responsive design and dynamic photo loading, highlighting my skills in API integration and front-end development.",
    technologies: ["React", "Tailwind", "PixaBay Api"],
  },
  {
    title: "Online Auditorium Booking System",
    image: project5,
    description:
      "Developed a Dynamic web application using HTML, CSS and JavaScript for the frontend, providing and intuitive user interface for seamless booking experiences.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
  },
];

export const CONTACT = {
  address: "Kolkata, West Bengal, 700102",
  phoneNo: "+91 7001324287",
  email: "jayantar619@gmail.com",
};
