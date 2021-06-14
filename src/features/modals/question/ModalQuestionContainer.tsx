import React, {useState} from 'react';
import ModalQuestion from "./ModalQuestion";

const ModalQuestionContainer: React.FC = () => {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState(false);

    const setTrue = () => {
        setAnswer(true);
        setShow(false);
    };
    const setFalse = () => {
        setAnswer(false);
        setShow(false);
    };

    return (
        <>
            <div>
                <button onClick={() => setShow(true)}>show question Modal</button>
                {answer ? <span>Yes</span> : <span>No</span>}
            </div>

            <ModalQuestion
                show={show}

                setTrue={setTrue}
                setFalse={setFalse}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
            />
        </>
    );
};

export default ModalQuestionContainer;
