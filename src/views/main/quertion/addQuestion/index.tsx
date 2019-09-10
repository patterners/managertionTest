import * as React from 'react'
import Editor from 'for-editor'
import './index.css'
import { Form, Select, } from 'antd'
import { inject, observer } from 'mobx-react'
import { WrappedFormUtils } from 'antd/lib/form/Form'

const { Option } = Select
interface Props {
  form: WrappedFormUtils,
  addQuestion: any,
  history: History,
  abc?: string
}

@inject('addQuestion')
@observer
class index extends React.Component<any> {
  state = {
    titleValue: '',
    answer: '请输入内容...',
    question: '请输入内容...',
    testType: '',
    testTypeSelections: [],
    lessonType: '',
    lessonTypeSelections: [],
    subjectType: '',
    subjectTypeSelections: [],
  }
  componentDidMount() {
    this.handle_testTypeSelections.bind(this)()
    this.handle_lessonTypeSelections.bind(this)()
    this.handle_subjectTypeSelections.bind(this)()
  }

  render() {
    const {
      titleValue,
      answer,
      question,
      testTypeSelections,
      lessonTypeSelections,
      subjectTypeSelections
    } = this.state
    // const { getFieldDecorator } = this.props.form;
    return (<div>
      <div className="addQuestion">
        <h3>添加试题</h3>
        <div className="content">
          <form action="">
            <p>题目信息</p>
            <p>题干</p>
            <input type="text"
              value={titleValue}
              onChange={e => this.hangdleChangeValue(e, 'titleValue')}
              placeholder="请输入题目标题，不超过20个字" />
          </form>

          <div >
            <p> 题目主题</p>
            <div className="editorItem">
              <Editor value={question}
                onChange={e => this.hangdleChangeValue(e, 'question')}
              />
            </div>
          </div>

          <form>
            <p>请选择考试类型：</p>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={e => this.hangdleChangeValue(e, 'testType')}
            >
              {
                testTypeSelections.length && testTypeSelections.map(
                  (item: any, index) =>
                    <Option value={item.exam_id} key={index}>
                      {item.exam_name}
                    </Option>
                )
              }

            </Select>
          </form>

          <form>
            <p>请选择课程类型：</p>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={e => this.hangdleChangeValue(e, 'lessonType')}
            >
              {
                lessonTypeSelections.length && lessonTypeSelections.map(
                  (item: any, index) =>
                    <Option value={item.subject_id} key={index}>
                      {item.subject_text}
                    </Option>
                )
              }
            </Select>
          </form>

          <form>
            <p>请选择题目类型：</p>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={e => this.hangdleChangeValue(e, 'subjectType')}
            >
              {
                subjectTypeSelections.length && subjectTypeSelections.map(
                  (item: any, index) =>
                    <Option value={item.questions_type_id} key={index}>
                      {item.questions_type_text}
                    </Option>
                )
              }
            </Select>
          </form>

          <p> 答案信息</p>
          <div className="editorItem">
            <Editor value={answer}
              onChange={e => this.hangdleChangeValue(e, 'answer')}
            />
          </div>
        </div>
      </div>
      <button onClick={this.handleSubmitQuestion.bind(this)}>提交</button>
    </div >

    )
  }

  // 合并方法  设置整体状态
  hangdleChangeValue = (e: any, name: string) => {
    if (e.target) {
      this.setState({ [name]: e.target.value })
    } else {
      this.setState({ [name]: e })
    }
  }
  // 请求试题类型数据
  async handle_testTypeSelections() {
    const testTypeSelections: [] = (await this.props.addQuestion.getTestType()).data
    this.setState({ testTypeSelections })
  }

  // 请求课程类型数据
  async handle_lessonTypeSelections() {
    const lessonTypeSelections: [] = (await this.props.addQuestion.getLessonType()).data
    this.setState({ lessonTypeSelections })
  }

  // 请求科目类型数据
  async handle_subjectTypeSelections() {
    const subjectTypeSelections: [] = (await this.props.addQuestion.getSubjectType()).data
    this.setState({ subjectTypeSelections })
  }
  // 添加成功  将题目添加到后台
  async handleSubmitQuestion() {
    const user = await this.props.addQuestion.getUsernfo()
    const { user_id } = user.data
    const {
      titleValue,
      answer,
      question,
      testType,
      lessonType,
      subjectType,
    } = this.state
    const result = await this.props.addQuestion.postAddQuestion(({
      questions_type_id: subjectType,
      questions_stem: question,
      subject_id: lessonType,
      exam_id: testType,
      user_id,
      questions_answer: answer,
      title: titleValue
    }))
    // 判断之后进行提示和跳页面

    this.props.history.push('/main/checkQuestion')
  }
}

export default Form.create()(index)
