import React from 'react'
import './certificacoes.css'
import IMGs from '../../assets/portfolio6.jpg'


const Certificacoes = () => {

  let certificados = [
    {
      image: IMGs,
      titulo: 'Certificado',
      acesso: 'https://www.google.com'
    },
    {
      image: IMGs,
      titulo: 'Certificado2',
      acesso: 'https://www.google.com'
    },
    {
      image: IMGs,
      titulo: 'Certificado3',
      acesso: 'https://www.google.com'
    },
    {
      image: IMGs,
      titulo: 'Certificado4',
      acesso: 'https://www.google.com'
    },
  ]


  return (
    <section id="certificacoes">
      <h5>Comprovação de conhecimentos</h5>
      <h2>Certificações</h2>

      <div className="container certificacoes__container">
        {certificados.map(({image, titulo,acesso}) => {
          return (
            <article className="certificacoes__item">
              <div className="certificacoes__item-img">
                <img src={image} alt="" />
              </div>
              <h3>{titulo}</h3>
              <div className="certificacoes-cta">
                <a href={acesso} className="btn btn-primary">acessar</a>
              </div>
            </article>
          )

        })}


      </div>
    </section>
  );



}

export default Certificacoes