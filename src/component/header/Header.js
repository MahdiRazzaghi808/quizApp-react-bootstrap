import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ScoreContext } from '../../context/LessonContextProvider';

const Header = () => {
    const { state } = useContext(ScoreContext)
    const score = state.score;
    const count = state.complete;
    return (
        <div className="text-white py-3" style={{ background: "#533b7c" }}>
            <Container>
                <Row>
                    <Col> <h1>آزمون ها</h1> </Col>

                    <Col className="d-flex flex-column align-items-center">
                        <div>امتیاز شما: {(score).toFixed(2)}</div>
                        <div>آزمون های پایان یافته : {count}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header
