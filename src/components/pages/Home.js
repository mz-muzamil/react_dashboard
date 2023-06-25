import React, { Fragment } from "react";
import { Col, Row, Card, Typography } from "antd";

const Home = () => {
  const { Meta } = Card;
  const { Title } = Typography;
  return (
    <Fragment>
      <Row gutter={[16, 16]} justify={"center"}>
        <Col xs={24} sm={24} md={24} lg={24} xl={18}>
          <div className="header-info">
            <div className="name-circle">
              <span>om</span>
            </div>
            <Title level={4}>Welcome, oz!</Title>
            <Title level={2}>What would you like to do today?</Title>
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                className="custom-card"
                cover={
                  <span className="material-symbols-outlined">insights</span>
                }
                bordered={false}
              >
                <Meta
                  title="Create an Insight"
                  description="Genrate a custom specific, benchmark reports."
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                className="custom-card"
                cover={
                  <span className="material-symbols-outlined">
                    person_search
                  </span>
                }
                bordered={false}
              >
                <Meta
                  title="Prospecting"
                  description="Genrate a custom specific, benchmark reports."
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                className="custom-card"
                cover={
                  <span className="material-symbols-outlined">school</span>
                }
                bordered={false}
              >
                <Meta
                  title="Learn"
                  description="Genrate a custom specific, benchmark reports."
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                className="custom-card"
                cover={
                  <span className="material-symbols-outlined">
                    event_available
                  </span>
                }
                bordered={false}
              >
                <Meta
                  title="Activities"
                  description="Genrate a custom specific, benchmark reports."
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                className="custom-card"
                cover={
                  <span className="material-symbols-outlined">
                    auto_awesome
                  </span>
                }
                bordered={false}
              >
                <Meta
                  title="Content AI"
                  description="Genrate a custom specific, benchmark reports."
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                className="custom-card"
                cover={<span className="material-symbols-outlined">moving</span>}
                bordered={false}
              >
                <Meta
                  title="Opportunities"
                  description="Genrate a custom specific, benchmark reports."
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
