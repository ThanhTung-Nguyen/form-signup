import { Image } from 'antd';
import React from 'react'
import checked from "../images/Checked.png";
import '../App.css'
const Checked = () => {
    return <Image rootClassName="checked" src={checked} preview={false} />;
}

export default Checked