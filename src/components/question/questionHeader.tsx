import * as React from 'react'
import './index.css'
interface Props {
    list: any
}
// 数组去重
const unique = function (a: any) {
    var res = [];
    for (var i = 0, len = a.length; i < len; i++) {
        var item = a[i];
        (res.indexOf(item) === -1) && res.push(item);
    }
    return res;
}

export class questionHeader extends React.Component<Props> {
    render() {
        const { list } = this.props
        const type = list.length ? list.map((item: object) => item['subject_text']) : []
        console.log(type)
        const typeArr = unique(type)
        return (
            <div>
                <div className="classType">
                    <p><b>课程类型</b></p>
                    <p>
                        {
                            typeArr.length && typeArr.map((item: any, index: number) => {
                                return <span key={index}>{item}</span>
                            })
                        }
                    </p>
                </div>
                <div className="testType">
                    <p>考试类型：
                        <select>
                            <option value="asdfasdfs">dfdsdgsdfg</option>
                        </select></p>
                    <p>题目类型：
                        <select >
                            <option value="asdfasdfs">sdffdfsfg</option>
                        </select>
                    </p>
                    <p><input type="button" value="查询" /></p>
                </div>
            </div>
        )
    }
}

export default questionHeader
