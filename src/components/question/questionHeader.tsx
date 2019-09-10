import * as React from 'react'
import './index.css'
import { Form, Select } from 'antd'
const { Option } = Select

export class questionHeader extends React.Component<any> {
  state = {
    selectType: 0,
    questions_id: '',   //  试题id
    questions_type_id: '',	//课程类型id
    subject_id: '', //	课程id
    exam_id: ''
  }

  render() {
    const {
      testTypeSelections,
      lessonTypeSelections,
      subjectTypeSelections
    } = this.props
    console.log({
      testTypeSelections,
      lessonTypeSelections,
      subjectTypeSelections
    })
    const { selectType } = this.state
    return (
      <div>
        <div className="classType">
          <p><b>课程类型</b></p>
          <p>
            <span className={selectType === 0 ? "activeType" : ''}
              onClick={() => this.setState({ selectType: 0, subject_id: '' })}
            >ALL</span>{
              lessonTypeSelections && lessonTypeSelections.length && lessonTypeSelections.map((item: any, index: number) => {
                return <span key={index} id={item.subject_id}
                  className={selectType === index + 1 ? "activeType" : ''}
                  onClick={() => {
                    this.setState({ selectType: index + 1, subject_id: item.subject_id })
                  }}
                >
                  {item.subject_text}</span>
              })
            }</p>
        </div>
        <div className="testType">
          <div>
            考试类型：
            <Form>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={e => this.hangdleChangeValue(e, 'exam_id')}
              >
                {
                  testTypeSelections && testTypeSelections.length && testTypeSelections.map(
                    (item: any, index: number) =>
                      <Option value={item.exam_id} key={index}>
                        {item.exam_name}
                      </Option>
                  )
                }
              </Select>
            </Form>

          </div>
          <div>
            题目类型：
            <Form>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={e => this.hangdleChangeValue(e, 'questions_type_id')}
              >
                {
                  subjectTypeSelections && subjectTypeSelections.length && subjectTypeSelections.map(
                    (item: any, index: number) =>
                      <Option value={item.questions_type_id} key={index}>
                        {item.questions_type_text}
                      </Option>
                  )
                }
              </Select>
            </Form>

          </div>
          <p><input type="button" value="查询"
            onClick={this.submitSearch}
          /></p>
        </div>
      </div>
    )
  }

  submitSearch = () => {
    const { exam_id, questions_type_id, subject_id } = this.state
    let opt: any = {}
    exam_id ? (opt.exam_id = exam_id) : null
    questions_type_id ? (opt.questions_type_id = questions_type_id) : null
    subject_id ? (opt.subject_id = subject_id) : null
    this.props.father.handleSearchQuestion(opt)
  }
  hangdleChangeValue = (e: any, name: string) => {
    if (e.target) {
      this.setState({ [name]: e.target.value })
    } else {
      this.setState({ [name]: e })
    }
  }
}

export default questionHeader
