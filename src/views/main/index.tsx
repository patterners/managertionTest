import * as React from 'react';
import { Layout } from 'antd';
import { observer, inject } from 'mobx-react';
import './index.css'
//头部组件
import Header from '@/components/header';
//导航栏组件
import MenuAntd from '@/components/menu';
//路由组件
import RouterView from '@/router/RouterView';

@inject('question')
@observer
class LoginPage extends React.Component {

    constructor(props: any) {
        super(props);
        const { getQuestion } = props.question;
        getQuestion();
    }

    state = {
        current: '',
    };

    render() {
        return (
            <Layout className="mainHomePage">
                <Header />
                <Layout className="homePageBody">
                    <MenuAntd />
                    <Layout className="contentView">
                        <RouterView routes={this.props['routes']} />
                    </Layout>
                </Layout>
            </Layout>
        )
    }
    componentDidMount() {
        // console.log(this.props, 'this.props')

    }

}

export default LoginPage;