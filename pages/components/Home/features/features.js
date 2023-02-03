import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import features from '../../Home/membership/memberships.png'
import Discovery from "../features/communication-with-renesis.webp"
import Launch from "../features/launch.webp"
import Visualization from "../features/visualization-with-renesis.webp"

function Features() {
    return (
        <>
            <section className='pt-5'>
                <div className="d-none d-lg-block position-relative">
                    <Container>
                        <h2 className='fs40 text-white text-center'>
                            Our Process
                        </h2>
                    </Container>
                    <Container>
                        <div className='features mt-5 text-white'>
                            <Row className="dis-padd pb-md-26 pt-lg-18 pb-lg-40 pt-xl-26 pb-xl-50 py-xxl-50">
                                <Col className="feature col-xxl-5 col-lg-5 col-md-9 col-12">
                                    <h3 className="fs40 mb-4 mb-xl-8">Discovery</h3>
                                    <p className="fs18 mb-0">
                                        The first step to any profitable (tech) product is discovery – before
                                        creating your masterpiece, even the best team has to understand the
                                        overall project vision and scope, as well as the general needs of your
                                        stakeholders and users. We’ll take a deep dive into your business
                                        requirements including the tech  stack, and market position to see
                                        where we stand.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="Visualpadd pt-lg-20 pb-lg-50 pt-xl-40 pb-xl-50 pt-xxl-30 py-xxl-50 justify-content-end">
                                <Col className="feature col-xxl-5 col-lg-5 col-md-9 col-12">
                                    <h3 className="fs40 mb-4 mb-xl-8">Visualization</h3>
                                    <p className="fs18 mb-0">
                                        After successfully undertaking the discovery phase we know what you need.
                                        Now we need to take steps towards making it a reality. To do this, our teams
                                        create high-quality mock-ups and prototypes so that we can a) visualize your
                                        idea and b) show you and your team what can be expected from your final
                                        delivered product.
                                    </p>
                                </Col>
                            </Row>

                            <Row className="Prep-padd pt-lg-30 pt-xl-50 pt-xxl-50">
                                <Col className="feature col-xxl-5 col-lg-5 col-md-9 col-12">
                                    <h3 className="fs40 mb-4 mb-xl-8">Prepare to Launch</h3>
                                    <p className="fs18 mb-0">Here’s where the fun starts. During the launch prep
                                        stage, your dedicated MTSN team will deliver your custom-developed
                                        project so that you can take it to market. If there are any questions
                                        or concerns, we will help smooth things out to facilitate a stress-free launch.
                                    </p>
                                </Col>
                            </Row>



                        </div>

                    </Container>
                </div>

                {/* mobile */}
                <div className="d-lg-none featuresContent text-white">
                    <Container>
                        <Row>
                            <Col className="feature">
                                <h3 className="h2 mb-4 mb-xl-8">Discovery</h3>
                                <p className="mb-lg-0">The first step to any profitable (tech) product is discovery – before
                                    creating your masterpiece, even the best team has to understand the
                                    overall project vision and scope, as well as the general needs of your
                                    stakeholders and users. We’ll take a deep dive into your business
                                    requirements including the tech  stack, and market position to see
                                    where we stand.</p>
                                <Image src={Discovery} width={360} height={400} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="feature">
                                <h3 className="h2 mb-4 mb-xl-8">Visualization</h3>
                                <p className="mb-lg-0">
                                    After successfully undertaking the discovery phase we know what you need.
                                    Now we need to take steps towards making it a reality. To do this, our teams
                                    create high-quality mock-ups and prototypes so that we can a) visualize your
                                    idea and b) show you and your team what can be expected from your final
                                    delivered product.
                                </p>
                                <Image src={Visualization} width={360} height={400} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="feature">
                                <h3 className="h2 mb-4 mb-xl-8">Prepare to Launch</h3>
                                <p className="mb-lg-0">
                                    Here’s where the fun starts. During the launch prep
                                    stage, your dedicated MTSN team will deliver your custom-developed
                                    project so that you can take it to market. If there are any questions
                                    or concerns, we will help smooth things out to facilitate a stress-free launch.
                                </p>
                                <Image src={Launch} width={360} height={400} />
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
        </>
    )
}

export default Features