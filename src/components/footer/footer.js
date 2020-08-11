import React from 'react'
import Icons from '../svg/Icon'
import CommonCorners from '../common-style/common-corners'
import imgFeedback from '../../assets/images/feedback.svg'
import imgIcons from '../../assets/images/footer-images.svg'
import s from './footer.module.scss'

function Footer () {
  return (
    <div className={s.container__footer}>
      <div className={s.footer__rating}>
        <img src={imgFeedback}/>
      </div>
      <div className={s.footer__links}>
        <a className={s.links__link} href='#'>
          <Icons name='facebook'/>
          <CommonCorners/>
        </a>
        <a className={s.links__link} href='#'>
          <Icons name='twitter'/>
          <CommonCorners/>
        </a>
        <a className={s.links__link} href='#'>
          <Icons name='youtube'/>
          <CommonCorners/>
        </a>
        <a className={s.links__link} href='#'>
          <Icons name='reddit'/>
          <CommonCorners/>
        </a>
      </div>
      <div className={s.footer__icons}>
        <img src={imgIcons}/>
      </div>
    </div>
  )
}

export default Footer