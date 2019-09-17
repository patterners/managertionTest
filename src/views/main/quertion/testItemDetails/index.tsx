
import './index.css'
import * as React from 'react'
import { inject, observer } from 'mobx-react'
const ReactMarkdown = require('react-markdown')

@inject('question')
@observer
class index extends React.Component<any>{
  state: any = {
    question: '',
    answer: '',
    item: {}
  }
  render() {
    const { item, question, answer } = this.state
    return <div className="testpage">
      <header>试题详情</header>
      <div className="testMain">
        <div className="testDetail">
          {/* exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i"
exam_name: "周考1"
json_path: "4t0rar-39c33-wq098t-phh5ht.json"
questions_id: "4t0rar-39c33-wq098t-phh5ht"
questions_type_id: "fwf0t-wla1q"
questions_type_text: "代码补全"
subject_id: "fqtktr-1lq5u"
subject_text: "javaScript上"
title: "机器人归位"
user_id: "ypay2t-7uxsd"
user_name: "dingshaoshan" */}
          <p>出题人：</p>
          <p>题目信息</p>
          <p>
            <span id="minspan" className="first">{item.questions_type_text}</span>
            <span id="minspan" className="second">{item.subject_text}</span>
            <span id="minspan" className="third">{item.exam_name}</span>
          </p>
          <p className="testTitle">{'asdfasdf'}</p>
          <ReactMarkdown source={question} />
        </div>
        <div className="testAnswer">
          <ReactMarkdown source={answer} />
        </div>
      </div>
    </div>
  }
  async componentDidMount() {
    // 请求详细的试卷数据,渲染到markdown之中
    const id = this.props.location.state.questions_id
    const testDetail = await this.props.question.getTestDetail(id)
    console.log(testDetail)
    const item = testDetail.data[0]
    this.setState({
      question: item.questions_stem,
      answer: item.questions_answer,
      item
    })
  }


}
export default index