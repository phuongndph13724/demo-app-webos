import React from "react";
import { createBrowserHistory } from "history";
import Button from "@enact/sandstone/Button";
import PropTypes from "prop-types";
import kind from "@enact/core/kind";
import css from "./UserInfo.module.less";
import Spottable from "@enact/spotlight/Spottable";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../utils/contexts/GlobalContext";
import Icon from "@enact/sandstone/Icon";

const Infomation = kind({
  name: "Infomation",
  functional: true,
  propTypes: {
    color: PropTypes.string,
  },
  defaultProps: {
    color: "green",
  },
  contextType: React.createContext({ backgroundColor: "#000000" }),
  styles: {
    css,
    className: "Infomation",
  },
  handlers: {
    onKeyDown: (evt, props) => {},
  },
  computed: {
    borderColor: ({ color }) => "light" + color,
    color: ({ color }, context) => context.backgroundColor || color,
  },
  // Render the thing, already!
  render: ({ color, borderColor, children, ...rest }) => {
    return (
      <div {...rest} style={{ backgroundColor: color, borderColor }}>
        <UserInfo>{children}</UserInfo>
      </div>
    );
  },
});

const UserInfo = () => {
  const { logOut } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();
  const SpottableLi = Spottable("li");
  const SpottableButton = Spottable("button");
  console.log(location?.pathname === "/information");
  const history = createBrowserHistory();
  const onSelect = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center">
        <div className="w-[80%] max-w-[80%] flex justify-center items-center h-full">
          {/* <TabLayout
                        className={'tablayout-userinfo'}
                        css={css}
                        style={{maxWidth : "100%"}}
                        collapsed={false}
                        onTabAnimationEnd={function noRefCheck() {
                            // handleCollapse()
                        }}
                        onCollapse={
                            () => {
                            }
                        }
                        onExpand={
                            () => {
                        }
                        }
                        orientation="vertical"
                        tabSize={null}
                        onSelect={onSelect}
                        >
                        <Tab className='justify-center' style={{ width : "70%", display : "flex"}} title="Home">
                            <div className='h-full w-[75%]'>
                                <Button>Click 1</Button>
                            </div>
                        </Tab>
                        <Tab className='justify-center' style={{ width : "70%", display : "flex"}} title="Product">
                            <div className='h-full w-[75%]'>
                                <Button>Click 2</Button>
                            </div>
                        </Tab>
                        <Tab className='justify-center' style={{ width : "70%", display : "flex"}} title="Profile">
                            <div className='h-full w-[75%]'>
                                <Button>Click 3</Button>
                            </div>
                            <div>
                                <button>Click</button>
                            </div>
                        </Tab>
                    </TabLayout> */}
          <div className="w-[20%] flex flex-col justify-between h-full bg-gray-900">
            <ul className="flex flex-col p-2 gap-2">
              <div>
                <SpottableButton
                  className="flex justify-start focus:bg-white focus:text-black focus:rounded"
                  onClick={() => {
                    navigate("/");
                    // history.back()
                  }}
                >
                  <Icon>arrowhookleft</Icon>
                </SpottableButton>
              </div>
              <SpottableLi
                onClick={() => navigate("/information")}
                className={`${
                  location?.pathname === "/information"
                    ? "bg-white text-black"
                    : ""
                } rounded  p-2 focus:bg-white focus:text-black my-2`}
              >
                Your profile
              </SpottableLi>
              <hr />
              <SpottableLi
                onClick={() => navigate("/information/directory")}
                className={`${
                  location?.pathname === "/information/directory"
                    ? "bg-white text-black"
                    : ""
                } rounded  p-2 focus:bg-white focus:text-black my-2`}
              >
                Directory
              </SpottableLi>
              <SpottableLi
                onClick={() => navigate("/information/history")}
                className={`${
                  location?.pathname === "/information/history"
                    ? "bg-white text-black"
                    : ""
                } rounded  p-2 focus:bg-white focus:text-black my-2`}
              >
                History
              </SpottableLi>
              <hr />
            </ul>
            <ul className="flex flex-col p-2 gap-2">
              <hr />
              <SpottableLi
                onClick={() => logOut()}
                className={`rounded p-2 focus:bg-white focus:text-black  my-2`}
              >
                Sign out
              </SpottableLi>
            </ul>
          </div>
          <div className="w-[80%] h-full bg-gray-950 p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
