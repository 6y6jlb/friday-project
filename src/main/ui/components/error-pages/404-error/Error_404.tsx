import React from "react";
import style from "./Error_404.module.css"

export const Error_404:React.FC= (props)=>{
    return (
        <>
            <div className={ style.mainbox }>
                <div className={ style.err }>4</div>
                <div className={ style.far} >0</div>
                <div className={ style.err2 }>4</div>
                <div className={ style.msg }>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
            </div>
        </>
    )
}
