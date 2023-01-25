import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
// import WhatIsMtsn from "../../public/why-mtsn/what-is-renesis.png"

function HowTab() {
    return (
        <>
            <section className="py-4 py-lg-5 text-white">
                <Container>
                    <Col className="col-xxl-6 col-lg-9">
                        <h2 className="mb-5 text-white">
                            Discover a smarter way to develop with Renesis.
                        </h2>
                    </Col>
                    <Row className="ui-features justify-content-between">
                        <Col className="col-xl-5 col-md-6">
                            <div className="list-group-item p-0 pb-5 ps-5">
                                <strong className="d-block fs18 fw500 pb-2">Flexible Deployment</strong>
                                <p class="mb-0">It doesn’t matter what size your company is or what type of
                                    technology stack you are using – Renesis specializes in building dynamic,
                                    on-demand teams that are capable of seamlessly integrating into your
                                    company and thriving in any environment.
                                </p>
                            </div>
                        </Col>

                        <Col className="col-xl-5 col-md-6">
                            <div className="list-group-item p-0 pb-5 ps-5">
                                <strong className="d-block fs18 fw500 pb-2">100% Remote</strong>
                                <p class="mb-0">
                                    Building out a development team? Renesis creates cloud-based
                                    fully remote development ecosystems incorporating role-specific talent from
                                    across the globe. Discover what our pool of world-class developers can do
                                    for your next project today.
                                </p>
                            </div>
                        </Col>

                        <Col className="col-xl-5 col-md-6">
                            <div className="list-group-item p-0 pb-5 ps-5">
                                <strong className="d-block fs18 fw500 pb-2">Full Integration</strong>
                                <p class="mb-0">
                                    At Renesis, we recognize the importance of company dynamics and
                                    culture fit. Our teams come with a risk-free guarantee – if you
                                    aren’t happy with the way our talent has integrated into your
                                    operations just let us know within a week and we’ll source a better match.
                                </p>
                            </div>
                        </Col>

                        <Col className="col-xl-5 col-md-6">
                            <div className="list-group-item p-0 pb-5 ps-5">
                                <strong className="d-block fs18 fw500 pb-2">Skill Augmentation</strong>
                                <p class="mb-0">
                                    Some clients rely on Renesis to form the entirety of their development team,
                                    while others are looking to augment their existing skills and capabilities.
                                    In either event, we’ve got the expert personnel needed to take your complex
                                    projects to new heights.
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}

export default HowTab