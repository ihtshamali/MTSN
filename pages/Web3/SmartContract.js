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
                                        <p className="mb-0 fs18">Executed automatically when certain conditions are met,
                                            transparent, blockchain-based smart contracts bring speed, accuracy,
                                            and trust to your processes. An on-demand MTSN development team can
                                            help you take advantage.
                                        </p>
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">Decentralized apps</h3>
                                        <p className="mb-0 fs18 text-justify">An open-source decentralized application
                                            can be a great way to protect the privacy and personal information
                                            of your customers and clients. With MTSN, industry-leading
                                            expert-level development assistance is only a few clicks away.
                                        </p>
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">NFT Marketplaces</h3>
                                        <p className="mb-0 fs18">With MTSN, developing NFT marketplaces for
                                            your company has never been easier. Simply reach out with some
                                            details on your project and we’ll assemble your world-class
                                            blockchain development team within a few days.
                                        </p>
                                    </div>
                                </Col>
                                <Col className="col-md-6">
                                    <div className="py-5">
                                        <h3 className="mb-3 fs28">Whitepaper Development</h3>
                                        <p className="mb-0 fs18">Need help putting together a blockchain whitepaper
                                            for your cryptocurrency or NFT project? We’ve got you covered. Take your
                                            complex projects to the next level with a hand-selected team of subject
                                            matter experts from MTSN.
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