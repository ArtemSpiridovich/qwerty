import React, { useState } from 'react'
import BlockWithTitle from '../common/block-with-title/block-with-title'
import SelectBlock from '../common/select-block/select-block'
import Input from '../common/input/input'
import CommonCorners from '../common-style/common-corners'
import SelectItem from '../common/select-item/select-item'
import btc from '../../assets/images/bch.svg'
import ppc from '../../assets/images/ppc.svg'
import etp from '../../assets/images/etp.svg'
import { useTranslation } from 'react-i18next';
import s from './filters.module.scss'

function Filters () {
  const [isOpen, setIsOpen] = useState(true)

  const{t, i18n} = useTranslation();

  return (
    <BlockWithTitle title='title.filters'>
      <form className={s.container__filters}>
        <SelectBlock name='filters.part1' isOpen={isOpen} />
        <SelectBlock name='filters.part2' isOpen={isOpen}>
          <div className={s.filters__selectCoin}>
            <SelectItem title='BTC'>
              <img className={s.selectCoin__img} src={btc} />
            </SelectItem>
            <SelectItem title='PPC'>
              <img className={s.selectCoin__img} src={ppc} />
            </SelectItem>
            <SelectItem title='ETP'>
              <img className={s.selectCoin__img} src={etp} />
            </SelectItem>
            <SelectItem title='BTC'>
              <img className={s.selectCoin__img} src={btc} />
            </SelectItem>
            <SelectItem title='PPC'>
              <img className={s.selectCoin__img} src={ppc} />
            </SelectItem>
            <SelectItem title='ETP'>
              <img className={s.selectCoin__img} src={etp} />
            </SelectItem>
          </div>
        </SelectBlock>
        <SelectBlock name='filters.part3' isOpen={isOpen} />
        <SelectBlock name='filters.part4' isOpen={isOpen}>
          <div className={s.filters__selectManufacturer}>
            <SelectItem title='AMD' />
            <SelectItem title='Boundary Electric' />
            <SelectItem title='Pandaminer' />
            <SelectItem title='Nvidia' />
          </div>
        </SelectBlock>
        <Input type='number' placeholder='filters.minprice' />
        <Input type='number' placeholder='filters.maxprice' />
        <button className={s.filters__button}>
          {t('filters.search')}
          <CommonCorners />
        </button>
      </form>
    </BlockWithTitle>
  )
}

export default Filters
