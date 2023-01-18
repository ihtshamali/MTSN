import Head from 'next/head'
import Hero from './components/Herosection/herosection'

function Casestudies() {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta name="description" content="Case Studies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero spantext="Case Studies"
        headingtitle="MTSN Turn Tech into a Competitive Advantage"
        paragraphtext="Our on-demand teams reduce costs and boost productivity. Schedule a free consultation today learn more."
        btntitle="Book Free Consultation" />
    </>
  )
}

export default Casestudies