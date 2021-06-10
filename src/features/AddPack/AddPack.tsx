import style from './AddPack.module.css';
import React, {useState} from "react";
import SuperInputText from "../../main/ui/common/components/SuperInputText/SuperInputText";
import SuperButton from '../../main/ui/common/components/SuperButton/SuperButton';
import {useDispatch} from "react-redux";
import {addPackTC} from "../../main/bll/table-reducer";

type PropsType = {
    onClick: (value:boolean)=>void
}
const AddPack:React.FC<PropsType> = (props)=>{
    const dispatch =useDispatch()
    const [name,setName]=useState<string>('')
    const [price,setPrice]=useState<number>(0)



    return (
        <div className={style.addPackContainer}>
            <span>new product</span>
            <SuperInputText value={name} onChange={(event)=>setName(event.currentTarget.value)} placeholder={'name'}/>
            <input type={'number'} value={price} onChange={(event)=>setPrice(Number(event.currentTarget.value))} placeholder={'price'}/>
            <SuperButton onClick={()=> {
                props.onClick(false)
               dispatch(addPackTC(name,price))

            }} >add</SuperButton>
        </div>
    )
}
export default AddPack;