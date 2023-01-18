import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Hero from './components/Herosection/herosection'
import Cloudmebersip from '../public/cloud-membership.png'

function Cloudmembership() {
    return (
        <>
            <Head>
                <title>Cloud Membership-MTSN</title>
                <meta name="description" content="Multi Tech Solutions " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Hero spantext="Access elite talent"
                headingtitle="Your virtual workspace awaits"
                paragraphtext="scale faster with a cloud-based development team from MTSN"
                btntitle="Book Free Consultation"
            />

        </>
    )
}

export default Cloudmembership