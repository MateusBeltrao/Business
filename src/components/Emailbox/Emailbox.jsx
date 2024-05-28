import React from 'react'
import './Emailbox.css'
import {LuMail} from 'react-icons/lu'

const Emailbox = () => {
  return (
    <div className='emailBox'>

        <div>
            <LuMail size={30} color='grey'></LuMail>
        </div>

        <input type="email" 
        placeholder='Enter Email'
        />

        <div className='getFunded'>
            Get Funded
        </div>
    </div>
  )
}

export default Emailbox