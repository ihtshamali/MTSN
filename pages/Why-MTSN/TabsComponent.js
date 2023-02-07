import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HowTab from './HowTab';
import WhatTab from './WhatTab';
import WhyTab from './WhyTab';

function TabsComponent() {
  return (
    <>
      <Container>
        <Tabs defaultActiveKey="why" 
          id="justify-tab-example"
          className="custom-tabs mb-5 rounded bg-grey-lite text-white justify-content-around shadow position-relative"
          justify>
          <Tab eventKey="why" title="Why">
            <WhyTab/>
          </Tab>
          <Tab eventKey="how" title="How">
            <WhatTab/>
          </Tab>
          <Tab eventKey="what" title="What">
            <HowTab/>
          </Tab>

        </Tabs>
      </Container>
    </>
  )
}

export default TabsComponent