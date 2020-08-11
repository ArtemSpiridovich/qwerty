import React from 'react'
import Filters from '../filters/filters'
import OnSale from '../on-sale/on-sale'
import NewListing from '../new-listings/new-listings'
import NewsList from '../news/news-list'
import s from './content-container.module.scss'

function ContentContainer (props) {
  return (
    <div className={s.container__content}>
      <Filters />
      <OnSale
        cartProducts={props.cartProducts}
        setCartProducts={props.setCartProducts}
        counterCard={props.counterCard}
        setCounterCard={props.setCounterCard}
      />
      <NewListing
        cartProducts={props.cartProducts}
        setCartProducts={props.setCartProducts}
        counterCard={props.counterCard}
        setCounterCard={props.setCounterCard}
      />
      <NewsList />
    </div>
  )
}

export default ContentContainer
