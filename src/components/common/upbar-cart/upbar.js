import React, { useState } from 'react'
import Icons from '../../svg/Icon'
import line from '../../../assets/images/linecart.svg'
import s from './upbar.module.scss'

function Upbar ({ setOpen, children, cross }) {
  return (
    <div className={s.container}>
      <div>{children}</div>
      {cross && (
        <div onClick={() => setOpen(false)}>
          <Icons name='close' />
        </div>
      )}
      <img className={s.line} src={line} />
    </div>
  )
}

export default Upbar
