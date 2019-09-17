import * as React from 'react';
import { inject, observer } from 'mobx-react'
import { Layout, Select, Menu, Dropdown} from 'antd';
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
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        我的班级
      </a>
    </Menu.Item>
    <span className="hr">-------------------</span>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
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
            <p><Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Chenmanjie
                </a>
            </Dropdown></p>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
