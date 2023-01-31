import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';
import vue from '../services/web-dev/vue.png'
import laravel from '../services/web-dev/laravel.png'
import node from '../services/web-dev/node.png'
import js from '../services/web-dev/js.png'
import react from '../services/web-dev/react.png'
import laptop from '../services/web-dev/laptop.png'
import Blockchain from '../services/blockchain-dev/blockchain.png'
import ios from '../services/mobile-dev/ios.png'
import android from '../services/mobile-dev/android.png'
import flutter from '../services/mobile-dev/flutter.png'
import bitcoin from '../services/blockchain-dev/1.png'
import img2 from '../services/blockchain-dev/2.png'
import img3 from '../services/blockchain-dev/3.png'
import img4 from '../services/blockchain-dev/4.png'
import img5 from '../services/blockchain-dev/5.png'
import photoshop from '../services/deisgn/photoshop.png'
import sketch from '../services/deisgn/sketch.png'
import figma from '../services/deisgn/figma.png'
import xd from '../services/deisgn/xd.png'
import python from '../services/ai/python.png'
import java from '../services/ai/java.png'
import cpp from '../services/ai/cpp.png'
import ruby from '../services/ai/ruby.png'
import ai from '../services/ai/ai-img.png'
import design from '../services/deisgn/design.png'
import mobile from '../services/mobile-dev/mobile-img.png'



function Services() {
    return (
        <>
            <section className='pb-5'>
                <Container>
                    <Row>
                        {/* web development  */}
                        <Col className='px-5 pt-5 pb-0 bg-black-tint mx-4'>
                            <div className='service flex text-800 p-8 pb-0 pt-xxl-16 px-xxl-16 d-flex flex-column overflow-hidden'>
                                <div className='position-relative z-index-2'>
                                    <h3 className="fs40 text-white mb-4 mb-lg-8">Web Development</h3>
                                    <p className="fs18 text-white mb-4 mb-lg-8">
                                        Need help with your SaaS and CRM web apps? Our dedicated teams provide the expert-level
                                        end-to-end development required to produce a high-quality product.
                                    </p>
                                    <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                                        <li className='ps-3'>
                                            <Image src={react}
                                                alt="ReactJS"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={vue}
                                                alt="VueJS"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={js}
                                                alt="JavaScript"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={node}
                                                alt="Node"
                                                width={33}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={laravel}
                                                alt="laravel"
                                                width={35}
                                                height={35} />
                                        </li>
                                    </ul>
                                    <Link className='text-white text-decoration-none' href={'/services/web-development'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>
                                    <div className='d-flex align-items-end justify-content-end me-n30 mb-n10 mt-n30 mb-xxl-0 me-xxl-n20 mt-n8r'>
                                        <Image src={laptop}
                                            alt="Laptop"
                                            className='d-none d-lg-block overflow-hidden laptop-img'
                                        />
                                    </div>

                                </div>
                            </div>


                        </Col>
                        {/* mobile app development  */}
                        <Col className='ps-5 pe-3 pt-5 pb-0 bg-black-tint mx-4'>

                            <div className='service flex text-800 p-8 pb-0 pt-xxl-16 px-xxl-16 d-flex flex-column overflow-hidden'>
                                <div className='position-relative z-index-2'>
                                    <h3 className="fs40 text-white mb-4 mb-lg-8">Mobile Development </h3>
                                    <p className="fs18 text-white mb-4 mb-lg-8">
                                        MTSN provides the skilled development team
                                        and infrastructure needed to create successful
                                        and profitable mobile apps that captivate users.
                                    </p>
                                    <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                                        <li className='ps-3'>
                                            <Image src={ios}
                                                alt="ios"
                                                width={40}
                                                height={40} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={android}
                                                alt="android"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={flutter}
                                                alt="flutter"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={react}
                                                alt="react"
                                                width={33}
                                                height={35} />
                                        </li>
                                    </ul>
                                    <Link className='text-white text-decoration-none' href={'/services/mobile-development'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>
                                    <div className='d-flex align-items-end justify-content-end me-n30 mb-n10 mt-n30 mb-xxl-0 me-xxl-n20 mt-n6r'>
                                        <Image src={mobile}
                                            alt="mobile"
                                            className='d-none d-lg-block overflow-hidden mobile-img'
                                        />
                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>
                    {/* blockchain  development  */}
                    <Row className='my-5 px-4'>
                        <div className='px-4 bg-black-tint'>
                            <Row>
                                <div className='d-flex align-items-center p-0 px-lg-4 col-md-6 col-12'>
                                    <div className='service flex text-800 p-8 pb-0 pt-xxl-16 px-xxl-16 d-flex flex-column overflow-hidden'>
                                        <div className='position-relative z-index-2'>
                                            <h3 className="fs40 text-white mb-4 mb-lg-8">Blockchain Development </h3>
                                            <p className="fs18 text-white mb-4 mb-lg-8">
                                                MTSN's experienced blockchain development
                                                experts are equipped to assist with the creation
                                                of blockchain technology and NFT marketplaces.
                                                Contact us to learn more about the benefits of
                                                working with a tailored team.
                                            </p>
                                            <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                                                <li className='ps-3'>
                                                    <Image src={bitcoin}
                                                        alt="bitcoin"
                                                        width={35}
                                                        height={35} />
                                                </li>
                                                <li className='ps-3'>
                                                    <Image src={img2}
                                                        alt="img2"
                                                        width={35}
                                                        height={35} />
                                                </li>
                                                <li className='ps-3'>
                                                    <Image src={img3}
                                                        alt="img3"
                                                        width={35}
                                                        height={35} />
                                                </li>
                                                <li className='ps-3'>
                                                    <Image src={img4}
                                                        alt="img4"
                                                        width={33}
                                                        height={35} />
                                                </li>
                                                <li className='ps-3'>
                                                    <Image src={img5}
                                                        alt="img5"
                                                        width={35}
                                                        height={35} />
                                                </li>
                                            </ul>
                                            <Link className='text-white text-decoration-none' href={'/services/blockchain-development'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center position-relative py-3 py-xxl-18 col-md-6 col-12 text-right'>

                                    <Image src={Blockchain}
                                        alt="Blockchain"
                                        
                                        className='d-none d-lg-block overflow-hidden py-3 blockchain-img'
                                    />

                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        {/* design  */}
                        <Col className='px-5 pt-5 pb-0 bg-black-tint mx-4'>

                            <div className='service flex text-800 p-8 pb-0 pt-xxl-16 px-xxl-16 d-flex flex-column overflow-hidden'>
                                <div className='position-relative z-index-2'>
                                    <h3 className="fs40 text-white mb-4 mb-lg-8">Design</h3>
                                    <p className="fs18 text-white mb-4 mb-lg-8">
                                        MTSN offers quick access to expert UI/UX
                                        design teams to support the success of your
                                        projects, even if you lack the internal resources
                                        or time to handle the work in-house.
                                    </p>
                                    <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                                        <li className='ps-3'>
                                            <Image src={photoshop}
                                                alt="photoshop"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={sketch}
                                                alt="sketch"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={figma}
                                                alt="figma"
                                                width={25}
                                                height={40}
                                            />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={xd}
                                                alt="xd"
                                                width={33}
                                                height={30} />
                                        </li>
                                    </ul>
                                    <Link className='text-white text-decoration-none' href={'/services/design'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>
                                    <div className='d-flex align-items-end justify-content-end me-n30 mb-n10 mt-n30 mb-xxl-0 me-xxl-n20 m-design'>
                                        <Image src={design}
                                            alt="design"
                                            className='d-none d-lg-block overflow-hidden design-img'
                                        />
                                    </div>
                                </div>
                            </div>


                        </Col>
                        {/* AI  */}
                        <Col className='ps-5 pe-0 pt-5 pb-0 bg-black-tint mx-4'>

                            <div className='service flex text-800 p-8 pb-0 pt-xxl-16 px-xxl-16 d-flex flex-column overflow-hidden'>
                                <div className='position-relative z-index-2'>
                                    <h3 className="fs40 text-white mb-4 mb-lg-8">AI</h3>
                                    <p className="fs18 text-white mb-4 mb-lg-8">
                                        MTSN specializes teams provide custom
                                        end-to-end artificial intelligence solutions
                                        that can be deployed on various cloud platforms.
                                    </p>
                                    <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                                        <li className='ps-3'>
                                            <Image src={python}
                                                alt="python"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={java}
                                                alt="java"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={cpp}
                                                alt="cpp"
                                                width={35}
                                                height={35} />
                                        </li>
                                        <li className='ps-3'>
                                            <Image src={ruby}
                                                alt="ruby"
                                                width={33}
                                                height={35} />
                                        </li>
                                    </ul>
                                    <Link className='text-white text-decoration-none' href={'/services/ai'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>
                                    <div className='d-flex align-items-end justify-content-end me-n30 mb-n10 mt-n30 mb-xxl-0 me-xxl-n20 m-ai'>
                                        <Image src={ai}
                                            alt="ai"
                                            className='d-none d-lg-block overflow-hidden ai-img'
                                        />
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

export default Services