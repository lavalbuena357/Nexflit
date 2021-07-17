import React from 'react';
import style from './Section5.module.css';
import imgSection5 from '../../utils/images/imagen-section5.png';

function Section5() {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        <div className={style.image_container}>
          <div className={style.image}>
            <img src={imgSection5} alt="imagen niños" />
          </div>
        </div>
        <div className={style.text_container}>
          <h1>Crea perfiles para niños.</h1>
          <h2>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</h2>
        </div>
      </div>
    </div>
  )
}

export default Section5;