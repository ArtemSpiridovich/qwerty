import React, { useState } from 'react'
import CommonCorners from '../../common-style/common-corners'
import s from './select-item.module.scss'

function SelectItem ({title, children}) {
  return (
    <div className={s.selectCoin__item}>
      {children}
      <p className={s.item__title}>{title}</p>
      <CommonCorners/>
    </div>
  )
}

export default SelectItem
