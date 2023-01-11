import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Stripe from '../integrations/stripe.png'
import Agora from '../integrations/agora.png'
import Twilio from '../integrations/twilio.png'
import Paypal from '../integrations/paypal.png'
import Analytics from '../integrations/analytics.png'

function Integrations() {
    return (
        <>
            <section style={{backgroundColor: 'rgba(83, 83, 83, 0.39)'}} className='py-5'>
                <Container>
                    <Row className='justify-content-md-between align-items-md-center py-3'>
                        <Col className='mb-8 mb-lg-0 col-xl-6 col-lg-6 col-12 text-white'>
                            <h2 className="mb-4 mb-xl-8 fs40">Integrations</h2>
                            <p className='fs18'>Integrations are a crucial component of a successful app, 
                                much like laces are to a running shoe. Our developers excel
                                in integrating a variety of leading services, including social
                                networks and payment systems, to enhance the functionality
                                and value of your product.
                            </p>
                        </Col>
                        <Col>
                            <ul className='integrationList list-unstyled d-flex flex-wrap mb-0'>
                                <li className='d-flex justify-content-center align-items-center py-3 px-3'>
                                    <Image src={Stripe} 
                                    alt="Stripe"
                                    width={150}
                                    />
                                </li>
                                <li className='d-flex justify-content-center align-items-center py-3 px-3'>
                                    <Image src={Agora} 
                                    alt="Agora"
                                    width={150}
                                    />
                                </li>
                                <li className='d-flex justify-content-center align-items-center py-3 px-3'>
                                    <Image src={Twilio} 
                                    alt="Twilio"
                                    width={150}
                                    />
                                </li>
                                <li className='d-flex justify-content-center align-items-center py-3 px-3'>
                                    <Image src={Paypal} 
                                    alt="Paypal"
                                    width={150}
                                    />
                                </li>
                                <li className='d-flex justify-content-center align-items-center py-3 px-3'>
                                    <Image src={Analytics} 
                                    alt="Analytics"
                                    width={150}
                                    />
                                </li>
                                <li className='d-flex justify-content-center align-items-center py-3 px-3'>
                                    <Image src={Stripe} 
                                    alt="Stripe"
                                    width={150}
                                    />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Integrations