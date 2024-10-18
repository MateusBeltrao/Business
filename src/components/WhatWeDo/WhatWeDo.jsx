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
                        >O Que Fazemos</motion.span>
                        <motion.span 
                            className='title'
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVaraints}>
                                {" "}
                                Capacitando Empreendedores Com Capital Não Dilutivo E Expertise Em Execução
                        </motion.span>
                        <motion.span 
                            className='des'
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                            >Veja como podemos avaliar</motion.span>
                    </div>
    
                    <div className="wwd-blocks">
                        <div className="wwd-block">
                            <motion.span 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={titleVaraints}
                                className='sec-title'>Avanços Financeiros</motion.span>
                            <motion.span
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={desVariants}
                                className='text'>
                                Financiar despesas de crescimento recorrente, como aquisição de clientes e estoque.
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
                                Financiar iniciativas únicas para escalar, como produtos e contratações.
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
                            <span className='sec-title'>Suporte ao Crescimento</span>
                            <span className='des'>
                                Insights de Dados e expertise completa para impulsionar o crescimento.
                            </span>
                        </div>
                        <div>
                            <span className='text'>
                                Insights de dados acionáveis conectando receita, marketing e plataformas de mídias sociais.
                            </span>
                            <span className='text'>
                                Expertise em execução sob demanda, a custo ou compartilhamento de receita em design de propostas, engenharia, análise de marketing, parcerias, marca, propriedade intelectual, expansão de mercado e gestão de talentos.
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
    
}

export default WhatWeDo