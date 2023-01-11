import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Consultation() {
    return (
        <>
            <section className='py-5 consultation-bg text-center'>
                <Container>
                    <Row>
                        <Col className='py-4'>
                            <h2 className="fs40 text-white mb-4">Ready to take your tech to the next level?</h2>
                            <p className="fs18 text-white mb-5">
                                Build a winning cloud-based development team with Renesis today.
                            </p>
                            <Link href="/contact-us" role="button" tabindex="0" className="btn btn-call btn-lg">
                                Book Free Consultation
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Consultation