import Link from "next/link"
import * as motion from "motion/react-client"

const Header = () => {
  return (
    <nav className="flex p-4 justify-between items-center border-b-2 ">
        <Link href="/"><h1 className='uppercase font-extrabold text-xl text-secondaryColor'>helmy <motion.span initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} className=" bg-secondaryColor text-white p-1 inline-block">dev</motion.span></h1></Link>

    </nav>
  )
}

export default Header
