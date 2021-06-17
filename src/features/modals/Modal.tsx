import React, {CSSProperties} from 'react';
import s from "./Modal.module.css";

interface IModal {
    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?: () => void;

    show: boolean
}

const Modal: React.FC<IModal> = (
    {
        enableBackground,
        backgroundStyle,
        backgroundOnClick = () => {},

        width,
        height,
        modalStyle,
        modalOnClick = () => {},

        show,
        children,
    }
) => {
    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

    if (!show) return null;

    return (
        <>
            {enableBackground && <div
                className={s.modalBackground}
                style={{...backgroundStyle}}
                onClick={backgroundOnClick}
            />}
            <div
                className={s.modalContent}
                style={{
                    top,
                    left,
                    width,
                    height,

                    ...modalStyle,
                }}
                onClick={modalOnClick}
            >
                {children}
            </div>
        </>
    );
};

export default Modal;
