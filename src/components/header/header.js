import React, { Fragment } from "react";
import { Layout, theme } from "antd";
const { Header } = Layout;
const CompHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Fragment>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      ></Header>
    </Fragment>
  );
};

export default CompHeader;
