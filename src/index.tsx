import React, { useState } from "react";
import { render } from "react-dom";
import moment from "moment";
import "antd-mobile/dist/antd-mobile.css";
import { DatePicker, List } from "antd-mobile";
import enUs from "antd-mobile/lib/date-picker/locale/en_US";
import "./styles.css";

const Da = () => {
  const [state, setState] = useState(new Date("2019-03-13T16:00:00.000+0000"));
  return (
    <div>
      <DatePicker
        mode="date"
        value={state}
        onChange={date => {
          console.log(date);
          setState(date);
          console.log(date);
        }}
      >
        <List.Item arrow="horizontal">Datetime</List.Item>
      </DatePicker>
      <p>======</p>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Da />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
