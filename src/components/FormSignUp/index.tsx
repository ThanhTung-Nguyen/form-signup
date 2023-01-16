import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  FormInstance,
  Input,
  Row,
  Select
} from "antd";
import "../../App.css";
import TitleSignUp from "./title/TitleSignUp";
import ModalResult from "../ModalResult";

interface IFormSignUpProps {
  form: FormInstance<any> | undefined;
  onFinish: ((values: any) => void) | undefined;
}
const dateFormatList = "DD/MM/YYYY";
const FormSignUp:React.FC<IFormSignUpProps> = (props) => {

  return (
    <>
      <div className="form_cover">
          <Form
            className="form"
            layout="vertical"
            colon={false}
            labelWrap={true}
            form={props.form}
            onFinish={props.onFinish}
            onFinishFailed={(err) => {
              console.log("ERROR:", err);
            }}
          >
            <Row gutter={{ sm: 16, md: 16, lg: 32 }}>
              <Col xs={24}>
                <TitleSignUp />
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
                  <Input
                    id="name"
                    placeholder="Nhập họ tên"
                    type="text"
                    allowClear
                  />
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
                  <Input
                    id="phone"
                    placeholder="Nhập số điện thoại"
                    type="number"
                    allowClear
                  />
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
              <Col xs={24} md={{ span: 12, offset: 6 }}>
                <Form.Item>
                  <Button
                    className="signup_btn"
                    type="primary"
                    size="large"
                    htmlType="submit"
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
