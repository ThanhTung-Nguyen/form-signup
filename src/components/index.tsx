import React from "react";
import { Form, Layout } from "antd";
import FormSignUp from "./FormSignUp";
import FormResult from "./FormResult";
import HeaderPage from "./Header";
import ModalResult from "./ModalResult";
import Modal from "antd/es/modal/Modal";

const { Content } = Layout;
const Register = () => {
  
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      sid: fieldsValue["sid"],
      name: fieldsValue["name"],
      phone: fieldsValue["phone"],
      date: fieldsValue["date"].format("DD/MM/YYYY"),
      time: fieldsValue["time"],
      onoff: fieldsValue["onoff"],
      cause: fieldsValue["cause"],
    };
    console.log("Received values of form:", values);
    form.resetFields();
    setTimeout(()=>{showModal();
    }, 100)
    showModal();
  };

  return (
    <Layout>
      <HeaderPage />
      <Content>
        <FormSignUp
          form={form}
          onFinish={onFinish}
        />
        <ModalResult
          open={isModalOpen}
          onOK={handleOk}
          onCancel={handleCancel}
        />
      </Content>
    </Layout>
  );
};

export default Register;
