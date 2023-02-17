import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { ScoreContext } from '../../../context/LessonContextProvider';

import { Card } from 'react-bootstrap';

const CardShow = ({ details }) => {
    const { title, name, image, disabled } = details;
    const { state, dispatch } = useContext(ScoreContext)

    let btnActive = false
    if ((state.lessonStarted.find(item => item.name === title))) {
        btnActive = (state.lessonStarted.find(item => item.name === title)).complete
    }

    return (
        <>
            <Card className="pt-2" style={{ background: "#9f8cca" }}>
                <Card.Img variant="top" src={image} style={{ height: "8rem" }} />
                <Card.Body className="d-flex justify-content-between align-items-center mt-3">
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/lesson/${title}`} className={`text-white btn btn-${btnActive ? "success" : "primary"} ${(disabled || btnActive) ? 'disabled' : ''}`} style={{ textDecoration: "none" }} onClick={() => dispatch({ type: "START", title: title })}>{btnActive ? "تکمیل شده" : "شروع آزمون"}</Link>
                </Card.Body>
            </Card >
        </>
    );
}

export default CardShow;
