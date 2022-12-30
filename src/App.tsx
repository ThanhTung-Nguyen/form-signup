import React from "react";
import { Image, Layout } from "antd";
import logo from "./images/logo-trang-01.png";
import FormSignUp from "./components/FormSignUp";
import FormResult from "./components/FormResult";
import FormikTest from "./components/FormikTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const { Header, Content } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Image src={logo} width={98} height={40} preview={false} />
        </Header>
        <Content>
          {/* <FormikTest /> */}
          <Routes>
            <Route path="/" element={<FormSignUp />} />
            <Route path="result" element={<FormResult />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
