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
    {
        id: "resume",
        title: "Resume",
    }
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Navigating Leadership",
        icon: backend,
    },
    {
        title: "Content Creator",
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
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Graduation",
        company_name: "IIIT Lucknow",
        icon: starbucks,
        iconBg: "#383E56",
        date: "December 2020 - Ongoing",
        points: [
            "Pursuing a Bachelor's degree in Computer Science from IIIT Lucknow, currently in the 4th year.",
            "Maintaining an average CGPA of 8.55 till the 6th semester, reflecting consistent academic excellence.",
            "Successfully completed key courses including Data Structures and Algorithms, Operating System, DBMS, Computer Networks, and OOPs, showcasing a solid foundation in core computer science subjects.",
        ],
    },
    {
        title: "Higher Secondary Education",
        company_name: "Sri Ramdev Inter College",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "April 2018 - April 2019",
        points: [
            "Completed higher secondary education with a strong academic performance at Sri Ramdev Inter College, Ballia U.P., achieving a notable 76%.",
            "Studied under the affiliation of the U.P. Board, ensuring a rigorous and recognized curriculum.",
            "Concurrently prepared for the Joint Entrance Exam, demonstrating dedication and multitasking skills in pursuit of academic and career goals.",
        ],
    },
    {
        title: "HighSchool",
        company_name: "St. Xavier's School",
        icon: shopify,
        iconBg: "#383E56",
        date: "April 2015 - April 2016",
        points: [
            "Successfully completed high school education at St. Xavier's School, Dharahara Ballia, U.P., achieving a perfect 10 CGPA.",
            "Studied under the affiliation of the Central Board of Secondary Education (CBSE), ensuring a standardized and comprehensive curriculum.",
            "Attained exceptional academic performance, reflecting dedication and strong foundational knowledge.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "His exemplary work in crafting a project under my guidance for college use reflects dedication and a strong commitment to enhancing our educational resources.",
        name: "Dr. Vishal Krishna",
        designation: "TPO & AR",
        company: "IIIT Lucknow",
        image: "https://iiitl.ac.in/wp-content/uploads/2019/09/Dr.-Vishal-Krishna-Singh.jpg",
    },
    {
        testimonial:
            "His exceptional dedication and meticulous organization truly made the college E-Summit a resounding success, his management skills are truly commendable!",
        name: "Dr. Abhinesh Kaushik",
        designation: "Student Sctivity Incharge",
        company: "IIIT Lucknow",
        image: "https://iiitl.ac.in/wp-content/uploads/2022/01/Dr.-Abhinesh-Kaushik.jpg",
    },
    {
        testimonial:
            "Through consistent active engagement in academics and achieving a strong CGPA, he showcases a determined and focused approach to personal growth.",
        name: "Dr. Dhananjoy Dey",
        designation: "Dean",
        company: "IIIT Lucknow",
        image: "https://iiitl.ac.in/wp-content/uploads/2020/11/DD-1.png",
    },
];

const projects = [
    {
        name: "MePlus",
        description:
            "Crafted an engaging web application that facilitates user-friendly image uploads, exploration, and real-time commenting for enhanced interaction.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Sanity.io",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/vivekbarnwal54/MePlus_Frontend",
    },
    {
        name: "E2C",
        description:
            "Transformed college enrollment through a user-friendly website, simplifying processes and enhancing efficiency. Key contributor to UI/UX design and overall functionality in a group context.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "NodeJs",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/vivekbarnwal54/Ease2Counsel-E2C-",
    },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };