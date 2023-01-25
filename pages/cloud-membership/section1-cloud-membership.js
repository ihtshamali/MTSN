import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../public/cloud-membership/cloud-img2.png"

function Section1cloudmembership() {
    return (
        <>
            <section style={{ backgroundColor: "#0E1120" }} className="py-10 py-lg-20 overflow-hidden">
                <Container>
                    <Row className="text-white align-items-md-center justify-content-md-between">
                        <Col className="col-lg-5 col-md-6">
                            <h2 className="mb-4 fs40">Acquire Development Teams On-Demand</h2>
                            <p className="m-0 fs18">
                                MTSN provides you with top-notch expertise through their cloud-based development
                                teams who possess the skills to successfully complete your projects. Experience the benefits of
                                working with our thoroughly vetted developers, designers, project managers, and HR
                                professionals on your web apps, mobile apps, and Blockchain projects now.
                            </p>
                        </Col>
                        <Col className="d-flex justify-content-end col-md-5">
                            <Image src={img1}
                                alt="cloud-img-1"
                                className="cloud-img-1"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section1cloudmembership