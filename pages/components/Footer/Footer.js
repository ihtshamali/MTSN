import Image from "next/image"
import Link from "next/link"
import { Container, Row } from "react-bootstrap"
import Logo from '../../../public/logo.png'


function Footer() {
    return (
        <>
            <footer className="footer py-5 pt-lg-13 pb-lg-16 text-700 fs-7">
                <Container>
                    <Row>
                        <div className="order-lg-1 col-lg-2 col-md-6 col-6">
                            <div className="pb-3">
                                <Link href='/'>
                                    <Image src={Logo} width={150} height={35} />
                                </Link>
                            </div>
                            <p className="fs-7 text-left">
                                <Link href="/" role="button" tabindex="0" className="text-left text-700 text-decoration-none fs-7 text-white">
                                    All Rights Reserved ©mtsn.com
                                </Link>
                            </p>
                        </div>

                        <div className="order-lg-3 col-lg-2 col-md-6 col-6 text-white">
                            <strong className="d-block fw-medium pb-3 mb-3 border-bottom border-200 fs-8 text-600">Address</strong>
                            <address className="mb-0">
                                <p className="fs-7">
                                    3939 Hillcroft Ave, Houston, TX 77057, USA
                                </p>
                                <p className="fs-7 mb-0">Building No 12-G, 1st Floor, DHA Phase 1, Lahore, Pakistan</p>
                            </address>
                        </div>

                        <div className="order-lg-2 pt-8 pt-lg-0 col-lg-8 col-12">
                            <Row>
                                <div className="d-flex flex-column navCol col">
                                    <strong className="text-white fw-medium pb-3 mb-3 border-bottom border-200 fs-8 text-600">Company</strong>
                                    <ul className="list-unstyled flex-column nav text-white">
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Case Studies</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Cloud Membership</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Services</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Careers</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Blog</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-column navCol col">
                                    <strong className="text-white fw-medium pb-3 mb-3 border-bottom border-200 fs-8 text-600">Why MTSN</strong>
                                    <ul className="list-unstyled flex-column nav text-white">
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Why it Works</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">What MTSN Dose</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">How MTSN Works</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Testimonisls</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="d-flex flex-column navCol col">
                                    <strong className="text-white fw-medium pb-3 mb-3 border-bottom border-200 fs-8 text-600">Services</strong>
                                    <ul className="list-unstyled flex-column nav text-white">
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Design</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Web</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Mobile</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">AI</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Blockchain</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Case Studies</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="d-flex flex-column navCol col">
                                    <strong className="text-white fw-medium pb-3 mb-3 border-bottom border-200 fs-8 text-600">Policy</strong>
                                    <ul className="list-unstyled flex-column nav text-white">
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="d-flex flex-column navCol col">
                                    <strong className="text-white fw-medium pb-3 mb-3 border-bottom border-200 fs-8 text-600">Locations</strong>
                                    <ul className="list-unstyled flex-column nav text-white">
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">USA</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">UAE</Link>
                                        </li>
                                        <li className="mb-2 nav-item">
                                            <Link className="text-700 text-decoration-none text-white" href="/case-studies">Pakistan</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer