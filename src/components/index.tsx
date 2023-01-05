import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormSignUp from "./FormSignUp";
import FormResult from "./FormResult";
import HeaderPage from "./Header";

const { Content } = Layout;
const Register = () => {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderPage />
        <Content>
          <Routes>
            <Route path="/" element={<FormSignUp />} />
            <Route path="result" element={<FormResult />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default Register;
