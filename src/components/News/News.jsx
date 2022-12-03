import React from 'react'
import s from './News.module.scss'

import Header from '../Header/Header'
import Item from './Item'

import Image1 from '../../assets/images/news/Image1.jpg'
import Image2 from '../../assets/images/news/Image2.jpg'
import Image3 from '../../assets/images/news/Image3.jpg'



const News = () => {
  return (
    <>
        <Header />
        <div className={s.news}>
            <div className={s.container}>
                <h1 className={s.title}>Новости</h1>
                <div className={s.listNews}>
                    <Item mainImage={Image1} numbers={'17.11.21'} 
                        theme='Сейчас всё чаще звучит шопот бессменных лидеров' subText='Как уже неоднократно упомянуто, элементы политического процесса объективно рассмотрены соответствующими инстанциями.'/>
                    <Item mainImage={Image2} numbers={'14.10.21'} 
                        theme='Близость к государственным границам оказалась ошибочной' subText='Есть над чем задуматься: предприниматели в сети интернет являются только методом политического участия и обнародованы!'/>
                    <Item mainImage={Image3} numbers={'21.09.21'} 
                        theme='Допустим, объемы выросли' subText='Также как разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании экономической целесообразности принимаемых решений.'/>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default News