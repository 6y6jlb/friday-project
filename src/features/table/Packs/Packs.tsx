import React, {useState} from "react";
import style from './Packs.module.css';
import Pack from "./Pack/Pack";
import {PackResponseType} from "../../../main/dal/tableAPI";
import {FilterPrice} from "../../../main/ui/components/findAndPagination/FilterPrice";
import AddPack from "../../AddPack/AddPack";

type PropsType = {
    packs: Array<PackResponseType>
}

const Packs: React.FC<PropsType> = ({packs}) => {
    const [isAddingANewPack, setIsAddingANewPack] = useState<boolean> ( false )
    const mappedPacks = packs.map ( p => <Pack key={p._id} packName={ p.name } cardsCount={ p.cardsCount } rating={ p.rating }
                                               isPrivate={ p.private } updatedDate={ p.updated }/> )

    return (
        <div className={ `${ style.packsContainer } ${ isAddingANewPack && style.addPack }` }>
            { isAddingANewPack && <AddPack onClick={setIsAddingANewPack}/> }
            <div className={ style.header }>
                <span>product</span>
                <FilterPrice/>
                <button className={style.buttonAdd} onClick={ () => setIsAddingANewPack ( true ) }>add</button>
                <span>properties</span>
            </div>
            { mappedPacks }
        </div>
    )
}
export default Packs;