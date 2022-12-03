import React from 'react'
import s from './Docs.module.scss'

import Header from '../Header/Header'
import Item from './Item'


const Docs = () => {
  return (
    <>
        <Header />
        <div className={s.docs}>
            <div className={s.container}>
                <h1 className={s.title}>Документы</h1>
                <div className={s.list}>
                    <Item name='Градостроительный план' />
                    <Item name='Договор аренды участка от 20.02.18' />
                    <Item name='Дополнение к договору аренды' />
                    <Item name='Разрешение на строительство' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Docs