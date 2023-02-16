import Head from 'next/head'
import Hero from './components/Herosection/herosection'
import Cloudmebersip from '../public/cloud-membership.png'
import Section1cloudmembership from './cloud-membership/section1-cloud-membership'
import Startupplan from './cloud-membership/startup-plan'
import Enterpriseplan from './cloud-membership/enterprise-plan'
import Customplan from './cloud-membership/custom-plan'
import Consultation from '../pages/components/Home/consultation/consultation'

function Cloudmembership() {
    return (
        <>

            <Head>
                <title>Cloud Membership-MTSN</title>
                <meta name="description" content="Multi Tech Solutions " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Hero className="py-5"
                firstcol="col-xxl-7 col-lg-6 col-12"
                spantext="Acquire High-Caliber Skill"
                headingtitle="Your Digital Workspace is Prepared and Accessible"
                headingclass="h1tag text-white mb-2"
                paragraphtext="Take Your Development to the Next Level with a Cloud-Based Team from MTSN"
                btntitle="Book Free Consultation"
                btncname="btn btn-lg text-decoration-none text-white position-relative at-zindex3"

                secondcol="d-none d-lg-block overflow-hidden mb-n2  col-xxl-5 col-lg-6 col-12"
                picture={Cloudmebersip}
                alttext="Cloudmebersip"
                cname="py-5 image-size"
            />
            <Section1cloudmembership />
            <Startupplan />
            <Enterpriseplan />
            <Customplan />
            <Consultation consultationclass="py-5 consultation-bg text-center"/>
        </>
    )
}

export default Cloudmembership