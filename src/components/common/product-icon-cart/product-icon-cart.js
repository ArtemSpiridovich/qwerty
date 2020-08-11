import React, {useEffect} from 'react'
import CommonCorners from '../../common-style/common-corners'
import s from './product-icon-cart.module.scss'

import arrleft from '../../../assets/images/arrow-left.svg'
import arrright from '../../../assets/images/arrow-right.svg'
import lineBottom from '../../../assets/images/product-line.svg'
import del from '../../../assets/images/delete.svg'

function IconProductCart ({
  id,
  title,
  description,
  img,
  price,
  counter,
  cartProducts,
  setCartProducts,
}) {

  let productMinus = () => {
    if(counter !== 1) {
      let products = cartProducts.map(el => {
        if (id === el.id) {
          return {
            ...el,
            counter: el.counter - 1
          }
        } else return el
      })
      setCartProducts(products)
    } else {
      let products = cartProducts.filter(el => el.id !== id)
      setCartProducts(products)
    }
  }

  let productPlus = () => {
    let products = cartProducts.map(el => {
      if (id === el.id) {
        return {
          ...el,
          counter: el.counter + 1
        }
      } else return el
    })
    setCartProducts(products)
  }

  return (
    <div className={s.container}>
      <div className={s.container__container}>
        <div onClick={() => {let products = cartProducts.filter(el => el.id !== id)
      setCartProducts(products)}} className={s.container__box}>
          <img className={s.box__img} src={img} />
          <img className={s.delete} src={del}/>
          <CommonCorners />
        </div>
        <p className={s.container__title}>
          {title} {description}
        </p>
      </div>
      <div className={s.container__price}>
        <div className={s.price__counter}>
          <img onClick={() => productMinus()} src={arrleft} />
          <span className={s.counter}>
            {counter < 10 ? '0' + counter : counter}
          </span>
          <img onClick={() => productPlus()} src={arrright} />
        </div>
        <p className={s.price}>${price * counter}</p>
      </div>
      <img className={s.line} src={lineBottom}/>
    </div>
  )
}

export default IconProductCart
