
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
    state = { visible: false, list: [] };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e: any) => {
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
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <p>
                                <input className="inp" type="text" placeholder="请输入类型名称" />
                            </p>

                        </Modal>
                    </div>
                    <div className="list">
                        <Listclassroom list={this.state["classList"]} />
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await this.props.question.getclassroom()
        this.setState({
            classList: data
        }, () => {
            console.log(this.state["classList"])
        })
    }

}
export default Classroom