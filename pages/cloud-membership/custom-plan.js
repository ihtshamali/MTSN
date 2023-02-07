import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import img3 from "../../public/cloud-membership/cloud-img4.svg"
import Button from "../../pages/components/Button/Button"

function Customplan() {
    return (
        <>
            <section id="customised-plan" className="py-4 overflow-hidden position-relative">
                <Container>
                    <Row className="align-items-md-center justify-content-md-between">
                        <div className="startup-bg col-md-3">
                            <Image src={img3}
                                alt="cloud-img-2"
                                className="cloud-img-2"
                            />
                        </div>
                        <div className="col-md-8 text-white">
                            <h2 className="mb-4">Personalized Plan</h2>
                            <h3 className="mb-4 fs-4">Your personal plan for achieving product success</h3>
                            <p className="fs18">
                                Create a unique development team with access to all the talent and resources we offer.
                            </p>
                            <Row>
                                <div className="d-flex flex-column col-lg-8">
                                    <strong className="d-block fs-5 mb-4">Your cloud-based team comprises of:</strong>
                                    <div className="fs-5 mb-4 mb-lg-7 rt-nav nav">
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Business Manager</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Full-Stack Developer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Project Manager</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">iOS Developer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Solution Architect</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">Android Developer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">AI Engineer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">QA Engineer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">UI/UX Designer</div>
                                        <div className="mb-4 w-50 float-left position-relative ps-4 nav-item">HR Specialist</div>

                                    </div>
                                </div>
                                <div className="d-flex flex-column col-lg-4">
                                    <strong className="d-block fs-5 mb-4">Exclusive Benefits:</strong>
                                    <div className="fs-5 mb-4 mb-lg-7 rt-nav nav">
                                        <div className="mb-4 float-left position-relative ps-3 nav-item">Reduced Hourly Rates</div>
                                        <div className="mb-4 float-left position-relative ps-3 nav-item">Project Management Suite</div>
                                        <div className="mb-4 float-left position-relative ps-3 nav-item">60 Hours of UI/UX and Front-end</div>
                                    </div>
                                </div>
                            </Row>
                            <Button btntitle="Book Free Consultation" />
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Customplan