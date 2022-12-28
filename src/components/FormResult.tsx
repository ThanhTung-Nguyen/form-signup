import React from 'react'
import { Result } from 'antd';
import TitleResult from "./TitleResult";
import SubTitle from './SubTitle';
import Checked from './Checked';
import "../App.css"

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
}

export default FormResult