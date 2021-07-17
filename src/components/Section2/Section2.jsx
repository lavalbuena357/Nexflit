import React from 'react';
import style from './Section2.module.css';
import tvImage from '../../utils/images/tv.png';
import videoHistory from '../../utils/video/card-history.m4v';

function Section2() {
  return (
    <div className={style.container}>
      <div className={style.card_container}>
        <div className={style.card_text}>
          <h1>Disfruta en tu TV.</h1>
          <h2>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</h2>
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

export default Section2;