import React from "react";
import style from './Pack.module.css';

type PropsType = {
    packName: string
    cardsCount: number
    rating: number
    isPrivate: boolean
    updatedDate: string
}

const Pack: React.FC<PropsType> = ({packName, cardsCount, rating, isPrivate, updatedDate}) => {
    return (
        <div className={ style.packContainer }>
            <span>{ packName } </span>
            <span>{ cardsCount } </span>
            <span>{ rating} </span>
            <span>{ updatedDate.slice(0,10) } </span>
            <div>
                <button>to basket</button>
                <button>to trash</button>
                <button>renovation</button>
            </div>
        </div>
    )
}
export default Pack;