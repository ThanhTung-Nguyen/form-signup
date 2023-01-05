import React from 'react'
import { Image, Layout } from "antd";
import logo from '../images/logo-trang-01.png'
const { Header } = Layout;
const HeaderPage = () => {
  return (
    <Header>
          <Image src={logo} width={98} height={40} preview={false} />
    </Header>
  );
}

export default HeaderPage