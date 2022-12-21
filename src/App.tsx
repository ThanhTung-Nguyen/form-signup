import React from "react";
import { Card, Image, Layout } from "antd";
import logo from "./images/logo-trang-01.png";
import FormSignUp from "./components/FormSignUp";
import "./App.css";
const { Header, Content } = Layout;
const {Meta} = Card;
function App() {
  return (
    <Layout>
      <Header>
        <Image src={logo} width={98} height={40} />
      </Header>
      <Content>
        <FormSignUp/>
      </Content>
    </Layout>
  );
}

export default App;
