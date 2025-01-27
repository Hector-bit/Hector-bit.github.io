import Link from "next/link"

const headerStyle = 'text-lg sm:text-2xl leading-4'
const textStyle = 'text-xs sm:text-base'

const ExperienceCard = ({ name, description, date, role, tools, githubLink }: any) => {
  return (
    <div 
      className={`flex flex-col bg-primary rounded-xl p-2 sm:p-6 border-2 border-primary hover:border-white pop-out-card ${textStyle}`}
    >
      <div className={` ${headerStyle} font-rubik `}>{name}</div>
      <div className=""><span className="font-rubik">Date:</span>{date}</div>
      <div className="mb-4"><span className="font-rubik">Role:</span>{role}</div>
      <div className="mb-4">{description}</div>
      <div className="">
        <span className="font-rubik">Tools:</span>
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
          <span className="font-rubik">Github:</span> 
          <Link href={githubLink}>
            <span className="underline-offset-1">{name}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard;