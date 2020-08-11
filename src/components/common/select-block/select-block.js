import React, { useState} from 'react'
import Icons from '../../svg/Icon'
import CommonCorners from '../../common-style/common-corners'
import { useTranslation } from 'react-i18next';
import s from './select-block.module.scss'

function SelectBlock ({ name, children }) {

  const[isOpen, setIsOpen] = useState(false);
  const {t, i18n} = useTranslation();

  let onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={isOpen ? `${s.container_open}` : `${s.container_close}`} onClick={() => onClick()}>
        <p className={s.container__name}>{t(name)}</p>
        {isOpen ? <Icons name='close-arrow' /> : <Icons name='open-arrow' />}
        <CommonCorners />
      </div>
      {children}
    </>
  )
}

export default SelectBlock
