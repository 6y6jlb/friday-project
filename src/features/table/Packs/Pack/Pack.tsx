import React from "react";
import style from './Pack.module.css';

type PropsType = {
    packName: string
    cardsCount: number
    createdBy: string
    isPrivate: boolean
    updatedDate: string
}

const Pack: React.FC<PropsType> = ({packName, cardsCount, createdBy, isPrivate, updatedDate}) => {
    return (
        <div className={ style.cardsContainer }>
            <span>{ packName } </span>
            <span>{ cardsCount } </span>
            <span>{ createdBy } </span>
            <span>{ updatedDate.slice(0,10) } </span>
        </div>
    )
}
export default Pack;