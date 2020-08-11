import React from 'react'
import IconProduct from '../common/product-icon/product-icon'
import { new_listings } from '../../data/data'
import BlockWithTitle from '../common/block-with-title/block-with-title'
import s from './new-listings.module.scss'

function NewListing (props) {
  return (
    <BlockWithTitle title='title.newlisting'>
      <div className={s.container__newlistings}>
        {new_listings.map((e) => {
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
    </BlockWithTitle>
  )
}

export default NewListing
