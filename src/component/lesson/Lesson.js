import React, { useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
//  context
import { ScoreContext } from '../../context/LessonContextProvider'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'
import styles from './lesson.module.css'
//  api
import { lessons } from '../../api/api'
// alert
import { alert } from '../../alert/alert'


let randomIndex = [];
const Lesson = () => {
    const navigate = useNavigate();

    const name = useParams().name
    // find lesson selected
    const lesson = lessons.find(lesson => lesson.title === name)
    const cors = lesson.question
    const { state, dispatch } = useContext(ScoreContext)
    const data = (state.lessonStarted.find(item => item.name === name));
    const index = data.index;



    const chooseHandler = event => {
        dispatch({ type: "INCREASE", title: name })
        if (event.target.innerText === cors[index][1]) {
            dispatch({ type: "CORRECT", title: name })
        } else {
            dispatch({ type: "FALSE", title: name })
        }
    }



    const randomHandler = () => {
        randomIndex = []
        while (true) {
            if (randomIndex.length > 3) {
                return false
            }
            const random = Math.floor(Math.random() * 5)
            if (randomIndex.findIndex((item) => item === random) === -1 && random !== 0) {
                randomIndex.push(random)
            }
        }
    }
    randomHandler()




    if (cors.length > index) {
        return (
            <div className="my-5 text-white" style={{ minHeight: "63vh" }}>
                <Container>
                    <h2 className="d-flex align-items-center"><Link to="/" style={{ textDecoration: "none" }}>آزمون ها</Link> <span className='text-warning'>/</span> {lesson.name}</h2>

                    <div className="border rounded-2 p-3 mt-5">
                        {cors[index][0]}
                    </div>

                    <div className='mt-5'>
                        <Row className='g-5'>
                            {
                                randomIndex.map(item => <Col md={6} key={item}><div className={`border rounded-2 p-3 mx-auto ${styles.choose}`} onClick={chooseHandler} >{cors[index][item]}</div></Col>)
                            }

                        </Row>
                    </div>
                </Container>

            </div >
        )
    } else {
        navigate("/");
        dispatch({ type: "COMPLETE", title: name })
        alert(data.correct,data.false,data.score)
    }
}
export default Lesson

