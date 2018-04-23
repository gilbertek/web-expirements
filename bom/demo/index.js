import React from 'react';
import ReactDOM from 'react-dom';
// import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../src';
import { CounterList } from '../src';

const tabData = [
  {
    label: 'Tacos',
    description: <p>Tacos are delicious</p>
  },
  {
    label: 'Burritos',
    description: <p>Sometimes a burrito is what you really need.</p>
  },
  {
    label: 'Coconut Korma',
    description: <p>WTF is coconut korma?</p>
  }
];

const App = () => (
  <div className="container">
    <h2>Basic Tabs</h2>
    {/* <Tabs disabled={[1]} tabsOnBottom data={tabData} /> */}

    <CounterList />

    {/* <Tabs> */}
    {/*   <TabList> */}
    {/*     <Tab>Tacos</Tab> */}
    {/*     <Tab isDisabled>Burrito</Tab> */}
    {/*     <Tab>Coconut Korma</Tab> */}
    {/*   </TabList> */}
    {/*   <TabPanels> */}
    {/*     <TabPanel> */}
    {/*       <p>Tacos are delicious</p> */}
    {/*     </TabPanel> */}
    {/*     <TabPanel> */}
    {/*       <p>Sometimes a burrito is what you really need.</p> */}
    {/*     </TabPanel> */}
    {/*     <TabPanel> */}
    {/*       <p>WTF is coconut korma?</p> */}
    {/*     </TabPanel> */}
    {/*   </TabPanels> */}
    {/* </Tabs> */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('app-container'));
