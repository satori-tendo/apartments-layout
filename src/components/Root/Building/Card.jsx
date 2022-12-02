import React from 'react'
import s from './Building.module.scss'
import photo from '../../../assets/images/building/photo.png'

const Card = (props) => {

    

    return (
        <div className={s.card}>
            <img src={props.image} alt="" className={s.image} />
            <div className={s.text}>
                <div className={s.numbOfPhotos}>
                    <span className={s.number}>{props.numbOfPhotos}</span>
                    <img src={photo} alt="" className={s.photoImg} />
                </div>
                <div className={s.someText}>
                    {props.someText}
                </div>
            </div>
        </div>
    )
}

export default Card