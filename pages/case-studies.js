import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import casestudy from '../public/case-studies.png'

function Casestudies() {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta name="description" content="Case Studies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero firstcol="col-xxl-7 col-lg-6 col-12"
      spantext="Case Studies"
        headingtitle="MTSN Turn Tech into a Competitive Advantage"
        headingclass="h1tag text-white mb-2"
        paragraphtext="Our on-demand teams reduce costs and boost productivity. Schedule a free consultation today learn more."
        btntitle="Book Free Consultation"
        btncname="btn btn-lg text-decoration-none text-white position-relative at-zindex3"
        
        secondcol="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12"
        picture={casestudy}
        alttext="casestudy"
        cname="py-5 image-case-studies"
         />
    </>
  )
}

export default Casestudies