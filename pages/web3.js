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
      <Hero spantext="Next-Level Innovation"
        headingtitle="Cloud-based Blackchain Development Service"
        paragraphtext="Top into our skilled, experienced talent pool and build your on-demand blockchain development team today."
        btntitle="Book Free Consultation"
        picture={web}
        alttext="web"
        cname="py-5 image-size"
      />
    </>
  )
}

export default Web3