import React, {CSSProperties, useState} from 'react';
import Modal from "./Modal";
import SuperButton from "../../main/ui/common/components/SuperButton/SuperButton";


type ModalContainerType = {
    width?: number
    height?: number
    text?:string
    showModal?:boolean
    showButton?:boolean
    modalStyle?:CSSProperties
}
const ModalContainer: React.FC<ModalContainerType> = ({modalStyle, showButton = false,showModal = false,width= 300,height= 260,text= 'Simple Modal'}) => {
    const [show, setShow] = useState(showModal);

    return (
        <>
            {showButton &&  <button onClick={() => setShow(true)}>show simple Modal</button>}
            <Modal
                show={show}
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                modalStyle={modalStyle}
                // modalOnClick={() => setShow(false)}

                width={width}
                height={height}
            >
                {text}
                <SuperButton onClick={() => setShow(false)}>Close</SuperButton>
            </Modal>
        </>
)}

export default ModalContainer;
