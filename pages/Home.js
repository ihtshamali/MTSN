import Herosection from './components/Home/Hero-section/Hero-section'
import Services from './components/Home/services/Services'
import TeamsWrap from './components/Home/Teamswrap/TeamsWrap'
import Features from './components/Home/features/features'
import Memberships from './components/Home/membership/memberships'
import Packages from './components/Home/packages/packages'
import Team from './components/Home/team/team'
import Integrations from './components/Home/integrations/Integrations'
import Consultation from './components/Home/consultation/consultation'
import Scalesmarter from './components/Home/Scalesmarter/Scalesmarter'


function Home() {
  return (
    <>
        <Herosection/>
        <TeamsWrap/>
        <Services />
        <Features />
        <Memberships />
        <Packages />
        <Team/>
        <Integrations/>
        <Scalesmarter/>
        <Consultation/>

    </>
  )
}

export default Home