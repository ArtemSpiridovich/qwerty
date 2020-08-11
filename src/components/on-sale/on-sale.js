import React from 'react'
import BlockWithTitle from '../common/block-with-title/block-with-title'
import IconProduct from '../common/product-icon/product-icon'
import { useTranslation } from 'react-i18next'
import s from './on-sale.module.scss'

import product from '../../data/data'

function OnSale (props) {
  return (
    <BlockWithTitle title='title.onsale'>
      <div className={s.container__onsale}>
        <div className={s.onsale__products}>
          {product.map((e) => {
            return (
              <IconProduct
                key={e.id}
                id={e.id}
                title={e.title}
                description={e.description}
                favorite={e.favorite}
                img={e.img}
                price={e.price}
                currency={e.currency}
                sale={e.sale}
                isPreorder={e.isPreorder}
                setCounterCard={props.setCounterCard}
                counterCard={props.counterCard}
                cartProducts={props.cartProducts}
                setCartProducts={props.setCartProducts}
              />
            )
          })}
        </div>
      </div>
    </BlockWithTitle>
  )
}

export default OnSale
