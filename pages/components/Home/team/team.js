import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Member from '../team/members.png'

function Team() {
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
            <section className='team-bg pt-5 text-center text-white'>
                <Container>
                    <h2 className="fs40 mb-4 mb-xl-8">Meet Our Talent</h2>
                    <p className="fs18 px-xxl-95 text-center mb-8 mb-lg-12">
                        MTSN is comprised of a talented and passionate community of professionals
                        who thrive on challenges. We have the privilege of assembling the best team
                        for each project.
                    </p>
                    <Image className="member-image" src={Member}
                        alt="Members" />
                </Container>
            </section>
        </>
    )
}

export default Team