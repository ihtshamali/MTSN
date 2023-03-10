import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import img3 from "../../public/cloud-membership/cloud-img3.svg"
import Button from "../../pages/components/Button/Button"

function Startupplan() {
    return (
        <>
            <section id="startup-plan" className="py-4 overflow-hidden position-relative">
                <Container>
                    <Row className="align-items-md-center justify-content-md-between">
                        <div className="startup-bg col-md-3">
                            <Image src={img3}
                                alt="cloud-img-2"
                                className="cloud-img-2"
                            />
                        </div>
                        <Col className="col-md-8 text-white">
                            <h2 className="mb-4">Initial Business Plan</h2>
                            <h3 className="mb-4 fs-4">Economical Solution with Skilled, Fast, and Efficient Service</h3>
                            <p className="fs18">
                                Gain access to expert support to initiate your small and medium-sized projects.
                            </p>
                            <Row>
                                <div className="d-flex flex-column col-lg-8">
                                    <strong className="d-block fs-5 mb-5">Your cloud-based team comprises of:</strong>
                                    <div className="fs-5 mb-4 mb-lg-7 rt-nav nav">
                                        <div class="mb-4 w-50 float-left position-relative ps-3 nav-item">UI/UX Designer</div>
                                        <div class="mb-4 w-50 float-left position-relative ps-3 nav-item">A Developer</div>
                                        <div class="mb-4 w-50 float-left position-relative ps-3 nav-item">Project Coordinator</div>
                                        <div class="mb-4 w-50 float-left position-relative ps-3 nav-item">QA Engineer</div>
                                        <div class="mb-4 w-50 float-left position-relative ps-3 nav-item">HR Specialist</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-lg-4">
                                </div>
                            </Row>
                            <Button btntitle="Book Free Consultation" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Startupplan 