import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'


function Memberships() {
    return (
        <>
            <style jsx>{`
          .px-xxl-95{
            padding-right: 9.5rem;
            padding-left: 9.5rem;
          }
        @media(max-width: 767px){
            .px-xxl-95{
                padding-right: 20px;
                padding-left: 20px;
              }
        } 
        `}
            </style>
            <section style={{ backgroundColor: '#151720' }} className='pt-5 pb-4 py-mobile-0'>
                <Container>
                    <h2 className='fs40 py-4 px-lg-0 mb-2 text-center text-white'>Cloud Membership</h2>
                    <h3 style={{ color: 'rgba(156, 153, 153, 1)' }} className='fs28 mb-4 text-center'>Cut costs, not corners</h3>
                    <p style={{ color: 'rgba(156, 153, 153, 1)' }} className='fs18 px-xxl-95 text-center mb-5 mb-lg-12'>
                        Utilizing cloud-based remote work allows businesses to access top-tier development talent
                        from around the world at a more affordable cost compared to building an in-house team.
                    </p>

                    <Row className='adoptDocker position-relative'>
                        <span></span>
                        <div className='px-12 pb-12 pb-md-0 col-md-6'>
                            <div className='text-center'>
                                <h4 className="fs28 mb-4 mb-md-12 text-white">Development is challenging</h4>
                                <ul style={{ color: 'rgba(156, 153, 153, 1)' }} className="fontsize18 list-unstyled mb-4 px-3">
                                    <li>Hiring a local development team can be costly, while outsourced</li>
                                    <li>talent may not always meet expectations. This can leave </li>
                                    <li>businesses feeling stuck and overwhelmed, rather than </li>
                                    <li>enjoying a streamlined development process.</li>

                                </ul>
                            </div>
                        </div>
                        <div className='px-12 col-md-6'>
                            <div className='text-center'>
                                <h4 className="fs28 mb-4 mb-md-12 text-white">MTSN makes things easier</h4>
                                <ul style={{ color: 'rgba(156, 153, 153, 1)' }} className="fontsize18 list-unstyled mb-0 px-3">
                                    <li>MTSN teams work 100% remote to cut costs for our clients</li>
                                    <li>All MTSN developers and designers have a track record of success </li>
                                    <li>We provide the ultimate blend of qualified tech talent and affordability</li>
                                    <li>Our cloud-based teams deliver high-quality, high-ROI results</li>
                                </ul>
                            </div>


                        </div>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Memberships
