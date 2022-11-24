import React from 'react'
import s from './Main.module.scss'
import flat from '../../assets/images/main/flat.png'

const Main = () => {
  return (
    <main className={s.main}>
        <div className={s.main__container}>
            <div className={s.main__content}>
                <div className={s.main__text}>
                    <h1 className={s.text}>Более <span>1000</span> комфортных квартир от 2,3 млн рублей  в Дзержинском р-не Ярославля</h1>
                </div>
                <div className={s.main__buttons}>
                    <div className={s.main__button1}>
                        <h4>Выбрать квартиру</h4> <img src={flat} alt="" />
                    </div>
                    <div className={s.main__button2}><span>Получить консультацию</span></div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main