import Head from 'next/head'
import Hero from './components/Herosection/herosection'

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
        btntitle="Book Free Consultation" />
    </>
  )
}

export default WhyMTSN
