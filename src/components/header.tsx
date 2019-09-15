import * as React from 'react';
import { inject, observer } from 'mobx-react'
import { Layout, Select, Menu, Dropdown, Avatar, Modal, message, Input, Form, Icon, Upload } from 'antd';
import "../index.css"

const { Option } = Select;
const { Header } = Layout;
const langList = [
  {
    locale: "zh",
    title: "中文"
  },
  {
    locale: "en",
    title: "英文"
  }
]
@inject("global", 'user')
@observer
export class header extends React.Component<any> {
  handleChange = (value: any) => {
    this.props.global.changeLocale(value)
  }
  render() {
    return (
      <div>
        <div className="log">
          <img src="/1.png" />

          <div className="header-lang">
            选择语言：
                <Select defaultValue="中文" onChange={this.handleChange}>
              {langList.map((item: any, index: number) => <Option value={item.locale} key={index}>{item.title}</Option>)}

            </Select>
          </div>
          <div className="log-right">
            <span></span>
            <p>chenmanjie</p>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
