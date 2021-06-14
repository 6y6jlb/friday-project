import React, {useState} from 'react';
import ModalMessageStack, {IStackModal} from "./ModalMessageStack";

const successModal: IStackModal = {
    showClose: {
        show: true,
        close() {
            this.show = false
        },
    },
    endTop: 30,

    width: 100,
    height: 50,
    children: 'success',
};
const errorModal: IStackModal = {
    showClose: {
        show: true,
        close() {
            this.show = false
        },
    },
    endTop: 30,

    width: 100,
    height: 50,
    children: 'error',
    modalStyle: {background: 'red'},
};

const ModalMessageStackContainer: React.FC = () => {
    const [addNewModal, setAddNewModal] = useState({f: (modal: IStackModal) => {}}); // subscribe

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <button
                        onClick={() => addNewModal.f({...successModal, showClose: {...successModal.showClose}})}
                    >
                        add success
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => addNewModal.f({...errorModal, showClose: {...errorModal.showClose}})}
                    >
                        add error
                    </button>
                </div>
            </div>


            <ModalMessageStack
                setAddNewModal={setAddNewModal}
            />
        </>
    );
};

export default ModalMessageStackContainer;
