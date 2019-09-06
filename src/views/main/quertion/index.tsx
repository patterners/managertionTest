import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { WrappedFormUtils } from 'antd/lib/form/Form'

import Header from "@/components/question/questionHeader";
import Item from '@/components/question/questionItem'

interface Props {
    form: WrappedFormUtils,
    question: any,
    history: History,
}

@inject('question')
@observer
class index extends React.Component<Props> {
    state = {
        list: []
    }
    render() {
        const { list } = this.state
        return (
            <div className="questionPage">
                <h4 className="questionTitle">查看试题</h4>
                <Header list={list} />
                <div>
                    {
                        // 渲染列表主体
                        list.length && list.map((item, index) =>
                            <Item item={item} key={index} />
                        )
                    }
                </div>
            </div>
        )
    }
    async componentDidMount() {

        const { data } = await this.props.question.getQuestion()

        this.setState({
            list: data
        })
    }

}

export default index
