import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Enamul Karim Tamzid",
  initials: "EKT",
  url: "https://tamzid.me",
  location: "Montreal, QC",
  locationLink: "https://www.google.com/maps/place/montreal",
  description:
    "Full Stack Software Engineer. I love building things and helping people.",
  summary:
    "Full Stack Software Developer with 5+ years of experience in building scalable applications using JavaScript, TypeScript, and Python. I’ve led projects like an ed-tech platform that scaled to 100,000+ users, automated QA frameworks saving 60+ hours monthly, and microservices that improved performance for 10M+ subscribers. Skilled in cloud technologies, microservices, and CI/CD, I’m passionate about crafting efficient, high-impact solutions that drive growth and innovation.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "React Native",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/ekt-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/ekt-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/ekt-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/ekt-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://dub.sh/ekt-mail",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "LOC Software",
      href: "https://atomic.finance",
      badges: [],
      location: "Laval, QC",
      title: "Software QA Analyst",
      logoUrl: "/loc.svg",
      start: "July 2023",
      end: "April 4",
      description:
        "Developed a scalable testing framework using Python and Selenium, integrated with CI/CD pipelines to automate over 150 test cases per release with a 95% pass rate. Automated manual test processes, saving 60 hours monthly, and collaborated with development teams to identify and resolve 100+ software defects before release.",
    },
    {
      company: "Red.Digital",
      badges: [],
      href: "https://www.reddotdigitalit.com/",
      location: "Dhaka, BD",
      title: "Software Developer",
      logoUrl: "/reddot.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Developed and deployed microservices for dCRM, a CRM platform serving over 10 million subscribers, using containers and Kubernetes on self-hosted servers. Automated the development lifecycle with Jenkins, Ansible, and Terraform, enhancing efficiency. Led R&D for new projects and conducted tech sessions. Managed feature development for both frontend and backend, implemented RPAs for process automation, and maintained/upgraded existing microservices. As Project Manager for an in-house CI/CD platform, I set up Gitlab, Docker Registry, and Kubernetes to streamline development, ensuring smooth project build, test, and deployment. Collaborated closely with end users for optimal satisfaction.",
    },
    {
      company: "Mainframe Labs",
      href: "",
      badges: [],
      location: "Dhaka, BD",
      title: "Full Stack Software Engineer",
      logoUrl: "/mainframe.png",
      start: "December 2020",
      end: "July 2021",
      description:
        "Led development for Sohopathi's ed-tech platform, managing a team of 3-4 junior developers. Built a web platform and two mobile apps, one for students and one for mentors, which contributed to winning the prestigious Bangabandhu Innovation Grant (1 million BDT). Developed backend microservices for key functionalities, including User, QnA, Exam, Course, Billing, and shared libraries used across all applications. Focused on scalability, seamless integration, and user experience.",
    },
    {
      company: "Paradynamix LLC",
      href: "https://paradynamix.com/",
      badges: [],
      location: "Ohio, US",
      title: "Software Engineer",
      logoUrl: "/paradynamix.png",
      start: "December 2019",
      end: "November 2020",
      description:
        "Developed several web applications, including a major SaaS product, that positioned the organization as a competitive tech player in the market. Played a key role in bridging the business and tech teams while handling foreign clients. Contributed to product design, prototyping, and full-stack development. Led backend development for an ERP system, designed a multi-tenant app for construction management, and implemented authentication, event management, and employee management modules for the SaaS platform.",
    },
  ],
  education: [
    {
      school: "Concordia University",
      href: "https://www.concordia.ca/",
      degree: "Master of Engineering (MEng) in Quality Systems Engineering",
      logoUrl: "/concordia.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Islamic University of Technology",
      href: "https://www.iutoic-dhaka.edu/",
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      logoUrl: "/iut.png",
      start: "2016",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Sohopathi Web",
      href: "https://sohopathi.io/",
      dates: "Jan 2021 - July 2021",
      active: true,
      description:
        "Designed and developed Bangladesh's largest online ed-tech platform, enabling students to purchase courses, hire mentors, or ask questions. Led the creation of a distributed backend system and a responsive frontend, ensuring a smooth and scalable user experience for both students and mentors.",
      technologies: [
        "Next.js",
        "Typescript",
        "Express",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Docker",
        "Scss",
        "Cloudinary",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sohopathi.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/os-web.png",
      video: "",
    },
    {
      title: "Sohopathi",
      href: "",
      dates: "Feb 2021 - June 2021",
      active: true,
      description:
        "The Sohopathi mobile apps are designed to enhance the learning experience for both students and mentors. With dedicated apps for each, they bring all the features of the web platform to mobile, along with added conveniences. An in-app messaging service allows seamless communication, while a user-friendly interface ensures smooth navigation. Push notifications for class reminders help keep users on track, offering an all-in-one educational solution.",
      technologies: [
        "Typescript",
        "React Native",
        "Redux",
        "Redux Toolkit",
        "styled-components",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/os-mobile.png",
      video: "",
    },
    {
      title: "Halkhata",
      href: "",
      dates: "July 2020 - March 2021",
      active: true,
      description:
        "Halkhata is an intuitive app designed for small and medium-sized businesses, enabling them to efficiently track daily transactions, manage customer credits, and monitor expenses. With built-in messaging features, businesses can directly notify customers about outstanding loans, while monthly reports provide a clear financial overview. It's a comprehensive solution to streamline financial management for SMEs.",
      technologies: [
        "Javascript",
        "React Native",
        "Redux",
        "Redux Toolkit",
        "styled-components",
        "Node.js",
        "Express",
        "MongdoDB",
        "AWS S3",
        "Digital Ocean",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hk-cover.png",
      video: "",
    },
    {
      title: "Space Invasion",
      href: "",
      dates: "July 2016 - August 2016",
      active: true,
      description:
        "Space Invasion is inspired by a classic mobile game called Space Impact from Nokia.",
      technologies: ["C++"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/space-impact.gif",
      video: "",
    },
  ],
  hackathons: [],
} as const;
