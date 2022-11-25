import React from 'react'
import s from './Footer.module.scss'

const Cell = (props) => {
    return (
        <div className={s.secondRow__cell}>
            <span>{props.firstSpan}</span>
            <span>{props.secondSpan}</span>
        </div>
    )
}

export default Cell