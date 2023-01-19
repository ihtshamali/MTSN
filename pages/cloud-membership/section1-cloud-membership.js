import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../public/cloud-membership/cloud-img2.png"

function Section1cloudmembership() {
    return (
        <>
            <section style={{backgroundColor: "#0E1120"}} className="py-10 py-lg-20 overflow-hidden">
                <Container>
                    <Row className="text-white align-items-md-center justify-content-md-between">
                        <Col className="col-lg-5 col-md-6">
                            <h2 className="mb-4 fs40">Access development teams on-demand</h2>
                            <p className="m-0 fs18">
                                Renesis puts world-class talent right at your fingertips with cloud-based
                                development teams that know what it takes to walk your projects across the
                                finish line. Discover what our industry-vetted developers, designers,
                                project managers, and HR professionals can do for your web apps, mobile
                                apps, and Blockchain projects today.
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