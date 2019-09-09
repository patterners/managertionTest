import * as React from "react";
import "./detailpijuan.css"
class DetailPijuan extends React.Component {
    render() {
        return (
            <div className="detailpijuan">
                <div className="main-top">
                    <div className="status">
                        <span>状态:</span>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div className="class">
                        <span>班级:</span>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div className="seek">
                        <button id="seek">查询</button>
                    </div>
                </div>
                <div className="main-list">
                    <h3>试卷列表</h3>
                    <table>
                        <tr>
                            <td>班级</td>
                            <td>姓名</td>
                            <td>阅卷状态</td>
                            <td>开始时间</td>
                            <td>结束时间</td>
                            <td>成材率</td>
                            <td>操作</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default DetailPijuan