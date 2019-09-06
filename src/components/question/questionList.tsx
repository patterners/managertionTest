import * as React from 'react';

interface PorpsInfo {
    list: object[]
}


class List extends React.Component<PorpsInfo> {
    render() {
        const { list } = this.props
        return (
            <div className="list">
                <li>
                    <span>类型ID</span>
                    <span>类型名称</span>
                    <span>操作</span>
                </li>
                {list && list.map((item: any, index: number) => {
                    return <div className="li">
                        <span className="span1">{item.questions_type_id}</span>
                        <span className="span2">{item.questions_type_text}</span>
                    </div>
                })}

            </div>
        )
    }
}
export default List