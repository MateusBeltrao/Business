import React from 'react'
import Emailbox from '../Emailbox/Emailbox'
import './Footer.css'

const Footer = () => {
    return (
        <div className='f-wrapper'>
            <div className='container'>
                <div className='f-container'>
                    <span className='title'>Obtenha Financiamento Hoje!</span>
                    <Emailbox></Emailbox>
    
                    <hr />
                    <div className='f-menu'>
                        <span>Início</span>
                        <span>O que fazemos</span>
                        <span>Como funciona</span>
                        <span>Em quem investimos</span>
                        <span>Depoimentos</span>
                    </div>
    
                    <hr />
    
                    <span className='text'>Feito com ❤️ por ZAINKEEPSCODE</span>
                </div>
            </div>
        </div>
    )
    
}

export default Footer