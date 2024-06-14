"use client"

import React from 'react'
import './OurDiff.css'
import { features, ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { containerVariants, desVariants, tagVaraints, titleVaraints } from '@/src/utils/animation'

const OurDiff = () => {
  return (
    <div className='od-wrapper'>
        <div className="container">
            <div className="od-conatiner">
                <div className="od-head">
                    <motion.span 
                        className='tag'
                        variants={tagVaraints}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        >Our difference</motion.span>
                    <motion.span 
                       initial="offscreen"
                       whileInView={"onscreen"}
                       variants={titleVaraints}
                        className='title'>Fair Capital, Hassle Free</motion.span>
                    <motion.span 
                        className='text'
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}>Our mission is to level the playing field for early stage growth capital.
                    We provide capital <br></br> that is unbiased, flexible and non dilutive with the execution support to accelerate value creation.</motion.span>
                </div>

                <div className="od-features">
                    {
                        ourDiffFeatures.map((feature, i) => (
                            <motion.div 
                                variants={containerVariants((i + 1) * 0.1)}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                key={i} 
                                className='od-feature'>
                                <Image src={feature.icon} alt="feature" width={128} height={128}></Image>
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff