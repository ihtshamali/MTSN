import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import Check from "../../public/why-mtsn/checked.png"
import Remove from "../../public/why-mtsn/remove.png"


function WhyTab() {
  return (
    <>
      <Container>
        <Row>
          <div className="table-border position-relative">
            <div className="text-center text-black w-100">
              <Row className="d-none d-lg-flex fw-medium text-white">
                <Col className="pb-3 px-4 col-3">
                </Col>
                <Col className="pb-3 px-4 col-3">
                  MTSN
                </Col>
                <Col className="pb-3 px-4 col-3">
                  Typical Employement
                </Col>
                <Col className="pb-3 px-4 col-3">
                  Virtual Platforms
                </Col>
              </Row>
              {/* 1 */}
              <Row className="fs-7 fs-md-8 m-0 mb-3">
                <Col className="bg-white border-transparent py-4 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">1</span>
                  <span className="d-inline-block vertical-middle">Backup Resources</span>
                </Col>
                <div className="border-transparent py-3 px-2  bg-grey-lite d-lg-none col-lg-3 col-4">MTSN</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Typical Employement</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Virtual Platforms</div>


                <Col className="border-transparent py-4 px-4 bg-orange bg-opacity-10 col-lg-3 col-4">
                  <Image src={Check} width={30} height={30} />
                </Col>
                <Col className="border-transparent py-4 px-4 bg-orange bg-opacity-10 col-lg-3 col-4">
                  <Image src={Check} width={30} height={30} />
                </Col>
                <Col className="border-transparent py-4 px-4 bg-purple-light bg-opacity-10 col-lg-3 col-4">
                  <Image src={Remove} width={30} height={30} />
                </Col>
              </Row>
              {/* 2 */}
              <Row className="fs-7 fs-md-8 m-0 mb-3 ">
                <Col className="bg-white border-transparent py-4 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">2</span>
                  <span className="d-inline-block vertical-middle">Work Demos</span>
                </Col>

                <div className="border-transparent py-3 px-2  bg-grey-lite d-lg-none col-lg-3 col-4">MTSN</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Typical Employement</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Virtual Platforms</div>
                <Col className="border-transparent py-4 px-4 bg-grey-lite bg-opacity-10 col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">Every Week</span>
                </Col>
                <Col className="border-transparent py-4 px-4 bg-grey-lite bg-opacity-10 col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">Every 2 Weeks</span>
                </Col>
                <Col className="border-transparent py-4 px-4 bg-grey-lite bg-opacity-10 col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">Every 2 Weeks</span>
                </Col>
              </Row>
              {/* 3 */}
              <Row className="fs-7 fs-md-8 m-0 mb-3 ">
                <Col className="bg-white border-transparent py-4 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">3</span>
                  <span className="d-inline-block vertical-middle">Code Security</span>
                </Col>
                <div className="border-transparent py-3 px-2  bg-grey-lite d-lg-none col-lg-3 col-4">MTSN</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Typical Employement</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Virtual Platforms</div>

                <Col className="border-transparent py-4 px-4 bg-orange bg-opacity-10 col-lg-3 col-4">
                  <Image src={Check} width={30} height={30} />
                </Col>
                <Col className="border-transparent py-4 px-4 bg-purple-light bg-opacity-10 col-lg-3 col-4">
                  <Image src={Remove} width={30} height={30} />
                </Col>
                <Col className="border-transparent py-4 px-4 bg-purple-light  bg-opacity-10 col-lg-3 col-4">
                  <Image src={Remove} width={30} height={30} />
                </Col>
              </Row>
              {/* 4 */}
              <Row className="fs-7 fs-md-8 m-0 mb-3 ">
                <Col className="bg-white border-transparent py-4 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">4</span>
                  <span className="d-inline-block vertical-middle">Project Management Suite</span>
                </Col>
                <div className="border-transparent py-3 px-2  bg-grey-lite d-lg-none col-lg-3 col-4">MTSN</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Typical Employement</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Virtual Platforms</div>
                <Col className="border-transparent py-4 px-4 bg-grey-lite col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">Free</span>
                </Col>
                <Col className="border-transparent py-4 px-4 bg-white col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">$100/month - $150/month</span>
                </Col>
                <Col className="border-transparent py-4 px-4 bg-white col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">N/A</span>
                </Col>
              </Row>
              {/* 5 */}
              <Row className="fs-7 fs-md-8 m-0 mb-3 ">
                <Col className="bg-white border-transparent py-4 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">5</span>
                  <span className="d-inline-block vertical-middle">Pre-Screened Candidates</span>
                </Col>
                <div className="border-transparent py-3 px-2  bg-grey-lite d-lg-none col-lg-3 col-4">MTSN</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Typical Employement</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Virtual Platforms</div>
                <Col className="border-transparent py-4 px-4 bg-orange bg-opacity-10 col-lg-3 col-4">
                  <Image src={Check} width={30} height={30} />
                </Col>
                <Col className="border-transparent py-4 px-4 bg-purple-light bg-opacity-10 col-lg-3 col-4">
                  <Image src={Remove} width={30} height={30} />
                </Col>
                <Col className="border-transparent py-4 px-4 bg-purple-light bg-opacity-10 col-lg-3 col-4">
                  <Image src={Remove} width={30} height={30} />
                </Col>
              </Row>
              {/* 6 */}
              <Row className="fs-7 fs-md-8 m-0 mb-3 ">
                <Col className="bg-white border-transparent py-4 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">6</span>
                  <span className="d-inline-block vertical-middle">Employee Management Cost</span>
                </Col>
                <div className="border-transparent py-3 px-2  bg-grey-lite d-lg-none col-lg-3 col-4">MTSN</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Typical Employement</div>
                <div className="border-transparent py-3 px-2 bg-grey-lite d-lg-none col-lg-3 col-4">Virtual Platforms</div>
                <Col className="border-transparent py-4 px-4 bg-orange bg-opacity-10 col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">$0/month</span>
                </Col>
                <Col className="border-transparent py-4 px-4 bg-white col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">Very High</span>
                </Col>
                <Col className="border-transparent py-4 px-4 bg-white col-lg-3 col-4">
                  <span className="d-inline-block vertical-middle">Very High</span>
                </Col>
              </Row>
              {/* 7 */}

            </div>
            <Row className="m-0 ">
              <Row className="fs-7 fs-md-8 m-0 mb-3 p-0">
                <Col className=" py-3 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">7</span>
                  <span className="d-inline-block vertical-middle text-white">Our Talent</span>
                </Col>
                <Col className="d-flex flex-wrap justify-content-between ps-4 col-12 text-white">
                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Top Flight Skills</strong>
                    <p className="mb-0 fs-8">First and foremost, our talent has the role-specific abilities required to
                      get the job done quickly, efficiently, and without disrupting your operations.
                    </p>
                  </Col>

                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Easy to Work With</strong>
                    <p className="mb-0 fs-8">We don’t just look for technical capabilities when
                      building your team – MTSN prioritizes soft skills and communication ability too.
                    </p>
                  </Col>

                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Risk-Free Trials</strong>
                    <p className="mb-0 fs-8">All MTSN teams start with a 1 month trial period so
                      that you can evaluate the fit. Not happy with your team? We’ll replace them for free.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Row>

            <Row className="m-0 ">
              <Row className="fs-7 fs-md-8 m-0 mb-3 p-0">
                <Col className=" py-3 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">8</span>
                  <span className="d-inline-block vertical-middle text-white">Team Dynamics</span>
                </Col>
                <Col className="d-flex flex-wrap justify-content-between ps-4 col-12 text-white">
                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Seamless Ramp Up</strong>
                    <p className="mb-0 fs-8">To enable speedy deployment, MTSN teams are trained to
                      adapt to your internal project management and collaboration tools.
                    </p>
                  </Col>

                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Communication</strong>
                    <p className="mb-0 fs-8">
                      English proficiency is important when working remotely – our teams can explain
                      complex concepts and provide clear status updates.
                    </p>
                  </Col>

                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Scalability</strong>
                    <p className="mb-0 fs-8">
                      Scalability and flexibility go hand in hand. With no restrictive contracts,
                      MTSN teams can be deployed for days, weeks, or months at a time.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Row>

            <Row className="m-0 mb-4">
              <Row className="fs-7 fs-md-8 m-0 mb-3 p-0">
                <Col className=" py-3 px-4 text-start col-lg-3 col-12">
                  <span className="rounded-circle border-orange text-orange bg-white d-inline-block vertical-middle fs-9 w-34 h-34 me-4 text-center position-relative z-index-2">9</span>
                  <span className="d-inline-block vertical-middle text-white">Expected ROI</span>
                </Col>
                <Col className="d-flex flex-wrap justify-content-between ps-4 col-12 text-white">
                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Straightforward Pricing</strong>
                    <p className="mb-0 fs-8">There are no tricks, gimmicks, or hidden fees to our pricing scheme.
                      Access great tech talent at an affordable price, no strings attached.
                    </p>
                  </Col>

                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Hidden Savings</strong>
                    <p className="mb-0 fs-8">
                      On top of the hourly advantages to hiring a MTSN team over full-time employees,
                      you also save big on vacation pay, health benefits, and more.
                    </p>
                  </Col>

                  <Col className="py-3 px-5 col-lg-4 col-md-6 col-sm-12">
                    <strong className="fs-9 fw-medium pb-6 d-block">Financial Flexibility</strong>
                    <p className="mb-0 fs-8">
                      The ability to quickly deploy/recall a tech team can have a huge impact on the
                      day-to-day financials (and long-term outlook) of your company.
                    </p>
                  </Col>
                </Col>
              </Row>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default WhyTab
