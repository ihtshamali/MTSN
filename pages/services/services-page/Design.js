import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import design from "../../../public/services/design.svg"
import Button from '../../components/Button/Button'

function Design(props) {
    return (
        <>
        <style jsx>{`
        .t-justify{
            text-align: justify;
        }
        `}
        </style>
            <section className={props.sectionclass}>
                <Container>
                    <Row className={props.rowclass}>
                        <Col className={props.firstcolclass}>
                            <Image src={props.ServicePicture}
                                alt="Design"
                                className={props.ImageStyle}
                            />
                        </Col>
                        <Col className={props.secondcolclass}>
                            <h2 className="mb-4 text-capitalize">{props.heading}</h2>
                            <p className="mb-4 fs18 t-justify">
                                {props.paragraph}
                            </p>
                            <Button btntitle="Learn More"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Design