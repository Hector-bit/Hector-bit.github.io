import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="mx-auto max-w-screen-xl h-28 flex items-center justify-end gap-x-4 bg-foreground rounded-b-3xl px-4 sm:px-12 boxShadow">
      <div className="brightness-[80%] hover:brightness-[100%] duration-300">
        <Link href={"https://github.com/Hector-bit"}>
          <img src={"./icons/github.svg"} alt={"github"} width={50} height={50}/>
        </Link>
      </div>
      <div className="brightness-[80%] hover:brightness-[100%] duration-300">
        <Link href={"https://www.linkedin.com/in/m-hector/"}>
          <img src={"./icons/linkedin.svg"} alt={"github"} width={50} height={50}/>
        </Link>
      </div>
    </div>
  )
}

export default Header;