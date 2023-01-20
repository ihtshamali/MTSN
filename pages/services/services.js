import Head from 'next/head'
import Hero from '../components/Herosection/herosection'
import Design from './services-page/Design'
import ServicesImg from '../../public/services.png'

function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero firstcol="col-xxl-7 col-lg-6 col-12"
        spantext="Our Solutions"
        headingtitle="Ready to Bring Your Vision to Life?"
        headingclass="h1tag text-white mb-2"
        paragraphtext="Optimize your development process with a MTSN team today."
        btntitle="Book Free Consultation"
        btncname="btn btn-lg text-decoration-none text-white position-relative at-zindex3"

        secondcol="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12 py-3"
        picture={ServicesImg}
        alttext="Services"
        cname="py-5 image-services"
      />

      {/* design */}
      <Design sectionclass="py-10 py-lg-20 overflow-hidden service-design position-relative bg-grey"
        rowclass="align-items-md-center justify-content-md-between"
        firstcolclass="col-xl-6 col-md-6"
        secondcolclass="col-xxl-5 col-xl-6 col-md-6 text-white"
        heading="Design"
        paragraph="When it comes to creating engaging products and driving customer interactions,
      UI/UX design is the silver bullet that turns a great idea into a profitable one.
      Discover what an expert-level design team from Renesis can do for your next
      project today."
      />

      {/* Web Development */}
      <Design sectionclass="py-10 py-lg-20 overflow-hidden service service-design position-relative bg-purple"
        rowclass="align-items-md-center justify-content-md-between flex-row-reverse"
        firstcolclass="col-xl-6 col-md-6"
        secondcolclass="col-xxl-5 col-xl-6 col-md-6 text-white"
        heading="Web Development"
        paragraph="From simple websites to complex, custom software, web development plays an 
      outsized role in the success of your company. Renesis makes it easy to build professional 
      teams for your organization’s cloud development ecosystem."
      />

      {/* Blockchain */}
      <Design sectionclass="py-10 py-lg-20 overflow-hidden service service-design position-relative"
        rowclass="align-items-md-center justify-content-md-between"
        firstcolclass="col-xl-6 col-md-6"
        secondcolclass="col-xxl-5 col-xl-6 col-md-6 text-white"
        heading="Blockchain"
        paragraph="Interested in developing blockchain technology or NFTs? We can help. Our forward-thinking 
      blockchain development specialists understand the intricacies of this exciting tech. Reach out today 
      to discover what a handpicked Renesis team can do for you."
      />

      {/* Mobile Development */}
      <Design sectionclass="py-10 py-lg-20 overflow-hidden service service-design position-relative bg-grey"
        rowclass="align-items-md-center justify-content-md-between flex-row-reverse"
        firstcolclass="col-xl-6 col-md-6"
        secondcolclass="col-xxl-5 col-xl-6 col-md-6 text-white"
        heading="Web Development"
        paragraph="From simple websites to complex, custom software, web development plays an 
      outsized role in the success of your company. Renesis makes it easy to build professional 
      teams for your organization’s cloud development ecosystem."
      />

      {/* AI & Machine Learning */}
      <Design sectionclass="py-10 py-lg-20 overflow-hidden service service-design position-relative"
        rowclass="align-items-md-center justify-content-md-between"
        firstcolclass="col-xl-6 col-md-6"
        secondcolclass="col-xxl-5 col-xl-6 col-md-6 text-white"
        heading="Blockchain"
        paragraph="Interested in developing blockchain technology or NFTs? We can help. Our forward-thinking 
      blockchain development specialists understand the intricacies of this exciting tech. Reach out today 
      to discover what a handpicked Renesis team can do for you."
      />

    </>
  )
}

export default Services