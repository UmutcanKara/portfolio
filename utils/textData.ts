
interface data {
    links: string[],
    skills: string[],
    qualifications: string[],
    contact: {
        linkedIn: string,
        github: string,
        instagram: string,
        // More will be added
    },
}
const textData: data = {
    links: [
       "About", 
       "Qualifications", 
       "Projects", 
       "Contact", 
    ],
    contact:{
        linkedIn: "https://www.linkedin.com/in/umutcan-kara-6607981b2/",
        github: "https://github.com/UmutcanKara/",
        instagram: "https://www.instagram.com/umurcankata/",
    },
    qualifications:[],
    skills:[
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Git",
        "BootStrap",
        "TailwindCSS",
        "JQuery",
        "HTML5",
        "CSS3",
    ],
}
export default textData