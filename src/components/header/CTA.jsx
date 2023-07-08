import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
        <a href="./cv.pdf" className="btn" download='gabriel.pdf'>
            Curriculo 
        </a>

        <a href="#contact" className="btn btn-primary" target="_blank" rel="noreferrer">
          Contato
        </a>
    </div>
  )
}

export default CTA
