import React from 'react'
import Item from './Item'
import s from './Question.module.scss'

import icon1 from '../../assets/images/question/icon1.png'
import icon2 from '../../assets/images/question/icon2.png'
import icon3 from '../../assets/images/question/icon3.png'


const Question = () => {
    return (
        <>
            <h1 className={s.title}>Как купить?</h1>
            <div className={s.question}>
                <div className={s.container}>

                    <div className={s.content}>
                        <div className={s.items}>
                            <Item icon={icon1} title={'Материнский капитал'}
                                subtitle={'Материнский капитал и другие субсидии в качестве первоначального взноса при покупке жилья в ипотеку или части стоимости квартиры.'} />
                            <Item icon={icon2} title={'В ипотеку'}
                                subtitle={'Специальные ставки некоторых категорий граждан: многодетных и военных.'} />
                            <Item icon={icon3} title={'100% оплата'}
                                subtitle={'Принимают оплату по безналичному расчету.'} />
                        </div>
                        <div className={s.questions}>
                            <div className={s.questionsContent}>
                                <div className={s.text}>
                                    <h2 className={s.title}>Есть вопросы?</h2>
                                    <h3 className={s.subtitle}>Закажите бесплатную консультацию или звоните за номером:</h3>
                                    <h2 className={s.number}>+7 978 100 28-62</h2>
                                </div>
                                <button className={s.button}>Заказать консультацию</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question