import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Hyperledger from "../../public/web3/Group.svg"

function BlockchainTech() {
    return (
        <>
            <section className="py-4 py-xl-5">
                <Container>
                    <h2 className="text-white text-center mb-4 fs40">Blockchain Development Technologies</h2>
                    <Row className="text-center align-items-center justify-content-center">
                        <Col className="">
                            <Image src={Hyperledger} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlockchainTech