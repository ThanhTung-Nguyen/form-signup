import React from "react";
import { Result } from "antd";
import TitleResult from "./title/TitleResult";
import SubTitle from "./subtitle/SubTitle";
import Checked from "./checked/Checked";
import "../../App.css";

const FormResult = () => {
  return (
    <>
      <div className="formresult_cover">
        <Result
          icon={<Checked />}
          title={<TitleResult />}
          subTitle={<SubTitle />}
        />
      </div>
    </>
  );
};

export default FormResult;
