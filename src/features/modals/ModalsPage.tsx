import React from 'react';
import ModalContainer from "./ModalContainer";
import ModalQuestionContainer from "./question/ModalQuestionContainer";
import ModalInputContainer from "./input/ModalInputContainer";
import ModalMessageContainer from "./message/ModalMessageContainer";
import ModalMessageStackContainer from "./message/ModalMessageStackContainer";
import ModalUp from "./up/ModalUp";

const ModalsPage: React.FC = () => {

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{height: '40vh'}}/>

            <ModalContainer/>
            <ModalQuestionContainer/>
            <ModalInputContainer/>
            <ModalMessageContainer/>
            <ModalMessageStackContainer/>
            <ModalUp/>

            <div style={{height: '300vh'}}/>
        </div>
    );
};

export default ModalsPage;
