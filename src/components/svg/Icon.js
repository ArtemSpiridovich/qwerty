import React from 'react'
import News from './components/news.js'
import Rex from './components/rex.js'
import Account from './components/account.js'
import Balance from './components/balance.js'
import Notifications from './components/notifications.js'
import Cart from './components/cart.js'
import NavMenu from './components/navmenu.js'
import NavMenuClose from './components/navmenu-close.js'
import Earth from './components/earth.js'
import Sum from './components/sum.js'
import Close from './components/close.js'
import Facebook from './components/facebook.js'
import Twitter from './components/twitter.js'
import YouTube from './components/youtube.js'
import Reddit from './components/reddit.js'
import OpenArrow from './components/open-arrow.js'
import CloseArrow from './components/close-arrow.js'

const Icons = props => {
  switch (props.name) {
    case 'news':
      return <News />
    case 'open-arrow':
      return <OpenArrow />
    case 'close-arrow':
      return <CloseArrow />
    case 'facebook':
      return <Facebook />
    case 'twitter':
      return <Twitter />
    case 'youtube':
      return <YouTube />
    case 'reddit':
      return <Reddit />
    case 'rex':
      return <Rex />
    case 'earth':
      return <Earth />
    case 'navmenu':
      return <NavMenu {...props} />
    case 'navmenu-close':
      return <NavMenuClose {...props} />
    case 'account':
      return <Account {...props} />
    case 'balance':
      return <Balance {...props} />
    case 'notifications':
      return <Notifications {...props} />
    case 'cart':
      return <Cart {...props} />
    case 'sum':
      return <Sum />
      case 'close':
      return <Close />
    default:
      return null
  }
}

export default Icons
