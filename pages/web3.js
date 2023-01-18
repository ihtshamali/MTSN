import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import web from '../public/web3.png'

function Web3() {
  return (
    <>
      <Head>
        <title>Web3</title>
        <meta name="description" content="Blockchian Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero 
      firstcol="col-xxl-7 col-lg-6 col-12"
      spantext="Next-Level Innovation"
        headingtitle="Cloud-based Blackchain Development Service"
        headingclass="h1tag text-white mb-2"
        paragraphtext="Top into our skilled, experienced talent pool and build your on-demand blockchain development team today."
        btntitle="Book Free Consultation"
        btncname="btn btn-lg text-decoration-none text-white position-relative at-zindex3"
        secondcol="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12"
        picture={web}
        alttext="web"
        cname="py-5 image-size"
      />
    </>
  )
}

export default Web3