import Image from "next/image";
import ProjectCard from "@/components/projectCard";
import { ProjectCardType } from "./types";

const projectListData:ProjectCardType[] = [
  { 
    name: 'adventOfCode',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & impleneting new algorithms when my brute force solutions wouldn't suffice.",
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

const experienceData:any[] = [
  { 
    name: 'adventOfCode',
    description: "Advent of Code (AoC) is an annual online event that runs from December 1st to December 25th each year. It features a series of daily programming puzzles that get more difficult every day & participants race to make it to the global leaderboard. I've participated in these challenges for various years to varying degrees and I loved learning about & impleneting new algorithms when my brute force solutions wouldn't suffice.",
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
    <div className="flex flex-col min-h-screen px-36 mt-12">
      <main className="flex flex-col grow gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row grow">
          <div className="flex flex-col font-rubik w-1/2">
            <div className="text-5xl">HECTOR MARTINEZ</div>
            <div className="mt-2">Front-end Engineer</div>
            <div className="font-geist max-w-xs mt-4">I build accessible, pixel-perfect digital experiences for the web.</div>
          </div>
          <div className="flex flex-col w-1/2 gap-y-4">
            <div>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</div>

            <div>Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.</div>

            <div>In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.</div>

            <div>In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.</div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="text-5xl font-rubik mb-8">EXPERIENCE</div>
          <div className="grid grid-cols-3 gap-8">
            {experienceData.map(project => {
              return (
                <ProjectCard
                  key={`${project.name}-experience`}
                  name={project.name} 
                  description={project.description} 
                  tools={project.tools} 
                  githubLink={project.githubLink}
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
      <footer className="row-start-3 mt-16 flex gap-6 flex-wrap items-center justify-center bottom-0">
        Email: hectormartinez.2978@gmail.com
      </footer>
    </div>
  );
}
