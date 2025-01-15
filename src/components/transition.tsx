import React from 'react'
import {motion} from 'motion/react'


const AnimatedTransition = () => {
    return (    
        <>
        <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}} className='fadeIn' transition={{duration: 1}}/>
        <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:1}} className='fadeOut' transition={{duration: 1}}/>
        </>
    )
  }
export default AnimatedTransition