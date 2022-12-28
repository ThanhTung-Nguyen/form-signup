import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
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
  Typography
} from "antd";
// import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "../App.css";
import logo from "../images/logo2.png";
import { useForm } from "antd/es/form/Form";
// dayjs.extend(customParseFormat);

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const { Title } = Typography;
const FormSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [resolve, setResolve] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const onFinish = (fieldsValue: any) => {
    // console.log(fieldsValue);
    setResolve(true);
    setLoading(true);
    const values = {
      ...fieldsValue,
      sid: fieldsValue["sid"],
      name: fieldsValue["name"],
      phone: fieldsValue["phone"],
      date: fieldsValue["date"].format("DD/MM/YYYY"),
      time: fieldsValue["time"],
      onoff: fieldsValue["onoff"],
      cause: fieldsValue["cause"]
    };
    console.log("Received values of form:", values);
  };

  return (
    <>
      <div className="form_cover">
        <Form
          // form={form}
          className="form"
          layout="vertical"
          colon={false}
          labelWrap={true}
          onFinish={onFinish}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24}>
              <Space className="form_title">
                <Avatar className="logo" src={logo} />
                <Title level={3}>ĐĂNG KÝ TƯ VẤN KẾT QUẢ KHÁM</Title>
              </Space>
              <Divider />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Form.Item
                name={"sid"}
                htmlFor="sid"
                label="Mã SID"
                rules={[{ required: true, message: "Nhập SID" }]}
              >
                <Input
                  id="sid"
                  placeholder="Nhập mã SID"
                  type="number"
                  allowClear
                />
              </Form.Item>
              <Form.Item
                name={"name"}
                htmlFor="name"
                label="Họ tên"
                rules={[{ required: true, message: "Nhập tên của bạn" }]}
              >
                <Input id="name" placeholder="Nhập họ tên" allowClear />
              </Form.Item>
              <Form.Item
                name={"phone"}
                htmlFor="phone"
                label="Số điện thoại liên hệ"
                rules={[
                  {
                    required: true,
                    message: "Số điện thoại không được để trống",
                  },
                ]}
              >
                <Input id="phone" placeholder="Nhập số điện thoại" allowClear />
              </Form.Item>
              <Divider className="ke" />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Form.Item
                name={"date"}
                htmlFor="date"
                label="Ngày tư vấn"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày",
                  },
                ]}
              >
                <DatePicker
                  id="date"
                  style={{ width: "100%" }}
                  // defaultValue={dayjs("", dateFormatList)}
                  format={dateFormatList}
                  placeholder="Nhập ngày hoặc chọn(vd: 27/11/1995....)"
                />
              </Form.Item>
              <Form.Item
                name={"time"}
                htmlFor="time"
                label="Khung giờ tư vấn"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn khung giờ",
                  },
                ]}
              >
                <Select
                  id="time"
                  style={{ width: "100%" }}
                  placeholder="Chọn"
                  allowClear
                  options={[
                    {
                      value: "giờ thứ nhất",
                      label: "giờ thứ nhất",
                    },
                    {
                      value: "giờ thứ hai",
                      label: "giờ thứ hai",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name={"onoff"}
                htmlFor="onoff"
                label="Hình thức tư vấn"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng hình thức tư vấn",
                  },
                ]}
              >
                <Select
                  id="onoff"
                  style={{ width: "100%" }}
                  placeholder="Chọn"
                  allowClear
                  options={[
                    {
                      value: "offline",
                      label: "Tư vấn trực tiếp",
                    },
                    {
                      value: "online",
                      label: "Tư vấn online",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name={"cause"} htmlFor="cause" label="Lý do tư vấn">
                <Input
                  id="cause"
                  placeholder="Nhập lý do"
                  style={{ height: "4.375em", borderRadius: "0.313em" }}
                />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              md={{ span: 12, offset: 6 }}
              // xl={{ span: 14, offset: 5 }}
            >
              <Form.Item>
                <Button
                  className="signup_btn"
                  type="primary"
                  size="large"
                  htmlType="submit"
                  onClick={() => navigate("/result")}
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default FormSignUp;
