import React, { useState } from 'react'
import CommonCorners from '../../common-style/common-corners'
import Icons from '../../svg/Icon'
import { useTranslation } from 'react-i18next'
import s from './buttonbar.module.scss'

function Buttonbar ({ button1, button2, sum, step, setStep, setStepNext, setCartProducts }) {
  const { t, i18n } = useTranslation()

  return (
    <div className={s.container}>
      <div>
        <button
          onClick={() => {
            setStep(step + 1)
            setStepNext(true)
          }}
          className={s.filters__button}
        >
          {t(button1)}
          <CommonCorners />
        </button>
        <button onClick={() => setCartProducts([])} className={s.filters__button}>
          {t(button2)}
          <CommonCorners />
        </button>
      </div>
      <div className={s.container__sumbar}>
        <Icons name='sum' />
        <span className={s.sumbar__sum}>${sum}</span>
      </div>
    </div>
  )
}

export default Buttonbar
