import React from "react";
import { Image, Layout } from "antd";
import logo from "./images/logo-trang-01.png";
import FormSignUp from "./components/FormSignUp";
import FormResult from "./components/FormResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const { Header, Content } = Layout;
function App() {
  return (
      <Layout>
        <Header>
          <Image src={logo} width={98} height={40} preview={false} />
        </Header>
        <Content>
          {/* <FormSignUp /> */}
          <Routes>
            <Route path="/" element={<FormSignUp />} />
            <Route path="result" element={<FormResult />} />
          </Routes>
        </Content>
      </Layout>
  );
}

export default App;
