import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import SmartContractImg from "../../public/web3/smartcontract.png"


function SmartContract() {
    return (
        <>
            <section className="py-5 py-xl-20 text-white" style={{ backgroundColor: "#0E1120" }}>
                <Container>
                    <Row className="flex-row-reverse align-items-center">
                        <Col className="text-center d-flex justify-content-center col-xl-5">
                            <Image src={SmartContractImg}
                                alt={SmartContractImg}
                                className="" />
                        </Col>
                        <Col className="p-0 col-xl-7">
                            <Row className="mx-0">
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">Smart Contracts</h3>
                                        <p className="mb-0 fs18">Executed automatically when certain conditions are met, bring transparency, speed, accuracy,
                                            and trust to your processes by using blockchain technology. An on-demand MTSN development
                                            team can assist you in utilizing the benefits of smart contracts.
                                        </p>
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">Decentralized apps</h3>
                                        <p className="mb-0 fs18 text-justify">By using an open-source decentralized application, you can ensure the privacy and security of
                                            your customers' and clients' personal information. With MTSN, you can easily access
                                            industry-leading expert-level development support.
                                        </p>
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">NFT Marketplaces</h3>
                                        <p className="mb-0 fs18">MTSN simplifies the process of developing NFT marketplaces for your company. Contact us
                                            with the specifics of your project, and we will promptly assemble a world-class blockchain
                                            development team for you.
                                        </p>
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">Whitepaper Development</h3>
                                        <p className="mb-0 fs18">If you need assistance with creating a whitepaper for your cryptocurrency or NFT project, MTSN
                                            can help. Allow our hand-picked team of subject matter experts to take your complex project to
                                            the next level.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SmartContract