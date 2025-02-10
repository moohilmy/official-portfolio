import * as motion from "motion/react-client"
import style from './style.module.css'

const Landing = () => {
  return (
    <div className="h-[85vh] relative" >
       <motion.div className={style.landingBoxGlass} initial={{ opacity: 0}} animate={{ opacity: 1}}>
        <h1 className={style.name}>Hallo, I am <span>Mohamed Helmy</span></h1>
        <p className={style.description}>A Front-end Developer passionate about delivering fast, responsive, and engaging digital experiences.</p>
      </motion.div> 
    </div>
  )
}

export default Landing
