import React, { Fragment } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./components/pages/Users";
import Home from "./components/pages/Home";
import SideBar from "./components/sidebar/sidebar";
import NewSilder from "./components/pages/new_silder";

const { Content } = Layout;
const App = () => {
  return (
    <Fragment>
      <Layout
        className="main bg-gray"
       
      >
        <Router>
          <SideBar />
          <Content
            className="bg-gray"
            style={{
              margin: "30px 10px",
              padding: 10,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/new" element={<NewSilder />} />
            </Routes>
          </Content>
        </Router>
      </Layout>
    </Fragment>
  );
};

export default App;
