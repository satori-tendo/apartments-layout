import React from 'react'
import s from './Question.module.scss'

const Item = (props) => {
    return (
        <div className={s.item}>
            <img src={props.icon} alt="" className={s.image} />
            <div className={s.text}>
                <h2 className={s.title}>{props.title}</h2>
                <h3 className={s.subtitle}>{props.subtitle}</h3>
            </div>
        </div>
    )
}

export default Item