import * as React from "react";
import "./Pending.css"
import { inject, observer } from 'mobx-react'

interface Props {
    question: any,
    history: any
}
@inject('question')
@observer
class ClassAdministration extends React.Component<Props> {
    state = {
        data: []
    }
    routerdetail(item: any) {
        this.props.history.push("/main/detailpijuan", item)
    }
    render() {
        return (
            <div>
                <h2>待批班级</h2>
                <div className="pending">
                    <div className="table">
                        <table>
                            <tr>
                                <td>班级名称</td>
                                <td>课程名称</td>
                                <td>阅卷状态</td>
                                <td>课程名称</td>
                                <td>成材率</td>
                                <td>操作</td>
                            </tr>
                            {
                                this.state.data && this.state.data.map((item: any, index: number) => {
                                    return <tr className="tr_bg" key={index}>
                                        <td>{item.grade_name}</td>
                                        <td>{item.subject_text}</td>
                                        <td></td>
                                        <td>{item.subject_text}</td>
                                        <td>{item.room_text}</td>
                                        <td onClick={this.routerdetail.bind(this, item)}>批卷</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {
        const { data } = await this.props.question.noclassroom()
        console.log(data)
        this.setState({
            data
        })
    }
}
export default ClassAdministration



