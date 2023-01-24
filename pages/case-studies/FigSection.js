import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import Zoney from "../../public/case-study/zoney.png"
import Img2 from "../../public/case-study/img2.png"
import Img3 from "../../public/case-study/img3.png"
import Img4 from "../../public/case-study/img4.png"
import Img5 from "../../public/case-study/img5.png"
import Img6 from "../../public/case-study/img6.png"
import Img7 from "../../public/case-study/img7.png"
import Img8 from "../../public/case-study/img8.png"
import Img9 from "../../public/case-study/img9.png"


function FigSection() {
    return (
        <>
            <section>
                <Row className="m-0 flex-wrap align-items-start">
                    {/* 1 */}
                    <figure className="mb-0 px-0 position-relative bsw-100 bsw-sm-50 bsw-md-33 at-colcasestudy">
                        <Link className="link position-absolute" href="/" />

                        <div className="at-imgholder">
                            <span className="span-class">
                                <Image src={Zoney} width={637} />
                            </span>
                        </div>
                        <div className="at-bgoverlay"></div>
                        <figcaption className="at-casestudytitle">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Zoney</h3>
                        </figcaption>
                        <div className="at-casestudytitletwo">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Zoney</h3>
                        </div>
                    </figure>
                    {/* 2 */}
                    <figure className="mb-0 px-0 position-relative bsw-100 bsw-sm-50 bsw-md-33 at-colcasestudy">
                        <Link className="link position-absolute" href="/" />

                        <div className="at-imgholder">
                            <span className="span-class">
                                <Image src={Img2} width={637} />
                            </span>
                        </div>
                        <div className="at-bgoverlay"></div>
                        <figcaption className="at-casestudytitle">
                            <h3 className="mb-0 fw-medium fs-4 text-white">AVA</h3>
                        </figcaption>
                        <div className="at-casestudytitletwo">
                            <h3 className="mb-0 fw-medium fs-4 text-white">AVA</h3>
                        </div>
                    </figure>
                    {/* 3 */}
                    <figure className="mb-0 px-0 position-relative bsw-100 bsw-sm-50 bsw-md-33 at-colcasestudy">
                        <Link className="link position-absolute" href="/" />

                        <div className="at-imgholder">
                            <span className="span-class">
                                <Image src={Img3} width={637} />
                            </span>
                        </div>
                        <div className="at-bgoverlay"></div>
                        <figcaption className="at-casestudytitle">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Coretal | Project Management | CRM</h3>
                        </figcaption>
                        <div className="at-casestudytitletwo">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Coretal | Project Management | CRM</h3>
                        </div>
                    </figure>
                    {/* 4 */}
                    <figure className="mb-0 px-0 position-relative bsw-100 bsw-sm-50 bsw-md-33 at-colcasestudy">
                        <Link className="link position-absolute" href="/" />

                        <div className="at-imgholder">
                            <span className="span-class">
                                <Image src={Img4} width={637} />
                            </span>
                        </div>
                        <div className="at-bgoverlay"></div>
                        <figcaption className="at-casestudytitle">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Wizlink | Landing Page Builder</h3>
                        </figcaption>
                        <div className="at-casestudytitletwo">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Wizlink | Landing Page Builder</h3>
                        </div>
                    </figure>
                    {/* 5 */}
                    <figure className="mb-0 px-0 position-relative bsw-100 bsw-sm-50 bsw-md-33 at-colcasestudy">
                        <Link className="link position-absolute" href="/" />

                        <div className="at-imgholder">
                            <span className="span-class">
                                <Image src={Img5} width={637} />
                            </span>
                        </div>
                        <div className="at-bgoverlay"></div>
                        <figcaption className="at-casestudytitle">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Pass More Plants | Ecommerce Store</h3>
                        </figcaption>
                        <div className="at-casestudytitletwo">
                            <h3 className="mb-0 fw-medium fs-4 text-white">Pass More Plants | Ecommerce Store</h3>
                        </div>
                    </figure>
                    {/* 6 */}
                    <figure className="mb-0 px-0 position-relative bsw-100 bsw-sm-50 bsw-md-33 at-colcasestudy">
                        <Link className="link position-absolute" href="/" />

                        <div className="at-imgholder">
                            <span className="span-class">
                                <Image src={Img6} width={637} />
                            </span>
                        </div>
                        <div className="at-bgoverlay"></div>
                        <figcaption className="at-casestudytitle">
                            <h3 className="mb-0 fw-medium fs-4 text-white">My Soccer Training App</h3>
                        </figcaption>
                        <div className="at-casestudytitletwo">
                            <h3 className="mb-0 fw-medium fs-4 text-white">My Soccer Training App</h3>
                        </div>
                    </figure>

                </Row>
            </section>
        </>
    )
}

export default FigSection