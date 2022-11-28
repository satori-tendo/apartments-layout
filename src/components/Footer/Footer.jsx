import React from 'react'
import s from './Footer.module.scss'
import Logo from '../../assets/images/Footer/Logo.png'
import Cell from './Cell'
import vk from '../../assets/images/Footer/Vectorvk.png'
import tg from '../../assets/images/Footer/Vectortg.png'
import inst from '../../assets/images/Footer/Vectorinst.png'
import arrowUp from '../../assets/images/Footer/arrowUp.png'

const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.container}>
            <div className={s.firstRow}>
                <img src={Logo} alt="" className={s.image} />
                <div className={s.content}>
                    <div className={s.text}>
                        <span>Остались вопросы?</span>
                        <span>Закажите бесплатную консультацию</span>
                    </div>
                    <button>Заказать консультацию</button>
                </div>
            </div>
            <div className={s.secondRow}>
                <Cell firstSpan='Телефон:' secondSpan='+7 982 45-22-67'/>
                <Cell firstSpan='Эл. почта:' secondSpan='vozrojdenie@yandex.ru'/>
                <Cell firstSpan='Адрес офиса:' secondSpan='Ярославская обл. Ярославль, Почтовая улица 12/2'/>   
                <Cell firstSpan='Адрес обекта:' secondSpan='Ярославская обл. Ярославль, рядом с ул. Бабича 10/22'/>
            </div>
            <div className={s.thirdRow}>
                <nav className={s.text}>
                    <span>Политика конфиденциальности</span>
                    <span>Документы</span>
                </nav>
                <nav className={s.images}>
                    <img src={vk} alt="" />
                    <img src={tg} alt="" />
                    <img src={inst} alt="" />
                </nav>
                <div><img src={arrowUp} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Footer