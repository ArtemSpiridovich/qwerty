import React from 'react'
import IconProductCart from '../common/product-icon-cart/product-icon-cart'
import s from './step1.module.scss'

function Step1 ({
  setCartProducts,
  cartProducts,
}) {
  return (
    <div className={s.container__cart}>
      {cartProducts.map(e => {
        return (
          <IconProductCart
            key={e.id}
            id={e.id}
            title={e.title}
            description={e.description}
            img={e.img}
            price={e.price}
            counter={e.counter}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        )
      })}
    </div>
  )
}

export default Step1
