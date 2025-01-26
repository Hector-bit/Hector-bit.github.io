import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import ExperienceCard from "@/components/experienceCard";
import { ProjectCardType } from "./types";

const experienceData:any[] = [
  { 
    name: 'Pixel Vault',
    role: 'Front-end engineer',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & impleneting new algorithms when my brute force solutions wouldn't suffice.",
    tools: ['python'],
    githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  },
  { 
    name: 'Bellingham Makerspace',
    role: 'Voluteer web developer',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & impleneting new algorithms when my brute force solutions wouldn't suffice.",
    tools: ['python'],
    githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  }
]

const projectListData:ProjectCardType[] = [
  { 
    name: 'adventOfCode',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & implementing new algorithms when my brute force solutions wouldn't suffice.",
    tools: ['python'],
    githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  },
  { 
    name: 'adventOfCode2',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & impleneting new algorithms when my brute force solutions wouldn't suffice.",
    tools: ['python'],
    githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  },
  { 
    name: 'adventOfCode3',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & impleneting new algorithms when my brute force solutions wouldn't suffice.",
    tools: ['python'],
    githubLink: 'https://github.com/Hector-bit/adventOfCode/tree/main/year2020'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-36 mt-20 font-geist">
      <main className="flex flex-col grow gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row grow">
          <div className="flex flex-col font-rubik w-1/2">
            <div className="text-5xl">HECTOR MARTINEZ</div>
            <div className="mt-2">Front-end Engineer</div>
            <div className="font-geist max-w-xs mt-4">I create visually flawless, accessible digital experiences for the web.</div>
          </div>
          <div className="flex flex-col w-1/2 gap-y-4">
            <div className="">I'm a developer with a passion for crafting accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design with robust engineering. I thrive at the intersection of design and development, creating experiences that are not only visually polished but also optimized for performance and usability.</div>

            <div className="">Throughout my career, I’ve developed software across diverse environments from small businesses and non-profits to startups. A few years ago, I started learning on my own as well through other students from my coding bootcamp.</div>

            <div className="">In my spare time, I’m usually reading, reading, hanging out with my friends, or running in VR games looking for some inspiriration on what kind of games I want to make.</div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="text-5xl font-rubik mb-8">EXPERIENCE</div>
          <div className="grid grid-cols-1 gap-8">
            {experienceData.map(experience => {
              return (
                <ExperienceCard
                  key={`${experience.name}-experience`}
                  name={experience.name} 
                  role={experience.role}
                  description={experience.description} 
                  tools={experience.tools} 
                  githubLink={experience.githubLink}
                />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-5xl font-rubik mb-8">PROJECTS</div>
          <div className="grid grid-cols-2 gap-8">
            {projectListData.map(project => {
              return (
                <ProjectCard
                  key={`${project.name}-project`}
                  name={project.name} 
                  description={project.description} 
                  tools={project.tools} 
                  githubLink={project.githubLink}
                />
              )
            })}
          </div>
        </div>
      </main>
      <footer className="row-start-3 mt-20 mb-12 flex gap-6 flex-wrap items-center justify-center bottom-0">
        Email: hectormartinez.2978@gmail.com
      </footer>
    </div>
  );
}
