import React from 'react';
import style from './Search.module.css';
import { BsChevronRight } from "react-icons/bs";


function Search() {
  return (
    <div className={style.container}>
      <label className={style.email_id} placeholder='email'>
        <input type="email" name='email' maxLength='50' minLength='5' id='id_email' className={style.id_email}/>
        <label htmlFor="id_email" className={style.placelabel}>Email</label>
      </label>
      <button className={style.btn_comenzar}><span>Comenzar</span><BsChevronRight className={style.arrow} /></button>
    </div>
  )
}

export default Search;