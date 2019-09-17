import * as React from 'react';
import "./classroom.css"
import { inject, observer } from "mobx-react"
interface PorpsInfo {
    list: object[],
    father:any,
    question?: any
}
@inject("question")
@observer
class Listclass extends React.Component<PorpsInfo> {
    render() {
        const { list } = this.props
        return (
            <div className="class-room">
                <div className="list">
                    <span>教室号</span>
                    <span>操作</span>
                </div>
                {list && list.map((item: any, index: number) => {
                    return <div className="div1" key={item.room_id}>
                        <div>{item.room_text}</div>
                        <div onClick={this.del.bind(this, item.room_id)}>删除</div>
                    </div>

                })}

            </div>
        )
    }
    async del(id: any) {
        await this.props.question.deleteclass(id)
        this.props.father()
    }
}
export default Listclass