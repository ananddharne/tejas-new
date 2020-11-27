import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./components/TopicMenu";
import Home from "./components/Home/Home";
import YieldPools from "./components/YieldPools/YieldPools";
import Web3 from "web3";


import Marqueec from "./components/Marquee/Marquee";
import { Switch, Route, Link,  BrowserRouter as Router, } from 'react-router-dom';
import Web3Modal from "web3modal";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const topics = ["Home", "YieldPools", "Staking", "Auction", "History"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <Router>
    <div className="App">
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className="content">
        <Marqueec/>
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/YieldPools" component={YieldPools} />

            {/* <Route path="/seatings" component={SeatingsList} />
            <Route path="/my-company" component={CompanyList} />
            <Route path="/rooms" component={RoomsList} /> */}
          </Switch>
          {/* {topics[contentIndex]} */}
        </Layout.Content>
      </Layout>
    </div>
    </Router>
  );
}

export default App;
