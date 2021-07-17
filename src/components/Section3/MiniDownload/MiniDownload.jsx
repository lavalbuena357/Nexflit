import React from 'react';
import style from './MiniDownload.module.css';
import BoxShot from '../../../utils/images/boxshot-section3.png'
import loading from '../../../utils/images/anim-section3.gif'

function MiniDownload() {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <img src={BoxShot} alt="" />
      </div>
      <div className={style.text}>
        <div className={style.text0}>Stranger Things</div>
          <div className={style.text1}>Descargando...</div>
        </div>
        <div className={style.loading}>
          <img src={loading} alt="" />
        </div>
    </div>
  )
}

export default MiniDownload;