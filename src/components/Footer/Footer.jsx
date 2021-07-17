import React from 'react';
import style from './Footer.module.css';
import { FaGlobe } from "react-icons/fa";
import { data } from './Data.js';

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer_wrapper}>
        <div className={style.footer} id="footer">
          <p className={style.text_top}>¿Preguntas? Llama al <a href="tel:+573206172165">57 3206172165</a></p>
          <ul className={style.links}>
            {data.map((el, i) => (
              <li className={style.item} key={i}>
                <a href='#footer'>{el}</a>
              </li>
            ))}
          </ul>
          <div className={style.language}>
            <FaGlobe className={style.globe} />
            <select name="language" id="language">
              <option selected value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          <p className={style.footer_country}>Nexflit Colombia</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;