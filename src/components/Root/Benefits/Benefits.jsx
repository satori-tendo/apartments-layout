import React from 'react'
import s from './Benefits.module.scss'
import Benefit from './Benefit'


import Frame1 from '../../../assets/images/benefits/Frame1.jpg'
import Frame2 from '../../../assets/images/benefits/Frame2.jpg'
import Frame3 from '../../../assets/images/benefits/Frame3.jpg'
import Frame4 from '../../../assets/images/benefits/Frame4.jpg'
import Frame5 from '../../../assets/images/benefits/Frame5.jpg'
import Frame6 from '../../../assets/images/benefits/Frame6.jpg'

import firstInnerImg from '../../../assets/images/benefits/1.svg'
import secondInnerImg from '../../../assets/images/benefits/2.svg'
import thirdInnerImg from '../../../assets/images/benefits/3.svg'
import fourthInnerImg from '../../../assets/images/benefits/4.svg'
import fifthInnerImg from '../../../assets/images/benefits/5.svg'
import sixthInnerImg from '../../../assets/images/benefits/6.svg'


const Benefits = () => {
  return (
    <div className={s.benefits}>
      <div className={s.container}>
        <h1 className={s.title}>
            Преимущества жизни в ЖК “Возрождение”
        </h1>
        <div className={s.benefitsList}>
            <Benefit imageSrc={Frame1} innerText={'Экология'} innerImg={firstInnerImg}/>
            <Benefit imageSrc={Frame2} innerText={'Доступная стоимость'} innerImg={secondInnerImg}/>
            <Benefit imageSrc={Frame3} innerText={'Надежность'} innerImg={thirdInnerImg}/>
            <Benefit imageSrc={Frame4} innerText={'Транспортная доступность'} innerImg={fourthInnerImg}/>
            <Benefit imageSrc={Frame5} innerText={'Разнообразие планировки'} innerImg={fifthInnerImg}/>
            <Benefit imageSrc={Frame6} innerText={'Инфаструктура'} innerImg={sixthInnerImg}/>
        </div>
      </div>
    </div>
  )
}

export default Benefits