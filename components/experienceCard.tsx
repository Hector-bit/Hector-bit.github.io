import Link from "next/link"

const ExperienceCard = ({ name, description, role, tools, githubLink }: any) => {
  return (
    <div 
      className="flex flex-col bg-primary rounded-xl p-6 border-2 border-primary hover:border-white pop-out-card"
    >
      <div className="font-rubik text-2xl">{name}</div>
      <div className="text-md mb-4"><span className="text-md font-rubik">Role:</span>{role}</div>
      <div className="mb-4">{description}</div>
      <div className="text-md">
        <span className="text-md font-rubik">Tools:</span>
        {tools?.map((tool:any, index:number) => {
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

export default ExperienceCard;