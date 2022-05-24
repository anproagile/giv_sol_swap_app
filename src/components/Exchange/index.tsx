import React, { useState } from "react";
import { Button, Card, Popover } from "antd";
import { TradeEntry } from "../Trade";
import { AddToLiquidity } from "../Pool/add";
import { PoolAccounts } from "../Pool/view";
import { useWallet } from "../../contexts/wallet";
import { AccountInfo } from "../AccountInfo";

export const ExchangeView = (props: {}) => {
  const { connect, disconnect, connected } = useWallet();
  const tabStyle: React.CSSProperties = { width: 120 };
  const tabList = [
    {
      key: "trade",
      tab: <div style={tabStyle}>Trade</div>,
      render: () => {
        return <TradeEntry />;
      },
    },
    {
      key: "pool",
      tab: <div style={tabStyle}>Pool</div>,
      render: () => {
        return <AddToLiquidity />;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(tabList[0].key);

  const [activeMenu, setActiveMemu] = useState("none")
  const onClickHeaderMenu = (e: any, link: any) => {
    e.preventDefault();
    setActiveMemu(link);
  }

  const TopBar = (
    <nav className="header" id="header">
      <div className="c-grid-fluid">
        <div className="header__wrapper">
          <div className="header__wrapper-left">
            <div>
              <div className="logo logo--header">
                <a className="logo__btn" href="/">
                  <img src="/img/logo.png" alt="" />
                </a>
              </div>
              <div className="c-btn__wrapper">
                <a className="c-btn" href="https://thegivingpool.io" rel="noreferrer" target="_blank">
                  <span>THE GIVING POOL</span>
                </a>
              </div>
            </div>
            <div>
              <div className="hamburger hamburger--squeeze" role="button" hamburger-js="hamburger-js">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="header__wrapper-mobile" mobile-block-js="mobile-block-js">
            <div className="header__wrapper-middle">
              <nav className="header__nav">
                {/* <a className={activeMenu === "/home" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/home")} headernav-js="headerhome-js">Home</a>
                <a className={activeMenu === "/roadmap" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/roadmap")} headernav-js="headerroadmap-js">Roadmap</a>
                <a className={activeMenu === "/whitepaper" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/whitepaper")} headernav-js="headerwhitepaper-js">WHITEPAPER</a>
                <a className={activeMenu === "/tokenomics" ? "is-active" : "is-inactive"} href="/" onClick={e => onClickHeaderMenu(e, "/tokenomics")} headernav-js="headertokenomics-js">Tokenomics</a> */}
              </nav>
            </div>
            <div className="header__wrapper-right">
              <div className="c-btn__wrapper">
                {/* <a className="c-btn" href="https://thegivingpool.io" rel="noreferrer" target="_blank"><span>Home</span></a> */}
                {/* <a className="c-btn" href="/" onClick={connected ? disconnect : connect}><span>Connect wallet</span></a> */}
                <AccountInfo />
                {connected && (
                  <Popover
                    placement="bottomRight"
                    content={<PoolAccounts />}
                    trigger="click"
                  >
                    <Button type="text">My Pools</Button>
                  </Popover>
                )}
                <div>
                  {!connected && (
                    <a className="c-btn" href="/" onClick={connected ? disconnect : connect}><span>Connect wallet</span></a>            
                  )}
                  {connected && (
                    <Popover
                      placement="bottomRight"
                      title="Wallet public key"
                      trigger="click"
                    ></Popover>
                  )}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div >
    </nav >
    // <div className="App-Bar">
    //   <div className="App-Bar-left">
    //     <div className="App-logo" />
    //   </div>
    //   <div className="header__wrapper-right">
    //       <a className="c-btn" href="https://www.coinbase.com/price" rel="noreferrer" target="_blank"><span>Home</span></a>
    //       <AccountInfo />
    //     {connected && (
    //       <Popover
    //         placement="bottomRight"
    //         content={<PoolAccounts />}
    //         trigger="click"
    //       >
    //         <Button type="text">My Pools</Button>
    //       </Popover>
    //     )}
    //     <div>
    //       {!connected && (
    //         <a className="c-btn" href="/" onClick={connected ? disconnect : connect}><span>Connect wallet</span></a>            
    //       )}
    //       {connected && (
    //         <Popover
    //           placement="bottomRight"
    //           title="Wallet public key"
    //           trigger="click"
    //         ></Popover>
    //       )}
    //     </div>
          
    //   </div>
    //   {/* <div className="App-Bar-right">
        
        
    //     <AccountInfo />
    //     {connected && (
    //       <Popover
    //         placement="bottomRight"
    //         content={<PoolAccounts />}
    //         trigger="click"
    //       >
    //         <Button type="text">My Pools</Button>
    //       </Popover>
    //     )}
    //     <div>
    //       {!connected && (
    //         <Button
    //           type="text"
    //           size="large"
    //           onClick={connected ? disconnect : connect}
    //           style={{ color: "#2abdd2" }}
    //         >
    //           Connect
    //         </Button>
            
    //       )}
    //       {connected && (
    //         <Popover
    //           placement="bottomRight"
    //           title="Wallet public key"
    //           trigger="click"
    //         ></Popover>
    //       )}
    //     </div>
    //   </div> */}
    // </div>
  );

  return (
    <>
      {TopBar}
      <Card
        className="exchange-card"
        headStyle={{ padding: 0 }}
        tabList={tabList}
        tabProps={{
          tabBarGutter: 0,
        }}
        activeTabKey={activeTab}
        onTabChange={(key) => {
          setActiveTab(key);
        }}
      >
        {tabList.find((t) => t.key === activeTab)?.render()}
      </Card>
    </>
  );
};
