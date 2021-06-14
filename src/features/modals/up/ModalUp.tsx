import React, {useEffect, useState} from 'react';
import Modal from "../Modal";

interface IModalUp {
    speed?: number // 1 - fast; 100 - slow
}

const ModalUp: React.FC<IModalUp> = ({speed = 10}) => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) setShow(true);
        else setShow(false);
    };

    const scroll = () => {
        const step = window.pageYOffset / speed;
        let lastState = window.pageYOffset;

        const innerTimer = setInterval(() => {
            if (lastState < window.pageYOffset) clearInterval(innerTimer);
            lastState = window.pageYOffset;

            window.scroll(0, lastState - step);
            if (window.pageYOffset === 0) clearInterval(innerTimer);
        }, 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Modal
                enableBackground={false}

                width={70}
                height={50}
                modalOnClick={scroll}
                modalStyle={{
                    top: '80vh',
                    left: '20px'
                }}

                show={show}
            >
                Up
            </Modal>
        </>
    );
};

export default ModalUp;
