import React from 'react'
import './Emailbox.css'
import {LuMail} from 'react-icons/lu'
import { motion } from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'

const Emailbox = () => {
  return (
    <motion.div 
     initial={{
        width: ".5rem",
        borderRadius: "100%"
     }}
     whileInView={{
      width: "70%",
      borderRadius: "999px",
      transition: {
        type: 'easeOut',
        duration: 1,
      },
     }}
     className='emailBox'>

        <motion.div
          variants={containerVariants(0.7)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
        >
            <LuMail size={30} color='grey'></LuMail>
        </motion.div>

        <motion.input 
          variants={containerVariants(0.6)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
          type="email" 
          placeholder='Enter Email'
        />

        <motion.div 
          className='getFunded'
          variants={containerVariants(0.9)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
         >
            Get Funded
        </motion.div>
    </motion.div>
  )
}

export default Emailbox