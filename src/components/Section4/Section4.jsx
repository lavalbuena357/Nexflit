import React from 'react';
import style from './Section4.module.css';
import tvImage from '../../utils/images/tv-section4.png';
import videoHistory from '../../utils/video/card-history-section4.m4v';


function Section4() {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        <div className={style.card_text}>
          <h1>Disfruta donde quieras.</h1>
          <h2>Películas y series ilimitadas en tu teléfono, tablet, computadora y TV sin costo extra.</h2>
        </div>
        <div className={style.cardimg_container}>
          <div className={style.animation_container}>
            <img src={tvImage} alt="imagen tv en png" />
            <div className={style.video_container}>
              <video className={style.video} autoPlay playsInline muted loop>
                <source src={videoHistory} type='video/mp4'/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4;