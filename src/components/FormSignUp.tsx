import React from "react";
import {
  Avatar,
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
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
    <div className="form_cover">
      <Form className="form" layout="vertical" colon={false} labelWrap={true} >
        <Form.Item>
          <Avatar src={logo} style={{ width: "4em", height: "4em" }} />
          <Title level={3}>ĐĂNG KÝ TƯ VẤN KẾT QUẢ KHÁM</Title>
        </Form.Item>
        <Divider />
        <div className="change_layout">
          <div>
            <Form.Item htmlFor="sid" label="Mã SID" required>
              <Input id="sid" placeholder="Nhập mã SID" allowClear />
            </Form.Item>
            <Form.Item htmlFor="name" label="Họ tên" required>
              <Input id="name" placeholder="Nhập họ tên" allowClear />
            </Form.Item>
            <Form.Item htmlFor="phone" label="Số điện thoại liên hệ" required>
              <Input id="phone" placeholder="Nhập số điện thoại" allowClear />
            </Form.Item>
          </div>
          <Divider className="ke" />
          <div>
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
          </div>
        </div>
        <Form.Item htmlFor="cause" label="Lý do tư vấn">
          <Input
            id="cause"
            placeholder="Nhập lý do"
            style={{ height: "4.375em", borderRadius: "0.313em" }}
          />
        </Form.Item>
        <Form.Item>
          <Button className="signup_btn" type="primary">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSignUp;
