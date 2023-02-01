import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import img4 from "../../public/cloud-membership/cloud-img4.svg"
import Button from "../../pages/components/Button/Button"

function Enterpriseplan() {
    return (
        <>
            <section id="enterprise-plan" style={{ backgroundColor: "#0E1120" }} className="py-10 py-lg-20 overflow-hidden position-relative plan">
                <Container>
                    <Row className="align-items-md-center justify-content-md-between flex-row-reverse">
                        <Col className="startup-bg col-md-3">
                            <Image src={img4}
                                alt="cloud-img-2"
                                className="cloud-img-2"
                            />
                        </Col>
                        <Col className="col-md-8 text-white">
                            <h2 className="mb-4 fs40">Corporate Plan</h2>
                            <h3 className="mb-4 fs-4">Top-notch professionals for challenging development initiatives</h3>
                            <p className="fs18 mb-4">
                                Enhance the performance and outcome of your current and upcoming projects with our
                                high-end cloud development package
                            </p>
                            <Row>
                                <Col className="d-flex flex-column col-lg-4">
                                    <strong className="d-block fs-5 mb-4">Exclusive Perks:</strong>
                                    <div className="fs-5 mb-4 mb-lg-7 rt-nav nav">
                                        <div className="mb-4 float-left position-relative ps-3 nav-item">Reduced Hourly Rates</div>
                                        <div className="mb-4 float-left position-relative ps-3 nav-item">Project Management Suite</div>
                                        <div className="mb-4 float-left position-relative ps-3 nav-item">60 Hours of UI/UX and Front-end</div>
                                    </div>
                                </Col>
                                <Col className="d-flex flex-column col-lg-8">
                                    <strong className="d-block fs-5 mb-4">Your cloud-based team comprises of:</strong>
                                    <div className="fs-5 mb-5 mb-lg-7 rt-nav nav">
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Project Manager</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Solution Architect</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">UI/UX Designer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Full-Stack Developer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">iOS Developer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Android Developer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">QA Engineer</div>
                                    </div>
                                </Col>
                            </Row>
                            <Button btntitle="Book Free Consultation" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Enterpriseplan