import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Table, Input, Card, Col, Row } from "antd";
const UserData = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        const usersObject = response.data.map((item) => {
          return {
            key: item.id,
            name: item.name,
            username: item.username,
            email: item.email,
            phone: item.phone,
          };
        });
        setUsers(usersObject);
      });
  }, []);

  useEffect(() => {
    if (searchKeyword === "") {
      setFilteredData(users);
    } else {
      setFilteredData(filteredData);
    }
  }, [filteredData, users, searchKeyword]);

  const columns = [
    {
      title: "USER",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "USERNAME",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  const handleSearch = (event) => {
    const searchKeyword = event.target.value;
    setSearchKeyword(searchKeyword);
    const filteredData = users.filter(
      (item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.username.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <Fragment>
      <Card>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Input
              size="large"
              type="text"
              prefix={<span className="material-symbols-outlined">search</span>}
              placeholder="Search users"
              allowClear
              value={searchKeyword}
              onChange={handleSearch}
            />
          </Col>
        </Row>
      </Card>
      <Table dataSource={filteredData} columns={columns} />
    </Fragment>
  );
};

export default UserData;
