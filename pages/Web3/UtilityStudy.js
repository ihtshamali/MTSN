import { Col, Container, Row } from 'react-bootstrap'

function UtilityStudy() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1">1.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">Utility Study</h3>
                  <p className="mb-0 text-white fs18">
                    To ensure success, we analyze your requirements and conceptualize potential
                    frameworks and schemes.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1">2.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">Auditing & Consulting</h3>
                  <p className="mb-0 text-white fs18">
                    Through full-service consulting and comprehensive audits, we’ll put
                    your token or app in a position to thrive.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1 ">3.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">UI/UX Design</h3>
                  <p className="mb-0 text-white fs18">
                    An engaging, user-friendly design is integral to the success of your tokens and blockchain
                    apps. That’s why our blockchain development teams always include skilled UI/UX designers.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1 ">4.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">Smart Contract Development</h3>
                  <p className="mb-0 text-white fs18">
                    A Renesis team makes smart contract development and implementation easier,
                    faster, and more affordable. Discover what our approach to blockchain development can do for you.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default UtilityStudy