import { Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import HR from '../Scalesmarter/HR.png'
import Interview from '../Scalesmarter/Interview.png'
import Resource from '../Scalesmarter/Resource.png'
import Coding from '../Scalesmarter/Coding.png'
import Business from '../Scalesmarter/business.png'
import Development from '../Scalesmarter/development.png'
import Project from '../Scalesmarter/project-manager.png'
import Team from '../Scalesmarter/team.png'

function Scalesmarter() {
    return (
        <>
            <section className='py-5'>
                <Container className='text-center pb-3 text-white'>
                    <Row className='justify-content-center'>
                        <div className='col-lg-9'>
                            <h2 className="fs40 mb-4 mb-xl-8">Scale Smarter With MTSN </h2>
                            <p className='fs16'>
                                Our Cloud Memberships, featuring advanced web development and design teams,
                                are designed to help organizations like yours grow faster. Explore the possibilities
                                by following the link below.
                            </p>
                            <a className="text-decoration-none d-inline-flex align-items-center fs16 link text-white" href="/case-studies">
                                View Case Study
                                <span className="arrow-right mt-1 ms-2"></span>
                            </a>
                        </div>
                    </Row>
                </Container>

                <Container className='pb-3 pt-5 pt-lg-11 pb-lg-4'>
                    <div className='d-none d-md-flex flex-wrap'>
                        {/* 1 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white px-4 py-5'>
                                <Image src={HR}
                                    alt={HR}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Access Qualified HR Support </h3>
                                <p className="fs16 mb-0">MTSN has a team of HR professionals
                                    and a pool of highly skilled on-call developers to support our services.
                                </p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white  px-4 py-5'>
                                <Image src={Interview}
                                    alt={Interview}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Interview Coordinators by Phone </h3>
                                <p className="fs16 mb-0">Although we work remotely, we are real people and can be contacted at any time. </p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white  px-4 py-5'>
                                <Image src={Resource}
                                    alt={Resource}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Save BIG on Additional Resources </h3>
                                <p className="fs16 mb-0">Increasing the size of your team can result in a reduction of up to 30% in hourly rates.</p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white  px-4 py-5'>
                                <Image src={Coding}
                                    alt={Coding}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Design and Front-End Development</h3>
                                <p className="fs16 mb-0">Gain access to 60 hours of design and 60 hours of front-end development per month. </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-none d-md-flex flex-wrap'>
                        {/* 5 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white  px-4 py-5'>
                                <Image src={Project}
                                    alt={Project}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Deploy Innovative Technology </h3>
                                <p className="fs16 mb-0">Obtain expert assistance with blockchain, NFT, and AI development.</p>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white px-4 py-5'>
                                <Image src={Business}
                                    alt={Business}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Maintain Ownership of Your IP</h3>
                                <p className="fs16 mb-0">Any work completed by MTSN teams belongs exclusively to your company. <br /></p>
                            </div>
                        </div>
                        {/* 7 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white px-4 py-5'>
                                <Image src={Development}
                                    alt={Development}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Project Management + QA Included</h3>
                                <p className="fs16 mb-0">
                                    Our development teams are led by project managers and all work is thoroughly quality tested. <br />
                                </p>
                            </div>
                        </div>

                        {/* 8 */}
                        <div className="p-9 d-flex flex-column align-content-stretch position-relative col-lg-3 col-md-6 col-12">
                            <div className='bg-100 text-white px-4 py-5'>
                                <Image src={Team}
                                    alt={Team}
                                    width={70}
                                />
                                <h3 className="fs24 mt-8 my-4">Collaboration On Cloud </h3>
                                <p className="fs16 mb-0">
                                    Utilize the skills of top-tier talent from around the world without leaving your office.<br />
                                </p>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Scalesmarter