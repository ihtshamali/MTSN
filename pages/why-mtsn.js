import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import Cloudmebersip from '../public/cloud-membership.png'

function WhyMTSN() {
  return (
    <>
      <Head>
        <title>Why MTSN</title>
        <meta name="description" content="Blockchian Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero headingtitle="Why MTSN?"
        paragraphtext="Top into our skilled, experienced talent pool and build your on-demand blockchain development team today."
        btntitle="Book Free Consultation"
        picture={Cloudmebersip}
        alttext="Cloudmebersip"
        cname="py-5 image-size"
      />

    </>
  )
}

export default WhyMTSN
