/* eslint-disable */
import { useNavigate } from 'react-router-dom'
import Item from '@enact/sandstone/Item';
import { useEffect, useState } from 'react';
import { Header } from '@enact/sandstone/Panels';
import PopupTabLayout, { TabPanel, TabPanels } from '@enact/sandstone/PopupTabLayout';
import { useGlobalContext } from '../../utils/contexts/GlobalContext';
import { Tab } from '@enact/sandstone/TabLayout';
import Icon from '@enact/sandstone/Icon';
import ri from '@enact/ui/resolution';

const SlotBefore = () => {
  const { logOut, userInfo } = useGlobalContext();
  const navigate = useNavigate()
  const [openHeader, setOpenHeader] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)

  const exitApp = () => {
    console.log(window?.webOS);
    if (window.webOS && window.webOS.application) {
      window.webOS.application.exit();
    }
  }

  return (
    <nav onBlur={() => setOpenHeader(true)} onBlurCapture={() => setOpenHeader(false)} className={`flex justify-between`}>
      <ul className="flex items-center">
        <Item onClick={() => navigate('/information')} inline={true}>
          {
            userInfo ? <img
              className='rounded-full' src="https://dummyimage.com/50/e048e0/0011ff" alt="" /> : <Icon>profile</Icon>
          }
        </Item>
        <Item onClick={() => setOpenPopup(true)} inline={true}><Icon>gear</Icon></Item>
        <Item onClick={() => exitApp()} inline={true}><Icon>closex</Icon></Item>
        <SettingPopup open={openPopup} closeSettings={() => setOpenPopup(false)} />

      </ul>
    </nav>
  )
}

const SlotAfter = () => {
  const { logOut, userInfo } = useGlobalContext();

  return (
    <div></div>
  )
}

// header-main z-50
const MainLayout = ({ children }) => {

  return (
    <div className="h-full w-full flex flex-col">
      <Header className='h-[230px]' title="Bzcom 001" onFocus={() => console.log()} noCloseButton={true} slotBefore={
        <SlotAfter />
      } slotAfter={
        <SlotBefore />
      } type='compact' />
      <main className="flex-grow overflow-hidden">{children}</main>
    </div>
  )
}

export default MainLayout;

const SettingPopup = ({ open, closeSettings }) => {
  const [indexPanelFirst, setIndexPanelFirst] = useState(0)
  const [indexPanelSecond, setIndexPanelSecond] = useState(0)

  useEffect(() => {
    if (!open) {
      setIndexPanelFirst(0)
      setIndexPanelSecond(0)
    }
  }, [open])
  return (
    <PopupTabLayout open={open} size="" onClose={() => closeSettings()}
      orientation="vertical"
      tabSize={null}
      collapsed={false}
      spotlightRestrict="self-only"
    >
      <Tab icon="browser" title="Language">
        <TabPanels
          backButtonBackgroundOpacity="transparent"
          closeButtonBackgroundOpacity="transparent"
          index={indexPanelFirst}
          onBack={function noRefCheck() {
            setIndexPanelFirst(indexPanelFirst - 1)
          }}
          noCloseButton={false}
          onClose={function noRefCheck() {
            closeSettings()
          }}
          onTransition={function noRefCheck() { }}
          onWillTransition={function noRefCheck() { }}
        >
          <TabPanel>
            <Header title="First Panel" type="compact" />
            <Item onClick={() => setIndexPanelFirst(indexPanelFirst + 1)}>Demo 1</Item>
          </TabPanel>
          <TabPanel>
            <Header title="Second Panel" type="compact" />
            <Item>Item 1 in Panel 1</Item>
            <Item>Item 2 in Panel 1</Item>
          </TabPanel>
        </TabPanels>
      </Tab>
      <Tab icon="wifi4" title="Network">
        <TabPanels
          backButtonBackgroundOpacity="transparent"
          closeButtonBackgroundOpacity="transparent"
          index={indexPanelSecond}
          onBack={function noRefCheck() {
            setIndexPanelSecond(indexPanelSecond - 1)
          }}
          onClose={function noRefCheck() {
            closeSettings()
          }}
          onTransition={function noRefCheck() { }}
          onWillTransition={function noRefCheck() { }}
        >
          <TabPanel>
            <Header title="First Panel" type="compact" />
            <Item onClick={() => setIndexPanelSecond(indexPanelSecond + 1)}>Demo 2</Item>
          </TabPanel>
          <TabPanel>
            <Header title="Second Panel" type="compact" />
            <Item>Item 1 in Panel 2</Item>
            <Item>Item 2 in Panel 2</Item>
          </TabPanel>
        </TabPanels>
      </Tab>
      <Tab icon="support" title="Help">
        <TabPanels
          backButtonBackgroundOpacity="transparent"
          closeButtonBackgroundOpacity="transparent"
          index={indexPanelSecond}
          onBack={function noRefCheck() {
            setIndexPanelSecond(indexPanelSecond - 1)
          }}
          onClose={function noRefCheck() {
            closeSettings()
          }}
          onTransition={function noRefCheck() { }}
          onWillTransition={function noRefCheck() { }}
        >
          <TabPanel>
            <Header title="First Panel" type="compact" />
            <Item onClick={() => setIndexPanelSecond(indexPanelSecond + 1)}>Demo 2</Item>
          </TabPanel>
          <TabPanel>
            <Header title="Second Panel" type="compact" />
            <Item>Item 1 in Panel 2</Item>
            <Item>Item 2 in Panel 2</Item>
          </TabPanel>
        </TabPanels>
      </Tab>
    </PopupTabLayout>
  )
}