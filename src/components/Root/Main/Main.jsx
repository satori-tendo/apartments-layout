import React from 'react'
import s from './Main.module.scss'
import flat from '../../../assets/images/main/flat.png'

const Main = () => {
  return (
    <article className={s.main}>
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.text}>
                    <h1 className={s.text}>Более <span>1000</span> комфортных квартир от 2,3 млн рублей  в Дзержинском р-не Ярославля</h1>
                </div>
                <div className={s.buttons}>
                    <div className={s.button1}>
                        <h4>Выбрать квартиру</h4> <img src={flat} alt="" />
                    </div>
                    <div className={s.button2}><span>Получить консультацию</span></div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default Main