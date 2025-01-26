import { ProjectCardType } from "@/app/types"
import { motion } from "framer-motion"
import Link from "next/link"

const ProjectCard = ({ name, description, tools, githubLink }: ProjectCardType) => {
  return (
    <div 
      className="flex flex-col bg-primary rounded-xl p-6 border-2 border-primary hover:border-white pop-out-card"
    >
      <div className="font-rubik text-2xl mb-4">{name}</div>
      <div className="mb-4">{description}</div>
      {tools.map((tool) => {
        return <div key={`${tool}-tool`}><span className="text-md font-rubik">Tools:</span>{tool}</div>
      })}
      {githubLink && (
        <div>
          <span className="text-md font-rubik">Github:</span> 
          <Link href={githubLink}>
            <span className="underline-offset-1">{name}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ProjectCard;