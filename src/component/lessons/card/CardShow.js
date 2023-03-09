import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { ScoreContext } from '../../../context/LessonContextProvider';

import { Card } from 'react-bootstrap';

const CardShow = ({ details }) => {
    const { title, name, image, disabled } = details;
    const { state, dispatch } = useContext(ScoreContext)

    let btnActive = false;
    let btnContinue = false;

    const lessonChoice = (state.lessonStarted.find(item => item.name === title))

    if (lessonChoice) {
        btnActive = lessonChoice.complete
        btnContinue = lessonChoice.continue
    }


    return (
        <>
            <Card className="pt-4 text-white shadow" style={{ background: "#1a2539" }}>
                <Card.Img variant="top" src={image} style={{ height: "8rem" }} />
                <Card.Body className="d-flex justify-content-between align-items-center mt-3">
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/lesson/${title}`} className={`text-white btn btn-${btnContinue ? "warning" : btnActive ? "success" : "primary"} ${(disabled || btnActive) ? 'disabled' : ''}`} style={{ textDecoration: "none" }} onClick={() => dispatch({ type: "START", title: title })}>{btnContinue ? "ادامه" : btnActive ? "تکمیل شده" : "شروع آزمون"}</Link>
                </Card.Body>
            </Card >
        </>
    );
}

export default CardShow;
