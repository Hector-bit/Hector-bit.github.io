import ProjectCard from "@/components/projectCard";
import ExperienceCard from "@/components/experienceCard";
import { ProjectCardType } from "./types";

const experienceData:any[] = [
  { 
    name: 'Pixel Vault',
    date: 'May 2022 - December 2024',
    role: 'Front-end engineer',
    description: "At Pixelvault, I was responsible for transforming Figma designs into fully functional, pixel-perfect ReactJS implementations. I played a key role in troubleshooting and debugging issues that arose when switching frameworks or integrating new packages, ensuring smooth transitions and maintaining code quality. Additionally, I collaborated closely with backend engineers and QA teams to validate features and ensure sites were optimized and deployment-ready. My time at Pixelvault strengthened my ability to work across teams, adapt to evolving tech stacks, and build seamless, high-performance web experiences.",
    tools: ['ReactJS,', 'NextJS,', 'Framer-motion,', 'Tailwind'],
    // githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  },
  { 
    name: 'Bellingham Makerspace',
    date: 'June 2020 - December 2020',
    role: 'Voluteer web developer',
    description: "At Bellingham MakerSpace, I contributed as a volunteer developer, enhancing user functionality and refining frontend design. Working with WordPress and its plugins, I styled and improved the tool booking system and event/class calendars, making it easier for members to schedule time for the workshop equipment. A key focus of my work was ensuring universal design and accessibility, helping create a more inclusive and user-friendly experience for the MakerSpace community.",
    tools: ['Wordpress,', 'CSS,', 'Javascript'],
    // githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  }
]

const projectListData:ProjectCardType[] = [
  { 
    name: 'adventOfCode',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & implementing new algorithms when my brute force solutions wouldn't suffice.",
    tools: ['Python'],
    githubLink: { link: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020', name: 'Github Repository'},
    webLink: { link:'https://adventofcode.com/', name: 'AdventOfCode.com'}
  },
  { 
    name: 'A Que Tacos',
    description: `Developed a custom online ordering platform using Next.js with server-side rendering (SSR) for improved performance and SEO. \n
                  Integrated Clover API to create and manage customer orders, enabling seamless online checkout and payment processing.\n
                  Utilized TypeScript to ensure code quality and scalability.\n
                  Implemented Google Analytics to monitor user behavior and website traffic, helping the restaurant gain insights into customer engagement.`,
    tools: ['Typescript,', 'NextJS,','Clover API'],
    webLink: { link: 'https://aquetacos.com/', name: 'A Que Tacos'}
  },
  { 
    name: 'Godly Productions',
    description: `Built a dynamic frontend using Next.js and TypeScript to showcase services, artist profiles, and booking information.\n
                  Connected the frontend to a custom MongoDB database via API routes to fetch and display real-time studio data.\n
                  Focused on responsive design and fast load times to ensure a smooth user experience across devices.\n
                  Helped improve the studio's online presence and client engagement by streamlining content updates and bookings.`,
    tools: ['Typescript,', 'NextJS,', 'SQLite'],
    webLink: { link: 'https://godlyproductions.com/', name: 'Godly Productions'}
  },
    { 
    name: 'Godly Productions admin + database',
    description: `Developed a full-stack admin platform that allows studio staff to manage artists, albums, and events through a user-friendly interface. \n
                  Designed and implemented a MongoDB schema using Mongoose, with a scalable backend built on NestJS for secure and structured data handling.
                  Built a responsive frontend with Next.js and TypeScript to enable real-time content updates without needing developer support.
                  Continuously improved the system based on client feedback, adding new features and enhancing usability to support evolving studio needs.`,
    tools: ['Typescript,', 'NextJS,', 'MongoDB', 'Mongoose', 'NestJS'],
    imgLink: 'projectImages/godlyDatabase.png',
    webLink: { link: 'https://github.com/Hector-bit/godlyAdmin', name: 'Godly Productions Admin Github'},
    githubLink: { link: 'https://github.com/Hector-bit/godlynestdb', name: 'Godly Productions Database Github'},
  }
]

const educationData:any[] = [
  { 
    name: 'Pixel Vault',
    date: 'May 2022 - December 2024',
    role: 'Front-end engineer',
    description: "At Pixelvault, I was responsible for transforming Figma designs into fully functional, pixel-perfect ReactJS implementations. I played a key role in troubleshooting and debugging issues that arose when switching frameworks or integrating new packages, ensuring smooth transitions and maintaining code quality. Additionally, I collaborated closely with backend engineers and QA teams to validate features and ensure sites were optimized and deployment-ready. My time at Pixelvault strengthened my ability to work across teams, adapt to evolving tech stacks, and build seamless, high-performance web experiences.",
    tools: ['ReactJS,', 'NextJS,', 'Framer-motion,', 'Tailwind'],
    // githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  }
]

const headerStyle = 'text-2xl sm:text-5xl'
const textStyle = 'text-sm sm:text-base'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-12 my-12 sm:my-20 font-geist mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row grow">
        <div className="flex flex-col font-rubik w-full md:w-1/2">
          <div className={`${headerStyle}`}>HECTOR MARTINEZ</div>
          <div className="mt-2">Front-end Engineer</div>
          <div className="font-geist max-w-full md:max-w-xs mt-4 hidden md:block">I create visually flawless, accessible digital experiences for the web.</div>
        </div>
        <div className={`flex flex-col w-full md:w-1/2 gap-y-4 ${textStyle} mt-6 md:mt-0`}>
          <div className="">{`I'm a developer with a passion for crafting accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design with robust engineering. I thrive at the intersection of design and development, creating experiences that are not only visually polished but also optimized for performance and usability.`}</div>

          <div className="">{`Throughout my career, I've developed software across diverse environments from small businesses and non-profits to startups. A few years ago, I started learning on my own as well through other students from my coding bootcamp.`}</div>

          <div className="">{`In my spare time, I'm usually reading, hanging out with my friends, or running around in VR games looking for some inspiriration on what kind of games I want to make.`}</div>
        </div>
      </div>
      
      <div className="flex flex-col mb-12 mt-16">
        <div className={`${headerStyle} font-rubik mb-4 sm:mb-8`}>EXPERIENCE</div>
        <div className="grid grid-cols-1 gap-8">
          {experienceData.map(experience => {
            return (
              <ExperienceCard
                key={`${experience.name}-experience`}
                name={experience.name} 
                date={experience.date}
                role={experience.role}
                description={experience.description} 
                tools={experience.tools} 
                githubLink={experience.githubLink}
              />
            )
          })}
        </div>
      </div>
      <div className="flex flex-col mb-8 mt-16">
        <div className={`${headerStyle} font-rubik mb-4 sm:mb-8`}>PROJECTS</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectListData.map(project => {
            return (
              <ProjectCard
                key={`${project.name}-project`}
                name={project.name} 
                description={project.description} 
                tools={project.tools} 
                githubLink={project.githubLink}
                webLink={project.webLink}
                imgLink={project.imgLink}
              />
            )
          })}
        </div>
      </div>
      {/* <div className="flex flex-col mb-8 mt-16">
        <div className={`${headerStyle} font-rubik mb-4 sm:mb-8`}>EDUCATION</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map(project => {
            return (
              <ExperienceCard
                key={`${project.name}-project`}
                name={project.name} 
                description={project.description} 
                tools={project.tools} 
                githubLink={project.githubLink}
                webLink={project.webLink}
              />
            )
          })}
        </div>
      </div> */}
    </main>
  );
}
