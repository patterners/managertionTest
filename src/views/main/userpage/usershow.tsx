import * as React from "react";
import "./usershow.css"
import { Tabs, Table } from 'antd';
const { TabPane } = Tabs;
const columns = [
    {
        title: '用户',
        dataIndex: 'name',
    },
    {
        title: '密码',
        dataIndex: 'age',
    },
    {
        title: '身份',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];
class Usershow extends React.Component {
    callback(key: any) {
        console.log(key)
    }
    render() {
        return (
            <div className="usershow">
                <h2>用户展示</h2>
                <div>
                    <Tabs onChange={this.callback.bind(this)} type="card">
                        <TabPane tab="用户数据" key="1">
                            <h1>用户数据</h1>
                            <div>
                                <Table columns={columns} dataSource={data} size="middle" />
                            </div>
                        </TabPane>
                        <TabPane tab="身份数据" key="2">
                            <h1>身份数据</h1>
                        </TabPane>
                        <TabPane tab="api接口权限" key="3">
                            <h1>api接口权限</h1>
                        </TabPane>
                        <TabPane tab="身份和api接口关系" key="4">
                            <h1>身份和api接口关系</h1>
                        </TabPane>
                        <TabPane tab="视口接口权限" key="5">
                            <h1>视口接口权限</h1>
                        </TabPane>
                        <TabPane tab="身份和视图权限关系" key="6">
                            <h1>身份和视图权限关系</h1>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Usershow



