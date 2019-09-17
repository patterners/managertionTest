import * as React from "react";
import "./detailpijuan.css"
import { inject, observer } from "mobx-react"
@inject("user", "question")
@observer
class DetailPijuan extends React.Component<any> {
    state = {
        examData: [],
        optionData: []
    }
    async componentDidMount() {
        console.log(this.props.location)
        // const { exam } = await this.props.user.detailtest(this.props.location.state.grade_id)
        const { data } = await this.props.question.noclassroom()
        this.setState({
            // examData: exam,
            optionData: data
        })
    }
    render() {
        return (
            <div className="detailpijuan">
                <div className="main-top">
                    <div className="status">
                        <span>状态:</span>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div className="class">
                        <span>班级:</span>
                        <select>
                            {this.state.optionData && this.state.optionData.map((item: any,index:number) => {
                                return <option key={index} value={item.grade_name}>{item.grade_name}</option>
                            })}
                        </select>
                    </div>
                    <div className="seek">
                        <button id="seek">查询</button>
                    </div>
                </div>
                <div className="main-list">
                    <h3>试卷列表</h3>
                    <table>
                        <tr>
                            <td>班级</td>
                            <td>姓名</td>
                            <td>阅卷状态</td>
                            <td>开始时间</td>
                            <td>结束时间</td>
                            <td>成材率</td>
                            <td>操作</td>
                        </tr>
                        {this.state.examData && this.state.examData.map((item: any) => {
                            return <tr className="trlist" key={item.exam_exam_id}>
                                <td>{this.props.location.state.grade_name}</td>
                                <td>{item.student_name}</td>
                                <td>未阅</td>
                                <td>{item.start_time}</td>
                                <td>{item.end_time}</td>
                                <td>-</td>
                                <td className="color_blue">批卷</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        )
    }
}
export default DetailPijuan