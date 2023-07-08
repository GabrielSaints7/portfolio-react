import React, {useRef} from 'react'
import './contact.css'

import { HiOutlineMail } from 'react-icons/hi'
import { MdWhatsapp } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5i04y4d', 'template_pvvs66i', form.current, 'WxSMRtijDlUQtpdX6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     e.target.reset(); 
  };

  return (
    <section id='contatos'>
      <h5>Saiba um pouco mais</h5>
      <h2>Contatos</h2>
      <div className="container contatos__container">
        <div className="contatos__options">
          <article className="contatos__option">
            <HiOutlineMail className='contatos__option-icon' />
            <h3>Email</h3>
            <h5>developergabrielsaints@gmail.com</h5>
            <a href="mailto:developergabrielsaints@gmail.com">Envie uma mensagem</a>
          </article>
          <article className="contatos__option">
            <MdWhatsapp className='contatos__option-icon' />
            <h3>WhatsApp</h3>
            <h5>Gabriel Santos</h5>
            <a href="https://api.whatsapp.com/send?phone=5592993998817&text=Ol%C3%A1%20Gabriel%20Santos,%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20portfolio..." rel='noreferrer' target='_blank'>Envie uma mensagem</a>
          </article>
          <article className="contatos__option">
            <BsLinkedin className='contatos__option-icon' />
            <h3>Linkedin</h3>
            <h5>Gabriel Santros</h5>
            <a href="https://www.linkedin.com/in/gabriel-saints/">Envie uma mensagem</a>
          </article>

        </div>
        {/* FINAL DO CONTATO OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" name="nome" placeholder='Seu nome' required />
          <input type="email" name="email" placeholder='Seu email' required />
          <textarea name="mensagem" rows="10" placeholder='Sua mensagem aqui' required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact