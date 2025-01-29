import { ProjectCardType } from "@/app/types"
import Link from "next/link"

const headerStyle = 'text-lg sm:text-2xl leading-4 mb-2'
const textStyle = 'text-xs sm:text-base'

const ProjectCard = ({ name, description, tools, githubLink, webLink }: ProjectCardType) => {
  return (
    <div 
      className={`flex flex-col bg-primary rounded-xl p-2 sm:p-6 border-2 border-foreground focus:border-white ${textStyle}`}
    >
      <div className={` ${headerStyle} font-rubik text-2xl sm:mb-4`}>{name}</div>
      <div className="mb-4">{description}</div>

      <div className="flex flex-col gap-y-2 ">
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
        <div className="flex flex-row gap-4">
          {githubLink && (
            // <div>
            //   <span className="text-md font-rubik">Github:</span> 
            //   <Link href={githubLink.link}>
            //     <span>{githubLink.name}</span>
            //   </Link>
            // </div>
                      <div>
                      {/* <span className="text-md font-rubik">Website:</span>  */}
                      <Link href={githubLink.link}>
                        <button className="btn">
                          {githubLink.name}
                        </button>
                        {/* <span className="underline">{webLink.name}</span> */}
                      </Link>
                    </div>
          )}
          {webLink && (
            <div>
              {/* <span className="text-md font-rubik">Website:</span>  */}
              <Link href={webLink.link}>
                <button className="btn">
                  {webLink.name}
                </button>
                {/* <span className="underline">{webLink.name}</span> */}
              </Link>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default ProjectCard;