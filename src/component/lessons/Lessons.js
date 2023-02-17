import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import CardShow from "./card/CardShow"

import { lessons } from '../../api/api'

const Lessons = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row className='g-4'>
                    {
                        lessons.map(item => <Col key={item.id} md={6} lg={4} xl={3}> <CardShow details={item} /> </Col>)
                    }
                </Row>

            </Container>
        </div>
    )
}

export default Lessons
