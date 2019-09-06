import * as React from 'react';
import "./classroom.css"
// interface PorpsInfo {
//     list: object[]
// }

class Listclass extends React.Component{
    render() {
        // const { list } = this.props
        return (
            <div className="class-room">
                <div className="list">
                    <span>教室号</span>
                    <span>操作</span>
                </div>
                {/* {list && list.map((item: any, index: number) => { */}
                    {/* return  */}
                    <div className="div1">
                        <div>34312</div>
                        <div>删除</div>
                    </div>
                {/* })} */}

            </div>
        )
    }
}
export default Listclass