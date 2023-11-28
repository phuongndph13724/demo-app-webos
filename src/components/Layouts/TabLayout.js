import TabLayout, { Tab } from "@enact/sandstone/TabLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../utils/contexts/GlobalContext";
import { useState } from "react";

const TabsWithRoutes = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const {logOut} = useGlobalContext()
  const navigate = useNavigate();
  const onSelect = ({ index }) => {
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/product");
        break;
      case 2:
        navigate("/product/1");
        break;
      case 3:
        navigate("/intro");
        break;
    case 4:
        logOut();
          break;
      default:
        break;
    }
  };
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
}

  return (
    <TabLayout
      className={isCollapsed ? 'tablayout-collapsed' : ''}
      onTabAnimationEnd={function noRefCheck() {
        // handleCollapse()
      }}
      onCollapse={
        () => {
            setIsCollapsed(false);
        }
      }
      onExpand={
        () => {
          setIsCollapsed(true);
      }
      }
      orientation="vertical"
      tabSize={null}
      onSelect={onSelect}
    >
      <Tab title="Home" icon="home">
        <Outlet />
      </Tab>
      <Tab title="Product" icon="gear">
        <Outlet />
      </Tab>
      <Tab title="Profile" icon="profile">
        <Outlet />
      </Tab>
      <Tab title="Intro" icon="miniplayer">
        <Outlet />
      </Tab>
    </TabLayout>
  );
};
export default TabsWithRoutes;
