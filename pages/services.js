import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import ServicesImg from '../public/services.png'

function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero spantext="Our Solutions"
        headingtitle="Ready to Bring Your Vision to Life?"
        headingclass="h1tag text-white mb-2"
        paragraphtext="Optimize your development process with a MTSN team today."
        btntitle="Book Free Consultation"
        btncname="btn btn-lg text-decoration-none text-white position-relative at-zindex3"
        picture={ServicesImg}
        alttext="Services"
        cname="py-5 image-services"
      />
    </>
  )
}

export default Services