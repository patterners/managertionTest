import * as React from "react";
import "./student.css"
import { Table } from 'antd';
import { inject, observer } from 'mobx-react'
interface Props {
    question?: any
}
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '20%',
    },
    {
        title: '学号',
        dataIndex: 'gender',
        width: '20%',
    },
    {
        title: '班级',
        dataIndex: 'email',
    },
    {
        title: '教室',
        dataIndex: 'class',
    },
    {
        title: '密码',
        dataIndex: 'pwd',
    },
    {
        title: '操作',
        dataIndex: 'del',
    },

];

@inject('question')
@observer

class StutnentAdministration extends React.Component<Props> {
    state = {
        data: [],
        classNumber: []
    };
    async del(id: any) {
        await this.props.question.deleteStudent(id) 
        this.getxuesheng()
    }
    componentDidMount() {
        this.getxuesheng()
    }
    async getxuesheng() {
        const { data } = await this.props.question.getstudent()
        const newdata = data.map((item: any, index: any) => {
            return {
                key: index,
                name: item.student_name,
                gender: item.student_id,
                email: "1611A",
                class: 34312,
                pwd: item.student_pwd,
                del: <p onClick={this.del.bind(this, item.student_id)}>删除</p>
            }
        })
        const result = await this.props.question.getclassroom()
        this.setState({
            data: newdata,
            classNumber: result.data,
        })
    }
    render() {
        return (
            <div className="student">
                <h2>学生管理</h2>
                <div className="student-seach">
                    <input type="text" name="" id="" placeholder=" 输入学生姓名" />
                    <select name="" id="">
                        <option value="">请选择教室号</option>
                        {this.state.classNumber && this.state.classNumber.map((item: any, index: number) => {
                            return <option value="">{item.room_text}</option>
                        })}
                    </select>
                    <select name="" id="">
                        <option value="">班级名</option>
                    </select>
                    <input type="submit" name="" id="but1" />
                    <input type="reset" name="" id="but2" />
                </div>
                <div>
                    <Table
                        columns={columns}
                        dataSource={this.state.data}
                    />
                </div>
            </div>
        )
    }
}
export default StutnentAdministration
