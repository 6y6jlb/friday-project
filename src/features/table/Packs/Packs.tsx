import React from "react";
import style from './Packs.module.css';
import Pack from "./Pack/Pack";
import {PackResponseType} from "../../../main/dal/tableAPI";

type PropsType = {
    packs: Array<PackResponseType>
}

const Packs: React.FC<PropsType> = ({packs}) => {

    const mappedPacks = packs.map ( p => <Pack packName={ p.name } cardsCount={ p.cardsCount } createdBy={ p.created }
                                               isPrivate={ p.private } updatedDate={ p.updated }/> )

    return (
        <div className={ style.cardsContainer }>
            { mappedPacks }
        </div>
    )
}
export default Packs;