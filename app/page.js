"use client"

import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/components/OurDiff/OurDiff';
import {motion, useAnimation} from 'framer-motion'
import HotItWork from '@/src/components/howItWorks/HotItWork';
import Footer from '@/src/components/Footer/Footer';
export default function Home() {
  const controls = useAnimation()
  return (
    <motion.div className="app" animate={controls}>
      <Navbar></Navbar>
      <Hero></Hero>
      <BrandingVideo></BrandingVideo>
      <WhatWeDo></WhatWeDo>


      <motion.div
        onViewportEnter={() => controls.start({
          backgroundColor: "var(--secondary-color)"
          })
        }
        onViewportLeave={() => 
          controls.start({
          backgroundColor: "white"
          })
        }
        viewport={{amount: 0.4}}
      >
        <OurDiff></OurDiff>
      </motion.div>
      <HotItWork></HotItWork>
      <Footer></Footer>
     
    </motion.div>
  );
}
