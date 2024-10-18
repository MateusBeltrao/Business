import React, { useState } from 'react';
import './Emailbox.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';

const Emailbox = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const subject = 'Interesse em financiamento';
    const body = `Olá, gostaria de me inscrever para o financiamento. Meu e-mail é: ${email}`;
    window.location.href = `mailto:mateusbeltrao2019@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div 
      initial={{
        width: ".5rem",
        borderRadius: "100%"
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: 'easeOut',
          duration: 1,
        },
      }}
      className='emailBox'
    >
      <motion.div
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
      >
        <LuMail size={30} color='grey' />
      </motion.div>

      <motion.input 
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        type="email" 
        placeholder='Enter Email'
        value={email}
        onChange={handleEmailChange} // Atualiza o estado do email
      />

      <motion.div 
        className='getFunded'
        onClick={handleSubmit} // Chama a função ao clicar
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
      >
        Get Funded
      </motion.div>
    </motion.div>
  );
}

export default Emailbox;
