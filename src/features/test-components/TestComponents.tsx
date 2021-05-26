import React from "react";
import SuperButton from "../../main/ui/common/components/SuperButton/SuperButton";
import SuperInputText from "../../main/ui/common/components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../main/ui/common/components/SuperCheckbox/SuperCheckbox";
import style from './TestComponents.module.css'

export const TestComponents: React.FC = (props) => {
    return (
        <div className={style.testFrame}>
            <SuperButton disabled>disabled</SuperButton>
            <SuperButton red>error</SuperButton>
            <SuperButton>something</SuperButton>
            <SuperInputText value={'test'}/>
            <SuperInputText value={'error'} error={'error'}/>
            <SuperCheckbox checked/>
            <SuperCheckbox checked={false}/>

        </div>)
}
