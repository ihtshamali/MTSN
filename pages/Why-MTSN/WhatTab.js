import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import LetUsKnow from "../../public/why-mtsn/let-us-know.svg"
import ConnectVirtualTeam from "../../public/why-mtsn/connect-with-virtual-team.svg"
import LevelUp from "../../public/why-mtsn/level-up.svg"
import Sleep from "../../public/why-mtsn/sleep-easy.svg"
import LetUsKnowImg from "../../public/why-mtsn/let-us-know.png"
import VirtualTeam from "../../public/why-mtsn/virtual-team.png"
import Level from "../../public/why-mtsn/level-up-illustration.png"

function WhatTab() {
    return (
        <>
            <Container>
                <Row className="align-items-center py-4 py-lg-5 flex-row-reverse">
                    <Col className="col-md-5 col-12">
                        <Image src={LetUsKnowImg} className="ConnectVirtual" />
                    </Col>
                    <Col className="ps-5 pt-10 pt-md-0 col-md-7 col-12">
                        <h2 className="fs40 d-flex align-items-center ms-n13">
                            <span className="rounded-circle border-orange text-orange 
                        d-inline-block vertical-middle fs18 fw-normal w-34 h-34 me-4 text-center py-1 
                        flex-shrink-0">
                                1
                            </span>
                            <span className="text-white">Let us know what you need.</span>
                        </h2>
                        <p className="fw500 text-white">
                            Provide info on your tech stack and project-specific requirements
                        </p>
                        <p class="mb-0 text-white">
                            Getting started with MTSN is easy. Simply schedule a free consultation
                            with one of our project coordinators to discuss your options, explore your
                            possibilities, and get the ball rolling on your complex development project.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center py-4 py-lg-5 flex-row-reverse">
                    <Col className="col-md-5 col-12">
                        <Image src={VirtualTeam} className="ConnectVirtual"/>
                    </Col>
                    <Col className="ps-5 pt-10 pt-md-0 col-md-7 col-12">
                        <h2 className="fs40 d-flex align-items-center ms-n13">
                            <span className="rounded-circle border-orange text-orange 
                        d-inline-block vertical-middle fs18 fw-normal w-34 h-34 me-4 text-center py-1 
                        flex-shrink-0">
                                2
                            </span>
                            <span className="text-white">Connect with your virtual team.</span>
                        </h2>
                        <p className="fw500 text-white">
                            Within a few days, we’ll compile a talented team for your project
                        </p>
                        <p class="mb-0 text-white">
                            From NFT development to UI/UX design, our pool of talented contractors
                            has experience bringing a wide variety of B2C and B2B tech products to
                            life. Find the perfect development team for your vision with MTSN today.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center py-4 py-lg-5 flex-row-reverse">
                    <Col className="col-md-5 col-12 text-center">
                        <Image src={Level} className="levelup"/>
                    </Col>
                    <Col className="ps-5 pt-10 pt-md-0 col-md-7 col-12">
                        <h2 className="fs40 d-flex align-items-center ms-n13">
                            <span className="rounded-circle border-orange text-orange 
                        d-inline-block vertical-middle fs18 fw-normal w-34 h-34 me-4 text-center py-1 
                        flex-shrink-0">
                                3
                            </span>
                            <span className="text-white">Take your project to the next level.</span>
                        </h2>
                        <p className="fw500 text-white">
                            Discover what a cloud development ecosystem can do for you
                        </p>
                        <p class="mb-0 text-white">
                            Working with a MTSN team is like having a department of your office collaborating
                            off-site. For the entire collaboration, your MTSN team will be committed to
                            ensuring you get the elite development you deserve.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-center py-4 py-lg-5 flex-row-reverse">
                    <Col className="col-md-5 col-12">
                        <Image src={Sleep} className="ConnectVirtual" />
                    </Col>
                    <Col className="ps-5 pt-10 pt-md-0 col-md-7 col-12">
                        <h2 className="fs40 d-flex align-items-center ms-n13">
                            <span className="rounded-circle border-orange text-orange 
                        d-inline-block vertical-middle fs18 fw-normal w-34 h-34 me-4 text-center py-1 
                        flex-shrink-0">
                                4
                            </span>
                            <span className="text-white">Sleep easy with risk-free collaboration</span>
                        </h2>
                        <p className="fw500 text-white">
                            Personnel issues will be resolved promptly (at no cost to you)
                        </p>
                        <p class="mb-0 text-white">
                            All MTSN teams come with an industry-leading guarantee. If you aren’t satisfied
                            with the skill level provided or other aspects of collaboration, simply let us know
                            and we’ll find a more suitable match for your project.
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default WhatTab
