import React from 'react'
import s from './Building.module.scss'
import photo from '../../assets/images/building/photo.png'

const Card = (props) => {

    

    return (
        <div className={s.card}>
            <img src={props.image} alt="" className={s.card__image} />
            <div className={s.card__text}>
                <div className={s.card__numbOfPhotos}>
                    <span className={s.card__number}>{props.numbOfPhotos}</span>
                    <img src={photo} alt="" className={s.card__photoImg} />
                </div>
                <div className={s.card__someText}>
                    {props.someText}
                </div>
            </div>
        </div>
    )
}

export default Card