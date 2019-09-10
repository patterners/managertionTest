import * as React from "react";
import "./class.css"
import { Modal, Button } from 'antd';
import Listclass from "@/components/Administration/list"
import { inject, observer } from 'mobx-react'


interface Props {
    question: any,
}
@inject('question')
@observer
class ClassAdministration extends React.Component<Props> {
    state = { visible: false, flag: false, grade_id: "", list: [], classList: [], clssroomList: [], classname: "", classNumber: "", curriculumName: "" };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    async handleOk(e: any) {
        await this.props.question.addclass(this.state.classname, this.state.classNumber, this.state.curriculumName)
        this.getclass()
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        this.setState({
            visible: false,
        });
    };
    bianji(item: any) {
        this.setState({
            flag: true,
            classname: item.grade_name,
            grade_id: item.grade_id
        });
    }
    cancel() {
        this.setState({
            flag: false,
        });
    }
    render() {
        return (
            <div>
                <h2>班级管理</h2>
                <div className="antd-dabox">
                    <div className="and-but">
                        <Button className="button" size="large" type="primary" onClick={this.showModal}>+ 添加班级</Button>
                        <Modal
                            title="添加班级"
                            visible={this.state.visible}
                            onOk={this.handleOk.bind(this)}
                            onCancel={this.handleCancel}
                        >
                            <p>
                                <input className="inp" onChange={(e) => {
                                    this.setState({
                                        classname: e.target.value
                                    })
                                }} type="text" placeholder=" 班级名" />
                            </p>
                            <p>
                                <select name="" id="classNumber" onChange={(e) => {
                                    this.setState({
                                        classNumber: e.target.value
                                    })
                                }}>
                                    <option value="">请选择教室号</option>
                                    {this.state.clssroomList.map((item: any) => {
                                        return <option value={item.room_text}>{item.room_text}</option>
                                    })}
                                </select>
                            </p>
                            <p>
                                <select name="" id="curriculumName" onChange={(e) => {
                                    this.setState({
                                        curriculumName: e.target.value
                                    })
                                }}>
                                    <option value="">课程名</option>
                                    {this.state.classList && this.state.classList.map((item: any) => {
                                        return <option value={item.subject_text}>{item.subject_text}</option>
                                    })}
                                </select>
                            </p>
                        </Modal>
                    </div>
                    <div className="list">
                        <Listclass bianji={this.bianji.bind(this)} getclassfn={this.getclass.bind(this)} list={this.state.classList} />
                    </div>
                </div>
                {this.state.flag ? <div className="mask">
                    <div className="mask-div">
                        <p>
                            <input value={this.state.classname} className="inp" onChange={(e) => {
                                this.setState({
                                    classname: e.target.value
                                })
                            }} type="text" placeholder=" 班级名" />
                        </p>
                        <p>
                            <select name="" id="classNumber" onChange={(e) => {
                                this.setState({
                                    classNumber: e.target.value
                                })
                            }}>
                                <option value="">请选择教室号</option>
                                {this.state.clssroomList.map((item: any) => {
                                    return <option value={item.room_text}>{item.room_text}</option>
                                })}
                            </select>
                        </p>
                        <p>
                            <select name="" id="curriculumName" onChange={(e) => {
                                this.setState({
                                    curriculumName: e.target.value
                                })
                            }}>
                                <option value="">课程名</option>
                                {this.state.classList && this.state.classList.map((item: any) => {
                                    return <option value={item.subject_text}>{item.subject_text}</option>
                                })}
                            </select>
                        </p>
                        <p id="mask-btn">
                            <button id="mask-cancel" onClick={this.cancel.bind(this)}>取消</button><button id="mask-submit" onClick={this.submit.bind(this)}>提交</button>
                        </p>

                    </div>
                </div> : ""}

            </div>
        )
    }
    async submit() {
        console.log(this.state.grade_id, this.state.classNumber, this.state.curriculumName)
        // 0h3i3-f7yyg-vckzjp-le2gvn  123  node基础
        // await this.props.question.updataclass(this.state.grade_id, this.state.classNumber, this.state.curriculumName)
        // { grade_id, grade_name, subject_id, room_id: "" }
        this.setState({
            flag: false
        })
    }
    componentDidMount() {
        this.getclass()
    }
    async getclass() {
        const { data } = await this.props.question.getclass()
        const result = await this.props.question.getclassroom()
        const data1 = (await this.props.question.noclassroom()).data;
        this.setState({
            classList: [...data,...data1],
            clssroomList: result.data
        })
    }

}
export default ClassAdministration