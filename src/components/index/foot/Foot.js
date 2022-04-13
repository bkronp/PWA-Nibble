import React, { useEffect } from 'react'
import styled from '../foot/pie.module.css'
import Aos from 'aos'

const PiePag = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <div className={styled.container}>
      <div className={styled.caja}>
        <div className={styled.contenedor}>
          <img src='/Image/banner.png'/>
          <div className={styled.texto}>
            <h1 data-aos="fade-left">Somos una empresa empecializada en la intalació de redes informáticas y mantenimiento preventivo
              y correctivo de computo, asi como el equipamiento tecnológico de tu empresa, negocio o inmueble..</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PiePag