import React, { useState } from 'react'
import Icons from '../svg/Icon'
import { useTranslation } from 'react-i18next'
import Cart from '../cart/cart'
import s from './header.module.scss'

import { langs } from '../../App'
import card from '../../assets/images/cart-2.svg'

function Header (props) {
  const [isOpen, setIsOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    if (props.lang + 1 < langs.length) {
      props.setCurrentLanguage(props.lang + 1)
      i18n.changeLanguage(langs[props.lang + 1])
    } else {
      i18n.changeLanguage(langs[0])
      props.setCurrentLanguage(0)
    }
  }

  return (
    <div className={s.container__header}>
      <div className={s.header__language}>
        <div className={s.language__rex}>
          <Icons name='rex' />
        </div>
        <div className={s.language__earth} onClick={() => changeLanguage()}>
          <Icons name='earth' />
        </div>
        <p className={s.language__text} onClick={() => changeLanguage()}>
          {langs[props.lang]}
        </p>
      </div>
      <div className={s.header__navmenu}>
        {isOpen ? (
          <div
            className={
              isOpen ? `${s.navmenu__items_open}` : `${s.navmenu__items_close}`
            }
          >
            <nav>
              <div
                className={s.items__button}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icons className={s.items__item} name='navmenu-close' />
              </div>
              <a href='#' className={s.items__item}>
                HOME
              </a>
              <a href='#' className={s.items__item}>
                SELL
              </a>
              <a href='#' className={s.items__item}>
                HOST
              </a>
              <a href='#' className={s.items__item}>
                ABOUT US
              </a>
              <a href='#' className={s.items__item}>
                SUPPORT
              </a>
            </nav>
          </div>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)}>
            <Icons
              className={isOpen ? `${s.navmenu_open}` : `${s.navmenu_close}`}
              name='navmenu'
            />
          </div>
        )}
      </div>
      <div className={s.header__menu}>
        <div className={s.menu__icon}>
          <Icons name='account' />
        </div>
        <div className={s.menu__icon}>
          <Icons name='balance' />
        </div>
        <div className={s.menu__icon}>
          <Icons name='notifications' />
        </div>
        <div onClick={() => setOpenCart(!openCart)} className={s.menu__icon}>
          <span className={s.icon__card__count}>
            {props.cartProducts.length}
          </span>
          <img src={card} />
        </div>
      </div>
      {openCart && props.cartProducts.length ? (
        <div className={s.header__cart}>
          <Cart
            setCartProducts={props.setCartProducts}
            cartProducts={props.cartProducts}
            setOpenCart={setOpenCart}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Header
