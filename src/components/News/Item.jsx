import React from 'react'
import s from './News.module.scss'


import calendar from '../../assets/images/news/calendar.png'


const Item = (props) => {
    return (
        <div className={s.item}>
            <div className={s.imageDiv}>
                <img src={props.mainImage} alt="" className={s.mainImage} />
                <div className={s.date}>
                    <img src={calendar} alt="" className={s.calendar} />
                    <span>{props.numbers}</span>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.text}>
                    <h3 className={s.theme}>{props.theme}</h3>
                    <p className={s.subText}>{props.subText}</p>
                </div>
                <button>Читать полностью</button>
            </div>
        </div>
    )
}

export default Item