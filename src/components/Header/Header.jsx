import React from 'react'
import s from './Header.module.scss'
import logo from '../../assets/images/header/Logo.svg'
import phoneButton from '../../assets/images/header/Button.png'
import { Link } from 'react-router-dom'


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className="header__image">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <Link to={'/about'}><li className={s.menuItem}>О компании</li></Link>
                        <Link to={'/news'}><li className={s.menuItem}>Новости</li></Link>
                        <Link to={'/docs'}><li className={s.menuItem}>Документы</li></Link>
                        <Link to={'/'}><li className={s.menuItem}>Контакты</li></Link>
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