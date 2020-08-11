import React from 'react'
import Input from '../common/input/input'
import s from './step2.module.scss'

function Step2 () {
  return (
    <div className={s.container}>
      <div className={s.container__row1}>
        <Input className={s.input} type='text' placeholder='step2.first-name' />
        <Input className={s.input} type='text' placeholder='step2.last-name' />
      </div>
      <div className={s.container__row2}>
        <Input className={s.input} type='text' placeholder='step2.company' />
        <Input className={s.input} type='text' placeholder='step2.country' />
      </div>
      <Input className={s.input} type='text' placeholder='step2.street' />
      <Input className={s.input} type='text' placeholder='step2.apartament' />
      <div className={s.container__row5}>
        <Input className={s.input} type='text' placeholder='step2.town' />
        <Input className={s.input} type='text' placeholder='step2.state' />
      </div>
      <div className={s.container__row6}>
        <Input className={s.input} type='text' placeholder='step2.zip' />
        <Input className={s.input} type='text' placeholder='step2.phone' />
      </div>
      <div className={s.container__row7}>
        <Input className={s.input} type='text' placeholder='step2.email' />
        <Input className={s.input} type='text' placeholder='step2.password' />
      </div>
    </div>
  )
}

export default Step2
