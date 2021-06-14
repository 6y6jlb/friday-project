import React, {CSSProperties, useEffect, useState} from 'react';
import Modal from "../Modal";

interface IModalMessage {
    show: boolean;
    close: () => void;

    startTop?: number;
    endTop?: number;
    time?: number;
    speed?: number;

    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;
}

const ModalMessage: React.FC<IModalMessage> = (
    {
        startTop = -50,
        endTop = 30,
        time = 1500,
        speed = 10,

        enableBackground = false,
        backgroundStyle,
        backgroundOnClick = () => {},

        width,
        height,
        modalStyle,
        modalOnClick = () => {},

        show,
        close,
        children,
    }
) => {
    const [top, setTop] = useState(startTop);
    const [updateInnerEndTop, setUpdateInnerEndTop] = useState<{f: (endTop: number) => void} | null>(null);

    useEffect(() => {
        if (updateInnerEndTop) {
            updateInnerEndTop.f(endTop);
        }
    }, [endTop, updateInnerEndTop]);

    useEffect(() => {
        if (show) {
            let innerTop = startTop;
            let innerEndTop = endTop;
            const setInnerEndTop = (endTop: number) => innerEndTop = endTop;
            setUpdateInnerEndTop({f: setInnerEndTop}); // subscribe

            const timer = setInterval(() => {
                if (innerTop + speed > innerEndTop) {

                    setTimeout(() => {
                        clearInterval(timer);
                        const timer2 = setInterval(() => {
                            innerTop -= speed;
                            setTop(innerTop);

                            if (innerTop < startTop) {
                                setUpdateInnerEndTop(null); // unsubscribe
                                clearInterval(timer2);
                                setTop(startTop);
                                close();
                            }
                        }, 30)
                    }, time);
                } else {
                    innerTop += speed;
                    setTop(innerTop);
                }
            }, 30)
        }
    }, [show]);

    if (!show) return null;

    return (
        <Modal
            enableBackground={enableBackground}
            backgroundOnClick={backgroundOnClick}
            backgroundStyle={backgroundStyle}

            width={width}
            height={height}
            modalOnClick={modalOnClick}
            modalStyle={{
                ...modalStyle,
                top: top + 'px',
            }}

            show={show}
        >
            {children ? children : 'message Modal'}
        </Modal>
    );
};

export default ModalMessage;
