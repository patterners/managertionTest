import * as React from 'react'
import "./index.css"
import List from '@/components/question/questionList';
import { Modal, Button } from 'antd';
import { inject, observer } from 'mobx-react'

interface Props {
    question: any,
}

@inject('question')
@observer
export class index extends React.Component<Props>{
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
                <h2>试题分类</h2>
                <div className="antd-dabox">
                    <div className="and-but">
                        <Button size="large" type="primary" onClick={this.showModal}>
                            + 添加类型
        </Button>
                        <Modal
                            title="创建新类型"
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
                        <List list={this.state["list"]} />
                    </div>
                </div>
            </div>
        )
    }
    async componentDidMount() {

        const { data } = await this.props.question.getQuestionsType()

        this.setState({
            list: data
        })
    }
}

export default index
