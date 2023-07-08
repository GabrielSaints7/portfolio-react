import React from 'react'
import './certificacoes.css'
import IMGs from '../../assets/portfolio6.jpg'


const Certificacoes = () => {
  return (
    <section id="certificacoes">
      <h5>Comprovação de conhecimentos</h5>
      <h2>Certificações</h2>

      <div className="container certificacoes__container">
        <article className="certificacoes__item">
          <div className="certificacoes__item-img">
            <img src={IMGs} alt="" />
          </div>
          <h3>Titulo do certificado</h3>
          <div className="certificacoes-cta">
            <a href="www.google.com" className="btn btn-primary">acessar</a>
          </div>
        </article>
        <article className="certificacoes__item">
          <div className="certificacoes__item-img">
            <img src={IMGs} alt="" />
          </div>
          <h3>Titulo do certificado</h3>
          <div className="certificacoes-cta">
            <a href="www.google.com" className="btn btn-primary">acessar</a>
          </div>
        </article>
        <article className="certificacoes__item">
          <div className="certificacoes__item-img">
            <img src={IMGs} alt="" />
          </div>
          <h3>Titulo do certificado</h3>
          <div className="certificacoes-cta">
            <a href="www.google.com" className="btn btn-primary">acessar</a>
          </div>
        </article>
        <article className="certificacoes__item">
          <div className="certificacoes__item-img">
            <img src={IMGs} alt="" />
          </div>
          <h3>Titulo do certificado</h3>
          <div className="certificacoes-cta">
            <a href="www.google.com" className="btn btn-primary">acessar</a>
          </div>
        </article>
      </div>
    </section>
  );



}

export default Certificacoes