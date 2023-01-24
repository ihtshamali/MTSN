import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Hyperledger from "../../public/web3/hyperledger.svg"

function BlockchainTech() {
    return (
        <>
            <section className="pt-4 pt-xl-5">
                <Container>
                    <h2 className="text-white text-center mb-4 fs40">Blockchain Development Technologies</h2>
                    <Row className="text-center align-items-center justify-content-center">
                        <Col className="d-flex justify-content-center bg-white rounded-4 mb-3 mb-lg-4 d-md-flex col-xl-4 col-lg-4 col-md-6">
                            <Image src={Hyperledger} />
                        </Col>
                        <Col className="d-flex justify-content-center bg-white rounded-4 mb-3 mb-lg-4 d-md-flex col-xl-4 col-lg-4 col-md-6">
                            <Image src={Hyperledger} />
                        </Col>
                        <Col className="d-flex justify-content-center bg-white rounded-4 mb-3 mb-lg-4 d-md-flex col-xl-4 col-lg-4 col-md-6">
                            <Image src={Hyperledger} />
                        </Col>
                        <Col className="d-flex justify-content-center bg-white rounded-4 mb-3 mb-lg-4 d-md-flex col-xl-4 col-lg-4 col-md-6">
                            <Image src={Hyperledger} />
                        </Col>
                        <Col className="d-flex justify-content-center bg-white rounded-4 mb-3 mb-lg-4 d-md-flex col-xl-4 col-lg-4 col-md-6">
                            <Image src={Hyperledger} />
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlockchainTech