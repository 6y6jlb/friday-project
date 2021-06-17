import React, {CSSProperties} from 'react';
import s from "./ModalTwo.module.css";

interface IModal {
    enableBackground?: boolean;
    backgroundStyle?: CSSProperties;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    modalStyle?: CSSProperties;
    modalOnClick?:any;

    show: boolean
}
const ModalTwo: React.FC<IModal> = (
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

    const BackgroundClass = show ? s.modalBackground + ' ' +  s.modalBackgroundActive : s.modalBackground
    const ModalClass = show ? s.modalContent + ' ' +  s.modalContentActive : s.modalContentActive

    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;
    return (
        <>
            <div
                className={enableBackground ? BackgroundClass : BackgroundClass + ' ' + s.DisModalBackground}
                style={{...backgroundStyle}}
                onClick={backgroundOnClick}
            >
                <div
                    className={ModalClass}
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
        </div>

        </>
    );
};

export default ModalTwo;
