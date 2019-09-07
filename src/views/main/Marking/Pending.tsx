import * as React from "react";
import "./Pending.css"
import { Table } from 'antd';
const columns = [
    {
        title: '班级名',
        dataIndex: 'name',
    },
    {
        title: '课程名称',
        dataIndex: 'age',
    },
    {
        title: '阅卷状态',
    },
    {
        title: '课程名称',
        dataIndex: 'address',
    },
    {
        title: '成材率',
        dataIndex: 'rate',
    },
    {
        title: '操作',
        dataIndex: 'operation',
    }
];
const data = [
    {
        key: '1',
        name: '1611A',
        age: "组件化开发(vue)",
        address: "组件化开发(vue)",
        rate: 34102,
        operation: "批卷"
    },
    {
        key: '2',
        name: '1611A',
        age: "组件化开发(vue)",
        address: '组件化开发(vue)',
        rate: 34102,
        operation: "批卷"
    },
    {
        key: '3',
        name: '1601B',
        age: "组件化开发(vue)",
        address: '组件化开发(vue)',
        rate: 34102,
        operation: "批卷"
    },
];
class ClassAdministration extends React.Component {
    render() {
        return (
            <div>
                <h2>待批班级</h2>
                <div className="pending">
                    <div>
                        <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                </div>
            </div>
        )
    }
}
export default ClassAdministration



