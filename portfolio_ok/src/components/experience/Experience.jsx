import React from 'react'
import './experience.css'

import { BsGithub, BsPatchCheckFill, BsFiletypeJson } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiMongodb, SiPhp } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { FaPython, FaNodeJs } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-light'>Principais habilidades</h5>
      <h2>Experiência em projetos</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ------------------- FINAL DO FRONTEND ------------------------- */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFiletypeJson className='experience__details-icon' />
              <div>
                <h4>JSON</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Boas Práticas</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Metodogias Ágeis</h4>
                <h5>Scrum e XP</h5>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsGithub className='experience__details-icon' />
              <div>
                <h4>Git e Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Acessibilidade e Usabilidade</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Testes unitários</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Consumo de APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Arquitetura Limpa</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* <div className="experience__mkt-edu">
          <h3>Design Gráfico</h3>
          <div className="experience__content">
            <article className="experience__details" title='Edição e tratamento'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Photoshop</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Illustrator</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Adobe XD</h5>
              </div>
              <progress value="95" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Corel Drawn</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Logo/brands</h5>
              </div>
              <progress value="30" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Social Media</h5>
              </div>
              <progress value="30" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Adobe Premier</h5>
              </div>
              <progress value="30" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Adobe After Effects</h5>
              </div>
              <progress value="30" max="100"></progress>
            </article>

          </div>
        </div>
        <div className="experience__title-ti destaque">
          <h3>Front-end Dev.</h3>
          <div className="experience__content">
            <article className="experience__details" title='Web Semântica, XML, Web Standards'>
              <div>
                <AiFillHtml5 className='experience__details-icon' />
                <h5>HTML5</h5>
              </div>
              <progress value="90" max="100">90%</progress>
            </article>
            <article className="experience__details" title='Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias'>
              <div>
                <DiCss3 className='experience__details-icon' />
                <h5>CSS</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details" title='DOM, APIs, JSON'>
              <div>
                <SiJavascript className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>JavaScript</h5>
              </div>
              <progress value="30" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <FaReact className='experience__details-icon' />
                <h5>React</h5>
              </div>
              <progress value="35" max="100"></progress>
            </article>
            <article className="experience__details" title='Woocommerce, LMS, Customizações, Elementor, Temas e Plugins'>
              <div>
                <SiChakraui className='experience__details-icon' />
                <h5>Chakra UI</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details" title='Wordpress, Moodle, Blackboard, Talent LMS, LearnDash'>
              <div>
                <SiBulma className='experience__details-icon' />
                <h5>Bulma</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <FaPython className='experience__details-icon' />
                <h5>Python</h5>
              </div>
              <progress value="20" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsGithub className='experience__details-icon' />
                <h5>Github</h5>
              </div>
              <progress value="35" max="100"></progress>
            </article>


          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Marketing</h3>
          <div className="experience__content">
            <article className="experience__details" title=''>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Planejamento</h5>
              </div>
              <progress value="90" max="100">90%</progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Tráfego (CPC)</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>Funis</h5>
              </div>
              <progress value="50" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Lançamentos</h5>
              </div>
              <progress value="50" max="100"></progress>
            </article>

            <article className="experience__details" title='SEO técnico, local, otimizações'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>SEO</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Analytics</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
          </div> */}
    </section>
  )
}

export default Experience