import * as React from 'react'
import './index.css'
interface Props {
  item: any
}
class questionItem extends React.Component<any> {
  render() {

    const { item } = this.props
    return (
      <div className='question_item_div'
        onClick={(e: any) => this.checkTestItem(e, item.questions_id)}
      >
        <li ><b>{item.title}</b></li>
        <li>
          <span id="minspan" className="first">{item.questions_type_text}</span>
          <span id="minspan" className="second">{item.subject_text}</span>
          <span id="minspan" className="third">{item.exam_name}</span>
          <b></b>
          <a href="" onClick={(e: any) => this.changeQuestion(e, item.questions_id)}>编辑</a>
        </li>
        <li className="third">{item.user_name}发布</li>
      </div>
    )
  }

  checkTestItem = (e: any, questions_id: string) => {
    this.props.history.push({
      pathname: "/main/question/detail",
      state: { questions_id }
    });
  }
  changeQuestion = (e: any, questions_id: string) => {
    // 阻止冒泡
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.props.history.push({
      pathname: "/main/changeQuestion",
      state: { questions_id }
    });
  }
}

export default questionItem
