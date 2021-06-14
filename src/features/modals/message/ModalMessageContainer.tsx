import React, {useState} from 'react';
import ModalMessage from './ModalMessage';

const ModalMessageContainer: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShow(true)}>show message Modal</button>
            </div>

            <ModalMessage
                show={show}
                close={() => setShow(false)}

                width={100}
                height={50}
            >
                <span>message</span>
                <span>Modal</span>
            </ModalMessage>
        </>
    );
};

export default ModalMessageContainer;
