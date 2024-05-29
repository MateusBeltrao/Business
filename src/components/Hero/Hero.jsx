import React from 'react'
import './Hero.css'
import Emailbox from '../Emailbox/Emailbox'
import { HeroData } from '@/src/utils/data'
const Hero = () => {
  return(
    <div className='h-wrapper'>
        <div className='container'>
            <div className='h-container'>
                <div className='h-left'>
                    <div className='image-row'>
                        {
                            HeroData.slice(3, 6).map((person, i) => (
                                <div className='person-pill' key={i}>
                                    <div className='person-pill-bg'>
                                        <img src={person.src} alt={person.src}></img>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='image-row'>
                        {
                            HeroData.slice(0, 3).map((person, i) => (
                                <div className='person-pill' key={i}>
                                    <div className='person-pill-bg'>
                                        <img src={person.src} alt={person.src}></img>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='h-right'>
                    <div className='h-title'>
                        <span>REDEFINE HOW</span>
                        <span>YOU GROW YOUR</span>
                        <span>DIGITAL BUSINESS</span>
                    </div>

                    <div className='h-des'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Dolorum hic
                    </div>

                    <Emailbox></Emailbox>
                </div>

                
            </div>
        </div>
    </div>
  )
}
export default Hero