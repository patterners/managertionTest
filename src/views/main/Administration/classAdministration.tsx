import * as React from "react";
import "./class.css"
import { Modal, Button } from 'antd';
import Listclass from "@/components/Administration/list"
class ClassAdministration extends React.Component {
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
                <h2>班级管理</h2>
                <div className="antd-dabox">
                    <div className="and-but">
                        <Button className="button" size="large" type="primary" onClick={this.showModal}>+ 添加班级</Button>
                        <Modal
                            title="添加班级"
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
                        <Listclass/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClassAdministration