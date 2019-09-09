
import * as React from "react";
import "./class.css"
import { Modal, Button } from 'antd';
import Listclassroom from "@/components/Administration/Listclassroom"
import { inject, observer } from 'mobx-react'
interface Props {
    question: any,
}
@inject('question')
@observer
class Classroom extends React.Component<Props> {
    constructor(props: any) {
        super(props)
        this.getclassroom = this.getclassroom.bind(this);
    }
    state = { visible: false, list: [], value: '' };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    async handleOk() {
        await this.props.question.addclassroom(this.state.value)
        this.getclassroom()
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        this.setState({
            visible: false,
        });

    };
    render() {
        return (
            <div>
                <h2>教室管理</h2>
                <div className="antd-dabox">
                    <div className="and-but">
                        <Button className="button" size="large" type="primary" onClick={this.showModal}>+ 添加教室</Button>
                        <Modal
                            title="添加教室"
                            visible={this.state.visible}
                            onOk={this.handleOk.bind(this)}
                            onCancel={this.handleCancel}
                        >
                            <p>
                                <input className="inp" type="text" value={this.state.value} placeholder="请输入类型名称" onChange={(e) => {
                                    this.setState({
                                        value: e.target.value
                                    })
                                }} />
                            </p>

                        </Modal>
                    </div>
                    <div className="list">
                        <Listclassroom father={this} list={this.state["classList"]} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getclassroom()

    }
    async getclassroom() {
        const { data } = await this.props.question.getclassroom()
        this.setState({
            classList: data
        })
    }
}
export default Classroom