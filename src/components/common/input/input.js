import React, { useState} from 'react'
import CommonCorners from '../../common-style/common-corners'
import { useTranslation } from 'react-i18next';
import s from './input.module.scss'

function Input ({ placeholder, type, props}) {

  const {t, i18n} = useTranslation();

  return (
    <div className={s.container}>
        <input className={s.container__input} type={type} placeholder={t(placeholder)} {...props}/>
        <CommonCorners />
    </div>
  )
}

export default Input
