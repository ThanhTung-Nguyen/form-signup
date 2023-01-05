import React from "react";
import { Avatar, Typography, Space, Divider } from "antd";
import logo from "../../images/logo2.png";
const { Title } = Typography;
const TitleSignUp = () => {
  return (
    <>
      <Space className="form_title">
        <Avatar className="logo" src={logo} />
        <Title level={3}>ĐĂNG KÝ TƯ VẤN KẾT QUẢ KHÁM</Title>
      </Space>
      <Divider />
    </>
  );
};

export default TitleSignUp;
