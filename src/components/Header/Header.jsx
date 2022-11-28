import React from 'react'
import s from './Header.module.scss'
import logo from '../../assets/images/header/Logo.svg'
import phoneButton from '../../assets/images/header/Button.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className="header__image">
                    <img src={logo} alt="" />
                </div>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.menuItem}>О компании</li>
                        <li className={s.menuItem}>Новости</li>
                        <li className={s.menuItem}>Документы</li>
                        <li className={s.menuItem}>Контакты</li>
                    </ul>
                </nav>
                <div className={s.contacts}>
                    <div className={s.text}>
                        <span className={s.number}>+7 982 45-22-67</span>
                        <span className={s.graph}>Пн-Пт. с 8:00 до 19:00</span>
                    </div>
                    <div className={s.phoneImage}>
                        <img src={phoneButton} alt="" />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;