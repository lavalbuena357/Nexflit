import React, { useState } from 'react';
import style from './Section6.module.css';
import { BsChevronRight } from "react-icons/bs";

function Section6() {
  const[card, setCard] = useState({
    open0: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false
  });

  function open(e) {
    for(let i = 0; i <= 5; i++) {
      if(i === e) {
        setCard({
          [`open${e}`]: !card[`open${e}`]
        });
      }
    }
  }
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1>Preguntas frecuentes</h1>
        <ul className={style.faq_ul}>
          <li className={style.faq_li}>
            <button className={style.question} onClick={e => open(0)}>
              ¿Qué es Nexflit?
              <span className={(card.open0) ? style.openPlus : style.closePlus}>+</span>
            </button>
            <div className={(card.open0) ? style.open : style.close}>
              <span>Nexflit es un servicio de streaming que ofrece una gran 
                variedad de películas, series y documentales premiados en 
                casi cualquier pantalla conectada a internet.<br/><br/>
                Todo lo que quieras ver, sin límites ni comerciales, a un costo 
                muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las 
                semanas se agregan más películas y series!
              </span>
            </div>
          </li>
          <li className={style.faq_li}>
            <button className={style.question} onClick={e => open(1)}>
              ¿Cuánto cuesta Nexflit?
              <span className={(card.open1) ? style.openPlus : style.closePlus}>+</span>
            </button>
            <div className={(card.open1) ? style.open : style.close}>
              <span>Disfruta Nexflit en tu smartphone, tablet, smart TV, laptop o dispositivo 
                de streaming, todo por una tarifa plana mensual. Planes desde $ 16.900 hasta 
                $ 38.900 al mes. Sin costos adicionales ni contratos.
              </span>
            </div>
          </li>
          <li className={style.faq_li}>
            <button className={style.question} onClick={e => open(2)}>
              ¿Dónde puedo ver Nexflit?
              <span className={(card.open2) ? style.openPlus : style.closePlus}>+</span>
            </button>
            <div className={(card.open2) ? style.open : style.close}>
              <span>Ve donde quieras, cuando quieras y en todos los dispositivos que quieras. 
                Inicia sesión en tu cuenta de Nexflit para ver contenido al instante a través 
                de nexflit.com desde tu computadora personal o en cualquier dispositivo con 
                conexión a internet que cuente con la app de Nexflit, como smart TV, smartphones, 
                tablets, reproductores multimedia y consolas de juegos.<br/><br/>
                Además, puedes descargar tus series favoritas con iOS, Android o la app para 
                Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a 
                internet. Lleva Nexflit contigo adonde sea.
              </span>
            </div>
          </li>
          <li className={style.faq_li}>
            <button className={style.question} onClick={e => open(3)}>
              ¿Cómo cancelo?
              <span className={(card.open3) ? style.openPlus : style.closePlus}>+</span>
            </button>
            <div className={(card.open3) ? style.open : style.close}>
              <span>Nexflit es flexible. Sin contratos molestos ni compromisos. Cancela la 
                membresía online con solo dos clics. No hay cargos por cancelación. 
                Empieza y termina cuando quieras.
              </span>
            </div>
          </li>
          <li className={style.faq_li}>
            <button className={style.question} onClick={e => open(4)}>
              ¿Qué puedo ver en Nexflit?
              <span className={(card.open4) ? style.openPlus : style.closePlus}>+</span>
            </button>
            <div className={(card.open4) ? style.open : style.close}>
              <span>Nexflit tiene un amplio catálogo de películas, series, documentales, animes, 
                originales premiados y más. Todo lo que quieras ver, cuando quieras.
              </span>
            </div>
          </li>
          <li className={style.faq_li}>
            <button className={style.question} onClick={e => open(5)}>
              ¿Es bueno Nexflit para los niños?
              <span className={(card.open5) ? style.openPlus : style.closePlus}>+</span>
            </button>
            <div className={(card.open5) ? style.open : style.close}>
              <span>La experiencia de Nexflit para niños está incluida en la membresía para que los 
                padres tengan el control mientras los peques disfrutan series y películas familiares 
                en su propio espacio.<br/><br/>
                Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten 
                restringir el contenido que pueden ver los niños en función de la clasificación por edad y 
                bloquear determinados títulos que no quieras que los niños vean.
              </span>
            </div>
          </li>
        </ul>
        <form className={style.email_form}>
          <h3>¿Quieres ver Nexflit ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Nexflit.</h3>
          <div className={style.input_email}>
            <label className={style.email_id} placeholder='email'>
              <input type="email" name='email' maxLength='50' minLength='5' id='id_email' className={style.id_email}/>
              <label htmlFor="id_email" className={style.placelabel}>Email</label>
            </label>
            <button className={style.btn_comenzar}><span>Comenzar</span><BsChevronRight className={style.arrow} /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Section6;