import React from 'react';
import style from './Header.module.css';
import logoHome from '../../../utils/images/logo-home.png';
import { FaGlobe } from 'react-icons/fa';

function Header() {
  return (
    <div className={style.container}>
      <div className={style.logo_container}>
        <img src={logoHome} alt="nexflit logo" />
      </div>
      <div className={style.buttons}>
        <div className={style.language}>
          <FaGlobe className={style.globe} />
          <select name="language" id="language">
            <option selected value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className={style.btn_login}>
          <button>Iniciar sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Header;