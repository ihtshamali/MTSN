import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import web from '../public/web3.png'
import CrossIndustry from './Web3/CrossIndustry'
import GetExpert from './Web3/GetExpert'
import SmartContract from './Web3/SmartContract'
import UtilityStudy from './Web3/UtilityStudy'
import FocusIndustries from './Web3/FocusIndustries'
import BlockchainTech from './Web3/BlockchainTech'
import Consultation from "../pages/components/Home/consultation/consultation"

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
        spantext="Advanced Innovation"
        headingtitle="Cloud-based Blockchain Development Service"
        headingclass="h1tag text-white mb-2"
        paragraphtext="Dive into our talented and experienced pool of professionals and assemble your own
        blockchain development team as per your requirement today"
        btntitle="Book Free Consultation"
        btncname="btn btn-lg text-decoration-none text-white position-relative at-zindex3"

        secondcol="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12"
        picture={web}
        alttext="web"
        cname="py-5 image-size"
      />
      <CrossIndustry />
      <SmartContract />
      <GetExpert />
      <UtilityStudy />
      <FocusIndustries />
      <BlockchainTech />
      <Consultation consultationheading="Blockchain specialists are available on demand."
        consultationclass="py-5 consultation-bg text-center" />

    </>
  )
}

export default Web3