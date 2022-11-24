import React from 'react'
import s from './Header.module.scss'
import logo from '../../assets/images/header/Logo.svg'
import phoneButton from '../../assets/images/header/Button.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className="header__image">
                    <img src={logo} alt="" />
                </div>
                <nav className={s.header__menu}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}>О компании</li>
                        <li className={s.menu__item}>Новости</li>
                        <li className={s.menu__item}>Документы</li>
                        <li className={s.menu__item}>Контакты</li>
                    </ul>
                </nav>
                <div className={s.header__contacts}>
                    <div className={s.contacts__text}>
                        <span className={s.contacts__number}>+7 982 45-22-67</span>
                        <span className={s.contacts__graph}>Пн-Пт. с 8:00 до 19:00</span>
                    </div>
                    <div className={s.contacts__image}>
                        <img src={phoneButton} alt="" />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;