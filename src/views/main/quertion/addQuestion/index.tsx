import * as React from 'react'

import Editor from 'for-editor'
import './index.css'
export class index extends React.Component {
    state = {
        value: '请输入内容...',
        question: '请输入内容...'
    }
    handleChange = (value: string) => {
        this.setState({
            value
        })
    }
    handleChangeQuestion = (question: string) => {
        this.setState({
            question
        })
    }
    render() {
        const { value, question } = this.state
        return (
            <div className="addQuestion">
                <h3>添加试题</h3>

                <div className="content">
                    <form action="">
                        <p>题目信息</p>
                        <p>题干</p>
                        <input type="text" placeholder="请输入题目标题，不超过20个字" />
                    </form>

                    <div >
                        <p> 题目主题</p>
                        <div className="editorItem">
                            <Editor value={value} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>

                    <form>
                        <p>请选择考试类型：</p>
                        <p>
                            <select>
                                <option value="周考1">javaScript上</option>
                            </select>
                        </p>
                    </form>

                    <form>
                        <p>请选择课程类型：</p>
                        <p>
                            <select>
                                <option value="javaScript上">javaScript上</option>
                            </select>
                        </p>
                    </form>

                    <form>
                        <p>请选择题目类型：</p>
                        <p>
                            <select>
                                <option value="javaScript上">简答题</option>
                                <option value="javaScript上">代码补全</option>
                            </select>
                        </p>
                    </form>

                    <div >
                        <p> 答案信息</p>
                        <div className="editorItem">
                            <Editor value={question} onChange={this.handleChangeQuestion.bind(this)} />
                        </div>
                    </div>
                </div>
                <button>提交</button>
            </div>
        )
    }
}

export default index
