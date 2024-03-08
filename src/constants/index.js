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
  gbatteries,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  decathlon,
  tel,
  roc,
  blog,
  travel,
  chbs
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
    title: "Fullstack Developing",
    icon: web,
  },
  {
    title: "Python Developing",
    icon: mobile,
  },
  {
    title: "Data Analysis",
    icon: backend,
  },
  {
    title: "QA Automation",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Battery Test Developer",
    company_name: "Gbatteries",
    icon: gbatteries,
    iconBg: "#383E56",
    date: "May 2023 - Jan 2024",
    points: [
      `Developed and optimized nearly 50 battery charging algorithms for experimental lithium-metal batteries
      using Python, with a focus on Object-Oriented Programming, NumPy, and Pandas, successfully
      increasing the battery cycle life by 3 times compared to normal batteries.`,
      `Characterized diverse battery charging profiles through comprehensive testing within Docker containers,
      ensuring optimal performance and safety.`,
      `Built a comprehensive cycling data tracking dashboard in a Jupyter Notebook environment, utilizing the
      Python Plotly library, HTML, JavaScript, and CSS for enhanced data visualization and user interaction.`,
      `Maintained and augmented an internal battery testing Python library, integrating new features and
      deploying unit tests (PyTest) into the CI/CD workflow on GitLab for improved efficiency and reliability.`,
    ],
  },
  {
    title: "Quality Engineer",
    company_name: "Decathlon",
    icon: decathlon,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Feb 2022",
    points: [
      `Leveraged data analysis and visualization techniques with Python, SQL, and BI tools to build an
      automation process for product quality control, defect detection, and streamlining supply chain
      management processes.`,
      `Collaborated closely with product manufacturers and cross-functional teams, ensuring high product
      quality standards and seamless supply chain operations while proactively addressing quality-related
      issues.`,
      `Implemented advanced defect detection methodologies such as Visual Inspection, Measurement and
      Dimensional Analysis, and Statistical Process Control (SPC), leveraging statistical analysis to minimize
      risks and enhance customer satisfaction.`,
      `Facilitated effective communication with customers and stakeholders, addressing concerns promptly and
      providing dedicated support to ensure positive outcomes.`,
    ],
  },
  {
    title: "Etch Process Engineer",
    company_name: "Tokyo Electron Limited (TEL)",
    icon: tel,
    iconBg: "#383E56",
    date: "Mar 2017 - Feb 2021",
    points: [
      `Utilized advanced Excel skills (pivot tables, VBA, macros) for data analysis and visualization, driving
      process improvements and informed decision-making in the semiconductor production environment.`,
      `Leveraged in-depth semiconductor process knowledge, including TSMC N7/N5 processes, and designed
      experiments to optimize solutions, resulting in enhanced production efficiency and increased throughput.`,
      `Conducted comprehensive defect analysis and applied semiconductor-related measurement tools (e.g.,
      scanning electron microscope, film thickness, surface scan) to support hardware modifications and reduce
      maintenance costs.`,
      `Maintained excellent customer relationships and communication skills, collaborating effectively with
      internal and external stakeholders to achieve project objectives and ensure customer satisfaction.`,
    ],
  },
  {
    title: "Second Lieutenant",
    company_name: "Mandatory Military Service (Taiwan)",
    icon: roc,
    iconBg: "#E6DEDD",
    date: "Dec 2015 - Dec 2016",
    points: [
      `Rotated every three months to lead a new group of recruits, primarily responsible for personnel affairs,
      including scheduling leave/holidays and overseeing reward and disciplinary matters.`,
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
    name: "Country Home Baking Website",
    description: `This project involved developing an e-commerce website for a local bakery shop using Python's Django framework, incorporating comprehensive CRUD functionalities, backend admin updates, seamless shopping cart and order placement for customers, secure Google OAuth admin login, and leveraging HTML/CSS/Javascript with Bootstrap and SQLite for frontend and backend development respectively.`,
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: chbs,
    source_code_link: "https://github.com/BrianQQQ/Country-Home-Baking-Sweets-CHBS-",
  },
  {
    name: "Blog app",
    description: `This project entailed engineering a multi-user blog website with the Python Django framework, featuring full CRUD capabilities, user registration, personal information updates, blog post creation, password recovery, deployed on Heroku for reliable performance, and utilizing HTML/CSS/Javascript with Bootstrap for the frontend and PostgreSQL for the backend.`,
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/BrianQQQ/BrianQQQ-Blog-App-Django",
  },
  {
    name: "Domestic Travel Agency App",
    description: `This project involved designing and developing a website for a domestic travel agency, utilizing HTML/CSS/Javascript for frontend development and PHP for backend tasks, with a focus on implementing custom Javascript-based user authentication for secure access and user management.`,
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/BrianQQQ/Canada-domestic-travel-agency",
  },
];

export { services, technologies, experiences, testimonials, projects };