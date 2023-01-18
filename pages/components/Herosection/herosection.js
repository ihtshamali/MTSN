import styles from '../../../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Link from 'next/link'
import team from '../Home/Hero-section/team.png'


function Hero(props) {
    return (
        <>
            <style jsx>{`
        .h1tag{
            font-size: 45px;
            font-weight: 500;
        }
        .p-tag{
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 20px;
        }  
        @media(max-width: 767px){
            .p-tag{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 20px;
            }
        } 
        `}
            </style>
            <section>
                <div className="col-lg-12 col-12" style={{ backgroundColor: "#242146", color: "white" }}>
                    <Container>
                        <Row>
                            <Col style={{ alignSelf: "center" }}>
                                <div className="py-5" >
                                    <span style={{ color: "#D96912", fontSize: "16px", fontWeight: "400", cursor: 'text' }} className="text-decoration-none" >
                                        {props.spantext}
                                    </span>
                                    <h1 className="h1tag text-white mb-2">
                                        {props.headingtitle}
                                    </h1>
                                    <p className="p-tag text-white mb-6">
                                        {props.paragraphtext}
                                    </p>
                                    <Link style={{ background: "linear-gradient(90.43deg, #E16C12 3.69%, #8E440C 59.05%)" }}
                                        href="/contact-us" role="button" tabindex="0"
                                        className="btn btn-lg text-decoration-none text-white position-relative at-zindex3">
                                        {props.btntitle}
                                    </Link>

                                </div>
                            </Col>
                            <Col className="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12" style={{ textAlign: "center" }}>
                                
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Hero