import React from 'react'
import Input from '../common/input/input'
import CommonCorners from '../common-style/common-corners'
import s from './step3.module.scss'

import master_card from '../../assets/images/master-card.svg'
import visa from '../../assets/images/visa.svg'
import paypal from '../../assets/images/paypal.svg'
import skrill from '../../assets/images/skrill.svg'
import coinpay from '../../assets/images/Coinpayments.svg'
import webmoney from '../../assets/images/Vector.svg'
import alipay from '../../assets/images/alipay.svg'

function Block ({children}) {
  return (
    <div className={s.block}>
      {children}
      <CommonCorners />
    </div>
  )
}

function Step3 () {
  return (
    <div className={s.container}>
      <div className={s.blocks}>
        <Block>
          <div className={s.visa}>
            <img src={visa}/>
            <img src={master_card}/>
          </div>
          </Block>
          <Block>
            <img src={paypal}/>
          </Block>
          <Block>
            <img src={coinpay}/>
          </Block>
          <Block>
            <img src={skrill}/>
          </Block>
          <Block>
            <img src={webmoney}/>
          </Block>
          <Block>
            <img src={alipay}/>
          </Block>
      </div>
      <Input className={s.input} type='text' placeholder='step3.card' />
      <Input className={s.input} type='text' placeholder='step3.name' />
      <div className={s.container__row3}>
        <Input className={s.input} type='text' placeholder='step3.date' />
        <Input className={s.input} type='text' placeholder='step3.CVV' />
      </div>
    </div>
  )
}

export default Step3