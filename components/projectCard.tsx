import { ProjectCardType } from "@/app/types"
import Link from "next/link"

const headerStyle = 'text-lg sm:text-2xl leading-6'
const textStyle = 'text-xs sm:text-base'

const ProjectCard = ({ name, description, tools, githubLink }: ProjectCardType) => {
  return (
    <div 
      className={`flex flex-col bg-primary rounded-xl p-2 sm:p-6 border-2 border-primary hover:border-white pop-out-card ${textStyle}`}
    >
      <div className={` ${headerStyle} font-rubik text-2xl sm:mb-4`}>{name}</div>
      <div className="mb-4">{description}</div>
      <div className="text-md">
        <span className="text-md font-rubik">Tools:</span>
        {tools?.map((tool:any) => {
          return (
            <span key={`${tool}-tool`} className="mr-2">
              {tool}
              {}
            </span>
          )
        })}
      
      </div>
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