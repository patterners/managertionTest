import * as React from 'react';
import "./classlist.css"
interface PorpsInfo {
    list: object[]
}

class Listclass extends React.Component<PorpsInfo> {
    render() {
        const { list } = this.props
        return (
            <div className="class-list">
                <div className="list">
                    <span>班级名</span>
                    <span>课程名</span>
                    <span>教室号</span>
                    <span>操作</span>
                </div>
                {list && list.map((item: any, index: number) => {
                    return <div className="div" key={index}>
                        <div>{item.grade_name}</div>
                        <div>{item.subject_text}</div>
                        <div>{item.room_text}</div>
                        <div>
                            <b>编辑</b>|<b>删除</b>
                        </div>
                    </div>
                })}

            </div>
        )
    }
}
export default Listclass