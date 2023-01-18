import Head from 'next/head'
import Hero from './components/Herosection/herosection'

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
      />
    </>
  )
}

export default Web3