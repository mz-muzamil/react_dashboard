import React, { Fragment } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;
const UserData = () => {
  const location = useLocation();
  const menuItems = [<Link to="/">Home</Link>, <Link to="/users">Users</Link>];

  const getCurrentRouteIndex = () => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case "/home":
        return "1";
      case "/users":
        return "2";
      default:
        return "1";
    }
  };

  return (
    <Fragment>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log("broken", broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[getCurrentRouteIndex()]}
          items={menuItems.map((item, index) => ({
            key: String(index + 1),
            label: item,
          }))}
        />
      </Sider>
      {/* <Sider>
        <nav className="navigation">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/users" ? "active" : ""}>
              <Link to="/users">Users</Link>
            </li>
            <li className={location.pathname === "/new" ? "active" : ""}>
              <Link to="/new">New</Link>
            </li>
          </ul>
        </nav>
      </Sider> */}
    </Fragment>
  );
};

export default UserData;
