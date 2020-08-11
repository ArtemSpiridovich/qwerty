import React from 'react'
import Icons from '../svg/Icon'
import BlockWithTitle from '../common/block-with-title/block-with-title'
import s from './news-list.module.scss'

function NewsList () {
  return (
    <BlockWithTitle title='title.news'>
      <div className={s.container__news}>
          <Icons name='news'/>
      </div>
    </BlockWithTitle>
  )
}

export default NewsList
