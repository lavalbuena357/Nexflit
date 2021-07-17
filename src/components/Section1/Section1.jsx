import React from 'react';
import style from './Section1.module.css';
import Header from './Header/Header.jsx';
import Search from './Search/Search.jsx';

function Section1() {
  return (
    <div className={style.container}>
      <div className={style.gradient}>
        <Header />
        <div className={style.text_home}>
          <h2>Películas y series ilimitadas y mucho más.</h2>
          <p>Disfruta donde quieras. Cancela cuando quieras.</p>
          <small>¿Quieres ver Nexflit ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Nexflit.</small>
        </div>
        <Search />
      </div>
    </div>
  )
}

export default Section1;