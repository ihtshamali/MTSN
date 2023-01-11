import styles from '../../../../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import team from '../Hero-section/team.png'
import Image from 'next/image'
import Link from 'next/link'

function Herosection() {
    return (
        <>
        <section>
            <div className="col-lg-12 col-12" style={{ backgroundColor: "#242146", color: "white" }}>
                <Container>
                    <Row>
                        <Col style={{ alignSelf: "center" }}>
                            <div style={{ padding: "50px 0px" }}>
                                <a style={{ color: "#D96912", fontSize: "16px", fontWeight: "400", cursor: 'text'}} className="text-decoration-none" href="#">One-Stop Cloud Ecosystem</a>
                                <h1 style={{fontSize: "48px", fontWeight: "500"}} className="text-white mb-2">
                                    Remote Development, Right at Your Fingertips
                                </h1>
                                <p style={{fontSize: "20px", fontWeight: "400"}}  className="text-white mb-6">
                                    Discover what our on-demand cloud development teams can do for your bottom line today.
                                </p>
                                <Link style={{background: "linear-gradient(90.43deg, #E16C12 3.69%, #8E440C 59.05%)"}} href="/contact-us" role="button" tabindex="0" className="btn btn-lg text-decoration-none text-white position-relative at-zindex3">Book Free Consultation
                                </Link>
                                
                            </div>
                        </Col>
                        <Col style={{ textAlign: "center" }}>
                            <div>
                                <Image src={team}
                                    alt="Team"
                                    width={510}
                                    height={610} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </section>
        </>
    )
}

export default Herosection