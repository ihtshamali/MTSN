import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Retail from "../../public/web3/retail.svg"
import Art from "../../public/web3/art.png"
import Music from "../../public/web3/music.png"
import Health from "../../public/web3/health.png"
import Banking from "../../public/web3/banking.png"
import Sports from "../../public/web3/sports.png"
import Games from "../../public/web3/games.png"
import RealEstate from "../../public/web3/real-estate.png"

function FocusIndustries() {
    return (
        <>
            <section className="py-5 bg-purple">
                <Container>
                    <Row className="justify-content-center mb-4 mb-xxl-5">
                        <Col className="col-md-8">
                            <h2 className="mb-4 fs40 text-center text-white">Focus Industries</h2>
                            <p className="mb-0 fs18 text-center text-white">
                                MTSN specializes in assembling talented blockchain development teams
                                for clients in the following sectors:
                            </p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center text-center">
                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Retail} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Retail</h3>
                                <p className="mb-0 text-white fs18">
                                    Unlock a fresh source of income with a tailor-made NFT marketplace.
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Art} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Art</h3>
                                <p className="mb-0 text-white fs18">
                                    Create a new source of income for your art by utilizing custom-made NFT development..
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Music} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Music</h3>
                                <p className="mb-0 text-white fs18">
                                    NFTs open up incredible new opportunities for musicians to engage with their audience.
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Health} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Health Care</h3>
                                <p className="mb-0 text-white fs18">
                                    Blockchain applications safeguard the personal information of patients, staff, and vendors.
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Banking} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Banking</h3>
                                <p className="mb-0 text-white fs18">
                                    Leaders in the finance industry trust blockchain-powered apps - is your bank next in line to do
                                    the same?
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Sports} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Sports</h3>
                                <p className="mb-0 text-white fs18">
                                    Use blockchain technology to establish a connection with your fanbase and strengthen their
                                    support.
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={Games} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Games</h3>
                                <p className="mb-0 text-white fs18">
                                    Stay ahead of the competition by integrating blockchain technology into your games.
                                </p>
                            </div>
                        </div>

                        <div className="mb-3 mb-lg-4 d-md-flex perks col-xl-3 col-lg-4 col-md-6">
                            <div className="p-4 rounded-4 d-flex flex-column">
                                <Image style={{ alignSelf: "center" }} src={RealEstate} width={50} height={50} />
                                <h3 className="fs-4 fw-normal text-white my-4">Real Estate</h3>
                                <p className="mb-0 text-white fs18">
                                    Smart contracts enhance the speed and security of your vital transactions.
                                </p>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FocusIndustries