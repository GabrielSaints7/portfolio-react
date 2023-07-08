import React from 'react'
import './about.css'
import ABOUT from '../../assets/me_ok.png'
import {GiNinjaHead} from 'react-icons/gi'
import {GoOrganization} from 'react-icons/go'
import {RiTeamFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5 className='text-light'>Sobre minha atuação em projetos de</h5>
      <h2>Tecnologia, design, marketing e educação</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ABOUT} alt="Gabriel Santos" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiNinjaHead className='about__icon'/>
                <h5>Experiência</h5>
                <small>+2 anos</small>
              </article>
              <article className="about__card">
                <GoOrganization className='about__icon'/>
                <h5>Clientes</h5>
                <small>Dev, Design, Marketing</small>
              </article>
              <article className="about__card">
                <RiTeamFill className='about__icon'/>
                <h5>Projetos</h5>
                <small>+25 projetos</small>
              </article>
            </div>
            <p>
            Sou um desenvolvedor web em constante busca de conhecimentos,  em <code> HTML, CSS, JavaScript, React e Python.</code>, tenho participado de projetos de criação de interfaces responsivas, escrevendo código limpo e resolvendo problemas. <br /> Estou sempre me atualizado com as últimas tendências do setor e possuo habilidades para trabalhar de forma independente e em equipe. <br /> Tenho um forte senso compromisso em entregar projetos de alta qualidade dentro dos prazos estabelecidos. Estou em busca de oportunidades para crescer profissionalmente e poder contribuir com a qualidade do meu trabalho.
            </p>
            <a href="#contact" className="btn btn-primary">Vamos conversar!</a>
          </div>
        </div>
    </section>
  )
}

export default About
