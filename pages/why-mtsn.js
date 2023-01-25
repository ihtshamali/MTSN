import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import Cloudmebersip from '../public/cloud-membership.png'
import Consultation from './components/Home/consultation/consultation'
import TabsComponent from './Why-MTSN/TabsComponent'

function WhyMTSN() {
  return (
    <>
      <Head>
        <title>Why MTSN</title>
        <meta name="description" content="Blockchian Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero className="text-center"
      firstcol="col-12 text-center py-5 px-5"
        headingtitle="Why MTSN?"
        headingclass="h1tag text-white mb-2 text-center"
        paragraphtext="Struggling to source top tech talent? You’re not alone. Companies of all 
        sizes are facing difficulties hiring world-class development teams that fit within their 
        team dynamic and budget. We created MTSN to increase access and improve affordability."
      />
      <TabsComponent/>
      <Consultation />
    </>
  )
}

export default WhyMTSN
