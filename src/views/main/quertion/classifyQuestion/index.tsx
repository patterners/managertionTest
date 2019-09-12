import "./index.css";
import * as React from 'react';
import { Modal, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import List from '@/components/question/questionList';

interface Props {
  question: any,
}

@inject('question')
@observer
export class index extends React.Component<Props>{
  state = {
    visible: false,
    list: [],
    typeName: '',
    typeId: ''
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e: any) => {
    this.setState({
      visible: false,
    }, () => {
      // 添加试题
      this.addQuestionType()
    });
  };

  handleCancel = (e: any) => {
    this.setState({
      visible: false,

    });
  };

  render() {
    const { typeName, typeId } = this.state
    return (
      <div>
        <h2>试题分类</h2>
        <div className="antd-dabox">
          <div className="and-but">
            <Button size="large" type="primary" onClick={this.showModal}>+ 添加类型 </Button>
            <Modal
              title="创建新类型"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>
                <input className="inp" type="text" placeholder="请输入类型名称"
                  value={typeName} name='typeName' onChange={this.handlechange} />
              </p>
              <p>
                <input className="inp" type="text" placeholder="请输入类型Id"
                  value={typeId} name="typeId" onChange={this.handlechange} />
              </p>
            </Modal>
          </div>
          <div className="list">
            <List list={this.state["list"]}  {...this.props} />
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
  handlechange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  // 增加试题类型
  async addQuestionType() {
    const { typeName, typeId } = this.state
    const result = await this.props.question.addQuestionType({ test: typeName, sort: typeId })
    // 接口已好 权限不足
    const { data } = await this.props.question.getQuestionsType()
    this.setState({
      list: data
    })
  }

  // 删除试题类型...

  async removeQuestion(id: string) {
    const result = await this.props.question.removeQuestion({ id })
    console.log(result)
  }
}

export default index
