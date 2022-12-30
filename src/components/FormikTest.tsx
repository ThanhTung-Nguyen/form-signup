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
  Spin,
} from "antd";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useFormik } from "formik";
import logo from "../images/logo2.png";

const moment = require("moment");
const dateFormatList = "DD/MM/YYYY";
const { Title } = Typography;
const FormikTest = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: true,
    initialValues: {
      sid: "",
      name: "",
      phone: "",
      date: "",
      time: "",
      onoff: "",
      cause: "",
    },
    onSubmit: (values) => {
      console.log("Receive value of form(formik):", values);

      navigate("result");
    },
  });

  return (
    <>
      <div className="form_cover">
        <Spin spinning={false}>
          <Form
            className="form"
            layout="vertical"
            colon={false}
            labelWrap={true}
            onFinish={formik.handleSubmit}
            onFinishFailed={(err) => {
              console.log("ERROR:", err);
            }}
          >
            <Row gutter={{ sm: 16, md: 16, lg: 32 }}>
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
                    value={formik.values.sid}
                    onChange={formik.handleChange}
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
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
                    type="string"
                    allowClear
                    value={formik.values.phone}
                    onChange={formik.handleChange}
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
                    onChange={(value) => {
                      formik.setFieldValue("date", value);
                      formik.handleChange(
                        moment(formik.values.date, "DD/MM/YYYY").format(
                          "DD/MM/YYYY"
                        )
                      );
                    }}
                    value={
                      formik.values.date
                        ? moment(formik.values.date, "DD/MM/YYYY")
                        : ""
                    }
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
                    value={formik.values.time}
                    onChange={(value) => {
                      formik.setFieldValue("time", value);
                      formik.handleChange(value);
                    }}
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
                    value={formik.values.onoff}
                    onChange={(value) => {
                      formik.setFieldValue("onoff", value);
                      formik.handleChange(value);
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name={"cause"} htmlFor="cause" label="Lý do tư vấn">
                  <Input
                    id="cause"
                    placeholder="Nhập lý do"
                    style={{ height: "4.375em", borderRadius: "0.313em" }}
                    value={formik.values.cause}
                    onChange={formik.handleChange}
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
                  >
                    💅 Đăng ký
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Spin>
      </div>
    </>
  );
};

export default FormikTest;
