import * as React from 'react'
import './index.css'
interface Props {
    item: any
}
class questionItem extends React.Component<Props> {
    render() {
        const { item } = this.props
        // console.log(item)
        return (
            <div className='question_item_div'>
                <li ><b>{item.title}</b></li>
                <li>
                    <span className="first">{item.questions_type_text}</span>
                    <span className="second">{item.subject_text}</span>
                    <span className="third">{item.exam_name}</span>
                    <b></b>
                    <a href="">编辑</a>
                </li>
                <li className="third">{item.user_name}发布</li>
            </div>
        )
    }
}

export default questionItem
