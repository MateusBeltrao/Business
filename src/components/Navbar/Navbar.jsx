"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import { transform } from 'framer-motion'
import {RxCross2} from 'react-icons/rx'


const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  return (
    <div className='n-wrapper'>
        <div className="n-container">
            <div className="n-logo">
                <span>ZAINKEEPSCODE</span>
            </div>

            <div className='n-right'>
                <div className="n-menu">
                  <span>What we do</span>
                  <span>How it works</span>
                  <span>Who we invest</span>
                  <span>Testimonials</span>
                </div>
                <div className="fund-button">Get Funded</div>
            </div>
        </div>

        <div className="nm-container">
          <span>ZAINKEEPSCODE</span>

          {
            !mobileMenuOpened ? (
            <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)}></BiMenuAltRight>
            ): (
            <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)}></RxCross2>
          )}

         

          <div className='nm-menu'
            style={{transform: mobileMenuOpened && "translateX(0%)"}}
          >
            <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest</span>
              <span>Testimonials</span>
              <div className='m-funded-button'>Get Funded</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar