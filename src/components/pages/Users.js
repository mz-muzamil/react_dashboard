import React, { Fragment } from "react";
import { Button, Tabs } from "antd";
import UserData from "../userdata/userdata";

const Users = () => {
  const items = [
    {
      key: "1",
      label: `Users`,
      children: <UserData />,
    },
    {
      key: "2",
      label: `Profiles`,
      children: `Content of Tab Profiles`,
    },
    {
      key: "3",
      label: `Roles`,
      children: `Content of Tab Roles`,
    },
    {
      key: "4",
      label: `Teams`,
      children: `Content of Tab Teams`,
    },
  ];
  const operations = (
    <Fragment>
      <div className="extra-options">
        <Button type="primary">
          <span className="material-symbols-outlined">add</span>Add User
        </Button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <Tabs tabBarExtraContent={operations} items={items} />
    </Fragment>
  );
};

export default Users;
