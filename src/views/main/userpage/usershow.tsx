import * as React from "react";
import "./usershow.css"
<<<<<<< HEAD
class Usershow extends React.Component{
    render(){
=======
import { Table } from 'antd';
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
    render() {
>>>>>>> 61f9bf024de6be40a5adb19f0f35b85a3de6515c
        return (
            <div className="usershow">
                <h2>用户展示</h2>
                <div className="spans">
                    <div className="active">用户数据</div>
                    <div>身份数据</div>
                    <div>api接口权限</div>
                    <div>身份和api接口关系</div>
                    <div>视图接口权限</div>
                    <div>身份和视图权限关系</div>
                </div>
                <div className="change-content">
                    <div>
                        <h2>用户数据</h2>
<<<<<<< HEAD
                        
=======
                        <div>
                            <Table columns={columns} dataSource={data} size="middle" />
                        </div>
>>>>>>> 61f9bf024de6be40a5adb19f0f35b85a3de6515c
                    </div>
                </div>
            </div>
        )
    }
}

export default Usershow
