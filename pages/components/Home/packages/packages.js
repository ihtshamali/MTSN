import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import Startup from '../packages/start-up.png'
import Enterprise from '../packages/enterprise.png'
import Custom from '../packages/custom.png'
import Link from "next/link"

function Packages() {
  return (
    <>
      <section className='py-5'>
        <Container>
          <h2 className="px-4 px-lg-0 mb-5 text-center text-white">Our Packages</h2>
          <Row>
            <Col>
              <div className="d-flex align-content-stretch mb-4 mb-xxl-0 text-center">
                <div className="card-background membership text-700 fs-10 p-5 p-sm-6 rounded-20 d-flex flex-column flex-grow-1">
                  <div className="flex-grow-1">
                    <Image src={Startup} alt={Startup} width={75} />
                    <h3 style={{ color: 'rgba(217, 217, 217, 1)' }} className="text-center my-4">Startup Plan</h3>
                    <p style={{ color: 'rgba(217, 217, 217, 1)' }} className="fs18 text-center mb-5">
                      Gain a competitive edge in the tech industry with the  help of skilled teams accessible through the cloud.
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <Link href="/cloud-membership" role="button" tabindex="0" className="btn btn-call btn-lg">Learn More</Link>

                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-content-stretch mb-4 mb-xxl-0 text-center">
                <div className="card-background membership text-700 fs-10 p-5 p-sm-6 rounded-20 d-flex flex-column flex-grow-1">
                  <div className="flex-grow-1">
                    <Image src={Enterprise} alt={Enterprise} width={75} />
                    <h3 style={{ color: 'rgba(217, 217, 217, 1)' }} className="text-center my-4">Enterprise Plan</h3>
                    <p style={{ color: 'rgba(217, 217, 217, 1)' }} className="fs18 text-center mb-5">
                      Remotely managing mobile and web development operations is now more streamlined than ever.
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <Link href="/cloud-membership" role="button" tabindex="0" className="btn btn-call btn-lg">Learn More</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-content-stretch mb-4 mb-xxl-0 text-center">
                <div className="card-background membership text-700 fs-10 p-5 p-sm-6 rounded-20 d-flex flex-column flex-grow-1">
                  <div className="flex-grow-1">
                    <Image src={Custom} alt={Custom} width={75} />
                    <h3 style={{ color: 'rgba(217, 217, 217, 1)' }} className="text-center my-4">Custom Plan </h3>
                    <p style={{ color: 'rgba(217, 217, 217, 1)' }} className="fs18 text-center mb-5">
                      Choose and assemble a personalized development team and ecosystem through the cloud.
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <Link href="/cloud-membership" role="button" tabindex="0" className="btn btn-call btn-lg">Learn More</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Packages