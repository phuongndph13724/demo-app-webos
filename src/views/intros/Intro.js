import React from 'react'
// import { TabLayout, TabPanel } from '@enact/sandstone/Panels';
import TabLayout, { Tab } from '@enact/sandstone/TabLayout';
import Item from '@enact/sandstone/Item';
import GridList from './GridList';
import Icon from '@enact/sandstone/Icon';
import { Header } from '@enact/sandstone/Panels';
import { ItemBase } from '@enact/ui/Item';
import IntroProfile from './IntroProfile';

const Intro = () => {
  return (
    <TabLayout
      onSelect={function noRefCheck() { }}
      onTabAnimationEnd={function noRefCheck() { }} 
      orientation="horizontal" 
      tabSize={1}>
      <Tab icon={'home'} children={<Icon>home</Icon>} title="Home">
        <GridList dataSize={35} />
      </Tab>
      <Tab icon="profile" title="Profile">
        {/* <ItemBase> */}
          <IntroProfile />
        {/* </ItemBase> */}
      </Tab>
    </TabLayout>
  )
}

export default Intro