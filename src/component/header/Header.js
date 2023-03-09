import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ScoreContext } from '../../context/LessonContextProvider';

const Header = () => {
    const { state } = useContext(ScoreContext)
    const score = state.score;
    const count = state.complete;
    return (
        <div className="text-white py-3 shadow  bg-body-tertiary" style={{ background: "#101827" }}>
            <Container>
                <Row>
                    <Col> <h1>آزمون ها</h1> </Col>

                    <Col className="d-flex flex-column align-items-center">
                        <div>امتیاز شما: <span className="badge bg-secondary"  style={{direction:"ltr",  unicodeBidi: "bidi-override"}}>{(score).toFixed(2)}</span></div>
                        <div>آزمون های پایان یافته : <span className="badge bg-secondary"> {count}</span></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header
