import React from 'react'
// import Typical from 'react-typical'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_ok.png'
import SocialIcons from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Olá, meu nome é </h5>
        <h1 className='text-light'>Gabriel Santos</h1>
        <h4 className='text-lightgray'> Desenvolvedor Jr Front-End</h4>
        {" "}
        {/* <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Criação, Dev. e Hospedagem de Sites 🌐",
              1000,
              "Front-End Dev. 💻",
              1000,
              "Projetos, UX|UI Design 🎨",
              1000,
              "EAD & Design Instrucional 👨‍🏫",
              1000,
              "SEO & Otimização de Wordpress 🔎",
              1000,
              "Estratégias Digitais 🎯",
              1000,
              "Mountainbike 🚴‍♂️",
              1000,
              ]}
            />
        </h3> */}
        {/* <h4 className="text-light">
          Projetos de tecnologia, marketing e educação
        </h4> */}
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="Gabriel Santos" />
        </div>
        <a href="#contact" className='scroll__down'>
          Para Cima!
        </a>
      </div>
    </header>
  )
}