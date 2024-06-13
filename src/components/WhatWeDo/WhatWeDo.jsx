"use client"

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { containerVariants, desVariants, tagVaraints, titleVaraints } from '@/src/utils/animation'

const WhatWeDo = () => {
    return (
        <div className='wwd-wrapper'>
            <div className="container">
                <div className="wwd-container">
                    <div className="wwd-head">
                        <motion.span 
                            className='tag'
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVaraints}
                        >What we do</motion.span>
                        <motion.span 
                            className='title'
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVaraints}>
                                {" "}
                                Empowering Founders With Non Dilutive Capital And Execution Expertise
                        </motion.span>
                        <motion.span 
                            className='des'
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                            >Here is how we can evaluate</motion.span>
                    </div>


                    <div className="wwd-blocks">
                        <div className="wwd-block">
                            <motion.span 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={titleVaraints}
                                className='sec-title'>Blue Advances</motion.span>
                            <motion.span
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={desVariants}
                                className='text'>
                                Fund recurring growth expenses e.g. customer acquisition, inventory
                            </motion.span>

                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((feature, i) => (
                                        <motion.div
                                        initial="offscreen"
                                        whileInView={"onscreen"}
                                        variants={containerVariants((i+1)*0.1)}
                                        className='block-feature' key={i}>
                                            <Image
                                                src={feature.icon}
                                                alt='feature'
                                                width={60}
                                                height={60}
                                            >
                                            </Image>
                                            <span>{feature.title}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='wwd-block'>
                            <motion.span 
                                className='sec-title'
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={titleVaraints}>Blue Seed</motion.span>
                            <motion.span 
                            className='text'
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}>
                                Fund one-offs to scale e.g. product, hiring
                            </motion.span>

                            <div className="block-features">
                                {
                                    features.slice(3, 6).map((feature, i) => (
                                        <motion.div
                                        initial="offscreen"
                                        whileInView={"onscreen"}
                                        variants={containerVariants((i+1)*0.1)}
                                        className='block-feature' key={i}>
                                            <Image
                                                src={feature.icon}
                                                alt='feature'
                                                width={60}
                                                height={60}
                                            >
                                            </Image>
                                            <span>{feature.title}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={containerVariants(0.3)}
                        className="wwd-support">
                        <div>
                            <span className='sec-title'>Blue Growth Support</span>
                            <span className='des'>
                                Data Insights and full stack expertise to supercharge growth
                            </span>
                        </div>
                        <div>
                            <span className='text'>
                                Actionable data insights by connecting revenue, marketing and social media platforms
                            </span>
                            <span className='text'>
                                On demand execution expertise at cost or revenue share across proposition design, engineering, marketing analytics, partnerships, brand, intellectual property, market expansion, talent management
                            </span>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo