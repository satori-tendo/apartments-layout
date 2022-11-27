import React, { useState } from 'react'
import s from './Layout.module.scss'
import image from '../../assets/images/layout/Image.jpg'


const Layout = () => {

    const [roomMode, setRoomMode] = useState('one')

    const onSetTwoRoom = () => {
        setRoomMode('two')
    }
    const onSetOneRoom = () => {
        setRoomMode('one')
    }

    return (
        <div className={s.layout}>
            <div className={s.layout__container}>
                <h1 className={s.layout__title}>Планировка квартир</h1>
                <section className={s.layout__content}>
                    <img src={image} alt="" className={s.layout__image} />
                    <div className={s.layout__info}>
                        <div className={s.info__buttons}>
                            <button onClick={onSetOneRoom} className={ roomMode == 'one' ? s.activeButton: s.noneActiveButton}>1-комн.</button>
                            <button onClick={onSetTwoRoom} className={ roomMode == 'two' ? s.activeButton: s.noneActiveButton}>2-комн.</button>
                        </div>
                        { roomMode == 'one' && <div className={s.info__text}>
                             <span>Однокомнатные квартиры от 23 м2</span>
                            <span>от 5 400 000 ₽</span>
                        </div>}
                        { roomMode == 'two' && <div className={s.info__text}>
                             <span>Двухкомнатные квартиры от 40 м2</span>
                            <span>от 7 000 000 ₽</span>
                        </div>}
                        <button className={s.info__mainButton}>
                            Подобрать квартиру
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Layout