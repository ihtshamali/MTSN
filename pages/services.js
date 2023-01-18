import Head from 'next/head'
import Hero from './components/Herosection/herosection'

function Services() {
  return (
    <>
    <Head>
      <title>Services</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Hero spantext="Our Solutions"
        headingtitle="Ready to Bring Your Vision to Life?"
        paragraphtext="Optimize your development process with a MTSN team today."
        btntitle="Book Free Consultation" />
    </>
  )
}

export default Services