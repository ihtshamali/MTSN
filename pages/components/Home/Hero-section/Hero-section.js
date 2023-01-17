import styles from '../../../../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import team from '../Hero-section/team.png'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../Button/Button'

function Herosection() {
    return (
        <>
        <style jsx>{`
        .h1tag{
            font-size: 48px;
            font-weight: 500;
        }
        .p-tag{
            font-size: 20px;
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
                            <div style={{ padding: "50px 0px" }}>
                                <a style={{ color: "#D96912", fontSize: "16px", fontWeight: "400", cursor: 'text'}} className="text-decoration-none" >One-Stop Cloud Ecosystem</a>
                                <h1 className="h1tag text-white mb-2">
                                    Remote Development, Right at Your Fingertips
                                </h1>
                                <p className="p-tag text-white mb-6">
                                    Discover what our on-demand cloud development teams can do for your bottom line today.
                                </p>
                                <Button btntitle="Book Free Consultation"/>
                                
                            </div>
                        </Col>
                        <Col className="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12" style={{ textAlign: "center" }}>
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