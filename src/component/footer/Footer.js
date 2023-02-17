import React from 'react'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'
// icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='py-4 text-white' style={{ background: "#533b7c" }}>
            <Container>
                <Row>
                    <Col md={6} className="mb-5 mb-md-0">
                        <h2 className='h3 mb-4'>درباره ما</h2>
                        <p className='h6' style={{ textAlign: "justify" }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    </Col>

                    <Col md={6} className='h3 text-end d-flex flex-column align-items-md-end'>
                        <h3 className='mb-4'>ارتباط با ما</h3>
                        <div className="d-flex" style={{gap:"1.5rem"}}>
                            <a href="#" className="text-white"><FaTelegramPlane /></a>
                            <a href="#" className="text-white"><FaInstagram /></a>
                            <a href="#" className="text-white"><FaGithub /></a>
                            <a href="#" className="text-white"><FaYoutube /></a>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
