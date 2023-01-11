import React, { useState } from "react";
import { Button, Modal, Image, Row, Col } from "antd";
import checked from "../images/Checked.png";
import "../../App.css";
import { Typography } from "antd";

const { Text } = Typography;
interface IModalResultProps {
  open: boolean | undefined;
  onOK:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  onCancel:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}
const ModalResult:React.FC<IModalResultProps> = (props:any) => {
  
  return (
    <>
      <Modal
        mask={false}
        // closable={false}
        open={props.open}
        onOk={props.onOK}
        onCancel={props.OnCancel}
        footer={null}
      >
          <Row>
            <Col span={12} offset={6}>
              <Image
                rootClassName="modalresult_checked"
                src={checked}
                preview={false}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Text
                className="modalresult_title"
              >
                ĐĂNG KÝ TƯ VẤN KẾT QUẢ KHÁM THÀNH CÔNG!
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Text
                className="modalresult_subtitle"
              >
                Chúng tôi sẽ liên hệ lại ngay cho bạn!
              </Text>
            </Col>
          </Row>
      </Modal>
    </>
  );
};

export default ModalResult;