import React from 'react'
import s from './Gallery.module.scss'

const Card = (props) => {
    return (
        <div className={s.card}>
            <img src={props.image} alt="" className={s.card__image} />
        </div>
    )
}

export default Card