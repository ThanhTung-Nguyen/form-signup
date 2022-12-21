import React from "react";
import {
  Avatar,
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Select,
  Typography,
} from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "../App.css";
import logo from "../images/logo2.png";
dayjs.extend(customParseFormat);

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const { Title } = Typography;
const FormSignUp = () => {
  return (
    <div className="form">
      <Form layout="vertical">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Avatar src={logo} />
          <Title level={4}>ĐĂNG KÝ TƯ VẤN KẾT QUẢ KHÁM</Title>
        </div>
        <Divider />
        <Form.Item label="Mã SID" required>
          <Input placeholder="Nhập mã SID" />
        </Form.Item>
        <Form.Item label="Họ tên" required>
          <Input placeholder="Nhập họ tên" />
        </Form.Item>
        <Form.Item label="Số điện thoại liên hệ" required>
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item label="Ngày tư vấn" required>
          <DatePicker
            style={{ width: "100%" }}
            // defaultValue={dayjs("", dateFormatList)}
            format={dateFormatList}
            placeholder="Nhập ngày hoặc chọn(vd: 27/11/1995....)"
          />
        </Form.Item>
        <Form.Item label="Khung giờ tư vấn" required>
          <Select
            // defaultValue="1"
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
        <Form.Item label="Hình thức tư vấn" required>
          <Select
            // defaultValue="on"
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
        <Form.Item label="Lý do tư vấn">
          <Input placeholder="Nhập lý do"/>
        </Form.Item>
        <Form.Item>
          <Button style={{ width: "100%" }} type="primary">Đăng ký</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSignUp;
