import React from "react";
import { Image, Layout } from "antd";
import logo from "./images/logo-trang-01.png";
import FormSignUp from "./components/FormSignUp";
import FormResult from "./components/FormResult";
import "./App.css";
const { Header, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header>
        <Image src={logo} width={98} height={40} />
      </Header>
      <Content>
        <FormResult />
      </Content>
    </Layout>
  );
}

export default App;
