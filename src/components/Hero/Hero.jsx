import React from 'react'
import './Hero.css'
import Emailbox from '../Emailbox/Emailbox'
const Hero = () => {
  return(
    <div className='h-wrapper'>
        <div className='container'>
            <div className='h-container'>
                <div className='h-left'>Left side</div>

                <div className='h-right'>
                    <div className='h-title'>
                        <span>Redefine How</span>
                        <span>You Grow Your</span>
                        <span>Digital Business</span>
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