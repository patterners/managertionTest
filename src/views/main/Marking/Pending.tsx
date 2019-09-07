import * as React from "react";
import "./Pending.css"
import { Table } from 'antd';
import { inject, observer } from 'mobx-react'

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
interface Props {
    question: any,
    history:any
}
@inject('question')
@observer
class ClassAdministration extends React.Component<Props> {
    state = {
        data
    }
    render() {
        return (
            <div>
                <h2>待批班级</h2>
                <div className="pending">
                    <div>
                        <Table onRow={record => {
                            return {
                                onClick: (event) => {
                                    console.log(event)
                                    // this.props.history.push("/main/detailpijuan")
                                 }, // 点击行
                            };
                        }} columns={columns} dataSource={this.state.data} size="middle" />
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const { data } = await this.props.question.getclass()
        const newdata = data.map((item: any, index: number) => {
            return {
                key: index,
                name: item.grade_name,
                age: item.subject_text,
                address: item.subject_text,
                rate: item.room_text,
                operation: "批卷"
            }
        })
        this.setState({
            data: newdata
        })
    }
}
export default ClassAdministration



