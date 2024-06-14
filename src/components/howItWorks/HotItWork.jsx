"use client"

import React from 'react'
import './HotItWork.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { tagVaraints, titleVaraints } from '@/src/utils/animation'

const HotItWork = () => {

    const featureVariants = {
        offscreen: {
            scale: 0.5
        },
        onscreen : {
            scale: 1,
            transition: {
                type: "spring",
                duration: 1.5,
            }
        }
    }
  return (
    <div className='how-wrapper'>
        <div className="container">
            <div className="hiw-conatine">
                <div className="hiw-head">
                    <motion.span 
                        variants={tagVaraints}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='tag'>How it works</motion.span>

                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVaraints}
                        className='title'>Unlocking Potential Along The Growth Journey</motion.span>
                </div>

                <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i)=> (
                            <motion.div 
                            className="hiw-feature"
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants}
                            key={i}
                            >
                                <motion.div 
                                    className="detail"
                                    initial={{opacity: 0, x: -100}}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            type: 'easeIn',
                                            duration: 1,
                                            delay: 7
                                        }
                                    }}
                                >
                                        <spna className="des">0{i+1}</spna>
                                        <spna className="sec-title">{feature.title}</spna>
                                        <spna className="text">{feature.des}</spna>
                                </motion.div>

                                <div className="icon">
                                   <Image 
                                    src={feature.icon} 
                                    width={128} 
                                    height={128} 
                                    alt='feature'
                                    style={{translate: "50% 0rem"}}/>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotItWork