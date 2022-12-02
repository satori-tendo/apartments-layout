import React from "react"
import s from './Comments.module.scss'

const Comment = (props) => {
    return (
        <div className={props.class}>
            <div className={s.info}>
                <img src={props.avatar} alt="" className={s.avatar} />
                <div className={s.about}>
                    <span className={s.name}>{props.name}</span>
                    <span>Страница VK</span>
                </div>
            </div>
            <p className={s.text}>{props.text}</p>
        </div>
    )
}

export default Comment;