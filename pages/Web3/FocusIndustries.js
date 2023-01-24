import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import RetailImg from "../../public/web3/retail.svg"

function FocusIndustries() {
    return (
        <>
            <section className="py-5 bg-purple">
                <Container>
                    <Row className="justify-content-center mb-4 mb-xxl-5">
                        <Col className="col-md-8">
                            <h2 className="mb-4 fs40 text-center text-white">Focus Industries</h2>
                            <p className="mb-0 fs18 text-center text-white">
                                Renesis specializes in assembling talented blockchain development teams
                                for clients in the following sectors:
                            </p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center text-center">
                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Retail</h3>
                                <p className="mb-0 text-white fs18">
                                    Tap into a brand new revenue stream with a custom-developed NFT marketplace.
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Art</h3>
                                <p className="mb-0 text-white fs18">
                                    Unlock a new revenue stream for your artwork with custom NFT development.
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Music</h3>
                                <p className="mb-0 text-white fs18">
                                    NFTs create amazing new possibilities for musicians to connect with listeners.
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Health Care</h3>
                                <p className="mb-0 text-white fs18">
                                    Blockchain apps protect the personal info of your patients, staff, and vendors.
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Banking</h3>
                                <p className="mb-0 text-white fs18">
                                    Finance-sector leaders rely on blockchain-enabled apps – is your bank next?
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Sports</h3>
                                <p className="mb-0 text-white fs18">
                                    Leverage blockchain technology to connect with your fans and build support.
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Games</h3>
                                <p className="mb-0 text-white fs18">
                                    Gain a competitive advantage by incorporating blockchain into your games.
                                </p>
                            </div>
                        </Col>

                        <Col className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RetailImg} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Real Estate</h3>
                                <p className="mb-0 text-white fs18">
                                    Smart contracts bring speed and security to your most important transactions
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FocusIndustries