import { Col, Container, Row } from 'react-bootstrap'

function UtilityStudy() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <div className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1">1.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">Utility Study</h3>
                  <p className="mb-0 text-white fs18">
                    To guarantee success, we evaluate your needs and devise possible frameworks and strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1">2.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">Auditing & Consulting</h3>
                  <p className="mb-0 text-white fs18">
                    We will position your token or app for success through comprehensive consulting and audits
                    services.
                  </p>
                </div>
              </div>
            </div>
            <div className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1 ">3.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">UI/UX Design</h3>
                  <p className="mb-0 text-white fs18">
                    The design of your tokens and blockchain apps must be user-friendly and engaging in order for
                    them to be successful. To ensure this, our blockchain development teams include experienced
                    UI/UX designers.
                  </p>
                </div>
              </div>
            </div>
            <div className="bc-features col-md-6">
              <div className="my-4">
                <div className="float-start pe-5">
                  <h6 className="count d-block h1 mb-0 lh-1 ">4.</h6>
                </div>
                <div className="overflow-hidden">
                  <h3 className="mb-2 text-white">Smart Contract Development</h3>
                  <p className="mb-0 text-white fs18">
                    Our MTSN team simplifies, speeds up, and lowers the cost of smart contract development and
                    implementation. Find out how our blockchain development approach can benefit you.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default UtilityStudy