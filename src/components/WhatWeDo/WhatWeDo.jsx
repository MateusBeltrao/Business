import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'

const WhatWeDo = () => {
    return (
        <div className='wwd-wrapper'>
            <div className="container">
                <div className="wwd-container">
                    <div className="wwd-head">
                        <span className='tag'>What we do</span>
                        <span className='title'>
                            {" "}
                            Empowering Founders With Non Dilutive Capital And Execution Expertise
                        </span>
                        <span className='des'>Here is how we can evaluate</span>
                    </div>


                    <div className="wwd-blocks">
                        <div className="wwd-block">
                            <span className='sec-title'>Blue Advances</span>
                            <span className='text'>
                                Fund recurring growth expenses e.g. customer acquisition, inventory
                            </span>

                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((feature, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image
                                                src={feature.icon}
                                                alt='feature'
                                                width={60}
                                                height={60}
                                            >
                                            </Image>
                                            <span>{feature.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='wwd-block'>
                            <span className='sec-title'>Blue Seed</span>
                            <span className='text'>
                                Fund one-offs to scale e.g. product, hiring
                            </span>

                            <div className="block-features">
                                {
                                    features.slice(3, 6).map((feature, i) => (
                                        <div className='block-feature' key={i}>
                                            <Image
                                                src={feature.icon}
                                                alt='feature'
                                                width={60}
                                                height={60}
                                            >
                                            </Image>
                                            <span>{feature.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="wwd-support">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo