import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Item from '@/components/question/questionItem'
import Header from "@/components/question/questionHeader";

@inject('question', 'addQuestion')
@observer
class index extends React.Component<any> {
  constructor(props: object) {
    super(props)
    this.handleSearchQuestion.bind(this)
  }
  state = {
    list: [],
    testTypeSelections: [],
    lessonTypeSelections: [],
    subjectTypeSelections: []
  }
  render() {
    const { list, lessonTypeSelections, testTypeSelections, subjectTypeSelections } = this.state
    return (
      <div className="questionPage">
        <h4 className="questionTitle">查看试题</h4>
        <Header father={this} testTypeSelections={testTypeSelections}
          lessonTypeSelections={lessonTypeSelections}
          subjectTypeSelections={subjectTypeSelections}
        />
        <div>
          {
            // 渲染列表主体
            list  && list.map((item: any, index) =>
              <Item item={item} key={index} {...this.props} />
            )
          }
        </div>
      </div>
    )
  }

  async componentDidMount() {
    await this.handle_testTypeSelections.bind(this)()
    await this.handle_lessonTypeSelections.bind(this)()
    await this.handle_subjectTypeSelections.bind(this)()
    this.handleSearchQuestion()
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

  // 特定试题的查询  接口查询
  async handleSearchQuestion(option?: any) {
    const { data } = await this.props.question.getQuestion(option)
    this.setState({ list: data })
  }
}

export default index
