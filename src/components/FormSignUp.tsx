import React from "react";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
  Image
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "../App.css";
import logo from "../images/logo2.png";
import context from "../images/Mobile.png"
dayjs.extend(customParseFormat);

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const { Title } = Typography;
const FormSignUp = () => {
  return (
    <>
      <div className="form_cover">
        <Form className="form" layout="vertical" colon={false} labelWrap={true}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24}>
              <Space className="form_title">
                <Avatar
                  className="logo"
                  src={logo}
                />
                <Title level={3}>ĐĂNG KÝ TƯ VẤN KẾT QUẢ KHÁM</Title>
              </Space>
              <Divider />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Form.Item htmlFor="sid" label="Mã SID" required>
                <Input id="sid" placeholder="Nhập mã SID" allowClear />
              </Form.Item>
              <Form.Item htmlFor="name" label="Họ tên" required>
                <Input id="name" placeholder="Nhập họ tên" allowClear />
              </Form.Item>
              <Form.Item htmlFor="phone" label="Số điện thoại liên hệ" required>
                <Input id="phone" placeholder="Nhập số điện thoại" allowClear />
              </Form.Item>
              <Divider className="ke" />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Form.Item htmlFor="date" label="Ngày tư vấn" required>
                <DatePicker
                  id="date"
                  style={{ width: "100%" }}
                  // defaultValue={dayjs("", dateFormatList)}
                  format={dateFormatList}
                  placeholder="Nhập ngày hoặc chọn(vd: 27/11/1995....)"
                />
              </Form.Item>
              <Form.Item htmlFor="time" label="Khung giờ tư vấn" required>
                <Select
                  id="time"
                  style={{ width: "100%" }}
                  placeholder="Chọn"
                  allowClear
                  options={[
                    {
                      value: "1",
                      label: "giờ thứ nhất",
                    },
                    {
                      value: "2",
                      label: "giờ thứ hai",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item htmlFor="onoff" label="Hình thức tư vấn" required>
                <Select
                  id="onoff"
                  style={{ width: "100%" }}
                  placeholder="Chọn"
                  allowClear
                  options={[
                    {
                      value: "off",
                      label: "Tư vấn trực tiếp",
                    },
                    {
                      value: "on",
                      label: "Tư vấn online",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item htmlFor="cause" label="Lý do tư vấn">
                <Input
                  id="cause"
                  placeholder="Nhập lý do"
                  style={{ height: "4.375em", borderRadius: "0.313em" }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <Form.Item>
                <Button className="signup_btn" type="primary">
                  Đăng ký
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Image className="mobile" src={context} />
    </>
  );
};

export default FormSignUp;
