import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './block-with-title.module.scss'

function BlockWithTitle ({title, children}) {

  const {t, i18n} = useTranslation();

  return (
    <div className={s.container}>
      <h1 className={s.container__title}>{t(title)}</h1>
      {children}
    </div>
  )
}

export default BlockWithTitle