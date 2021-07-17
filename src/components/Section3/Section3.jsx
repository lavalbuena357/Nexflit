import React from 'react';
import style from './Section3.module.css';
import MobileSection3 from '../../utils/images/mobile-section3.jpg';

function Section3() {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        <div className={style.image_container}>
          <div className={style.image}>
            <img src={MobileSection3} alt="imagen del movil" />
          </div>
        </div>
        <div className={style.text_container}>
          <h1>Descarga tus series para verlas offline.</h1>
          <h2>Guarda tu contenido favorito y ten siempre algo para ver.</h2>
        </div>
      </div>
    </div>
  )
}

export default Section3;