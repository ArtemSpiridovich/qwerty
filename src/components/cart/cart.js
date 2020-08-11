import React, { useState, useEffect } from 'react'
import CommonCorners from '../common-style/common-corners'
import Buttonbar from '../common/buttonbar-with-sum/buttonbar'
import Upbar from '../common/upbar-cart/upbar'
import Step1 from '../step1/step1'
import Step2 from '../step2/step2'
import Step3 from '../step3/step3'
import { useTranslation } from 'react-i18next'
import s from './cart.module.scss'

import upline from '../../assets/images/line.svg'
import arrow from '../../assets/images/upline.svg'
import tick from '../../assets/images/tick.svg'

function Cart ({ setCartProducts, cartProducts, ...props }) {
  const { t, i18n } = useTranslation()
  const [step, setStep] = useState(1)
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)
  const [sum, setSum] = useState(0)

  useEffect(() => {
    let sum = cartProducts.reduce((acc, el) => {
      acc = acc + el.price * el.counter
      return acc
    }, 0)
    setSum(sum)
  }, [cartProducts])

  return (
    <div className={s.container}>
      <img className={s.container__upline} src={upline} />
      <img className={s.container__arrow} src={arrow} />
      <div className={s.container__cart}>
        {1 <= step && step <= 3 && (
          <div>
            <Upbar cross={true} setOpen={props.setOpenCart}>
              <p className={s.step__title}>
                You have {cartProducts.length} items in your cart
              </p>
            </Upbar>
            <Step1
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
            {step === 1 && (
              <Buttonbar
                step={1}
                setStep={setStep}
                setStepNext={setStep2}
                setCartProducts={setCartProducts}
                button1='Continue'
                button2='Remove All'
                sum={sum}
              />
            )}
          </div>
        )}
        {2 <= step && step <= 3 && step2 && (
          <div className={s.cart__step2}>
            <Upbar cross={false} setOpen={setStep2}>
              <p className={s.step__title}>
                Enter your Billing details{' '}
                <div className={s.title__tick}>
                  <img className={s.tick} src={tick} />
                </div>
                <span className={s.title__rem}>Remember</span>
              </p>
            </Upbar>
            <Step2 />
            {step === 2 && (
              <Buttonbar
                step={2}
                setStep={setStep}
                setStepNext={setStep3}
                button1='Continue'
                button2='Remove All'
                sum={sum}
              />
            )}
            {step === 3 && (
              <div className={s.bottomline}>
                <Upbar cross={false} setOpen={setStep2}>
                  <p className={s.step__title}>
                    Enter your Shipping details{' '}
                    <div className={s.title__tick}>
                      <img className={s.tick} src={tick} />
                    </div>
                    <span className={s.title__rem}>Remember</span>
                  </p>
                </Upbar>
              </div>
            )}
          </div>
        )}
        {step === 3 && step3 && (
          <div className={s.cart__step3}>
            <Upbar cross={false} setOpen={setStep3}>
              <p className={s.step__title}>Choose your payment method</p>
            </Upbar>
            <Step3 />
            <div className={s.step3__buttonbar}>
              <button
                onClick={() => {
                  setStep(step + 1)
                }}
                className={s.buy__button}
              >
                Buy
              </button>
              <button
                onClick={() => {
                  setStep(1)
                }}
                className={s.back__button}
              >
                Back
                <CommonCorners />
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className={s.cart__step4}>
            <Upbar cross={true} setOpen={props.setOpenCart}>
              <p className={s.step__title}>Successful purchase</p>
            </Upbar>
            <p className={s.step4__text}>
              Thank you for using our marketplace. Your Order number is{' '}
              <span className={s.green}>#23542</span>. If you still have any
              questions click{' '}
              <a href='#' className={s.yellow}>
                here
              </a>{' '}
              to ask!
            </p>
          </div>
        )}
        <span className={s.corn3}></span>
        <span className={s.corn4}></span>
      </div>
    </div>
  )
}

export default Cart
