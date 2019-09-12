import * as React from "react";
import "./usershow.css"
import { Tabs, Table } from 'antd';
const { TabPane } = Tabs;
import { inject, observer } from "mobx-react"
const columns = [
    {
        title: '用户',
        dataIndex: 'name',
    },
    {
        title: '密码',
        dataIndex: 'age',
    },
    {
        title: '身份',
        dataIndex: 'address',
    },
]
const columns1 = [
    {
        title: '用户',
        dataIndex: 'name',
    }
]
const columns2 = [
    {
        title: '身份名称',
        dataIndex: 'name',
    },
    {
        title: 'api权限名称',
        dataIndex: 'age',
    },
    {
        title: 'api权限url',
        dataIndex: 'address',
    },
    {
        title: 'api权限方法',
        dataIndex: 'method',
    },
]
const columns3 = [
    {
        title: '视图权限名称',
        dataIndex: 'name',
    },
    {
        title: '视图id',
        dataIndex: 'age',
    }
]
const columns4 = [
    {
        title: '身份',
        dataIndex: 'name',
    },
    {
        title: '视图名称',
        dataIndex: 'age',
    },
    {
        title: '视图id',
        dataIndex: 'address',
    },
]
@inject("user")
@observer
class Usershow extends React.Component<any> {
    state = {
        userdata: [],
        identitydata: [],
        apiInterface: [],
        //身份和api接口关系
        InterfaceJurisdiction: [],
        //视图接口数据
        viewdata: [],
        //身份和视图权限关系
        relationship: []
    }
    async callback(key: any) {
        if (key == "1") {
            const { data } = await this.props.user.userdata()
            const newdata = data.map((item: any) => {
                return {
                    key: item.user_id,
                    name: item.identity_text,
                    age: item.user_pwd,
                    address: item.identity_text
                }
            })
            this.setState({
                userdata: newdata
            })
        } else if (key == "2") {
            const { data } = await this.props.user.identitydata()
            const newdata = data.map((item: any) => {
                return {
                    key: item.user_id,
                    name: item.identity_text
                }
            })
            this.setState({
                identitydata: newdata
            })
        } else if (key == "3") {
            const { data } = await this.props.user.apiinterface()
            const newdata = data.map((item: any) => {
                return {
                    key: item.api_authority_id,
                    name: item.api_authority_text,
                    age: item.api_authority_url,
                    address: item.api_authority_method
                }
            })
            this.setState({
                apiInterface: newdata
            })
        } else if (key == "4") {
            const { data } = await this.props.user.InterfaceJurisdiction()
            console.log(data)

            const newdata = data.map((item: any) => {
                return {
                    key: item.api_authority_id,
                    name: item.identity_text,
                    age: item.api_authority_text,
                    address: item.api_authority_url,
                    method: item.api_authority_method
                }
            })
            this.setState({
                InterfaceJurisdiction: newdata
            })
        } else if (key == "5") {
            const { data } = await this.props.user.viewdata()
            const newdata = data.map((item: any) => {
                return {
                    key: item.api_authority_id,
                    name: item.api_authority_text,
                    age: item.api_authority_url,
                    address: item.api_authority_method
                }
            })
            this.setState({
                viewdata: newdata
            })
        } else if (key == "6") {
            const { data } = await this.props.user.relationship()
            const newdata = data.map((item: any) => {
                return {
                    key: item.api_authority_id,
                    name: item.api_authority_text,
                    age: item.api_authority_url,
                    address: item.api_authority_method
                }
            })
            this.setState({
                relationship: newdata
            })
        } else {
            alert("没有获取到对应的数据")
        }
    }
    componentDidMount() {
        this.geiuserdata()
    }
    async geiuserdata() {
        const { data } = await this.props.user.userdata()
        const newdata = data.map((item: any) => {
            return {

                key: item.user_id,
                name: item.user_name,
                age: item.user_pwd,
                address: item.identity_text
            }
        })
        this.setState({
            userdata: newdata
        })
    }
    render() {
        return (
            <div className="usershow">
                <h2>用户展示</h2>
                <div>
                    <Tabs onChange={this.callback.bind(this)} type="card">
                        <TabPane tab="用户数据" key="1">
                            <h1>用户数据</h1>
                            <div>
                                <Table columns={columns} dataSource={this.state.userdata} size="middle" />
                            </div>
                        </TabPane>
                        <TabPane tab="身份数据" key="2">
                            <h1>身份数据</h1>
                            <div>
                                <Table columns={columns1} dataSource={this.state.identitydata} size="middle" />
                            </div>
                        </TabPane>
                        <TabPane tab="api接口权限" key="3">
                            <h1>api接口权限</h1>
                            <div>
                                <Table columns={columns} scroll={{ y: 330 }} dataSource={this.state.apiInterface} />
                            </div>
                        </TabPane>
                        <TabPane tab="身份和api接口关系" key="4">
                            <h1>身份和api接口关系</h1>
                            <div>
                                <Table columns={columns2} scroll={{ y: 330 }} dataSource={this.state.InterfaceJurisdiction} />
                            </div>
                        </TabPane>
                        <TabPane tab="视口接口权限" key="5">
                            <h1>视口接口权限</h1>
                            <div>
                                <Table columns={columns3} scroll={{ y: 330 }} dataSource={this.state.viewdata} />
                            </div>
                        </TabPane>
                        <TabPane tab="身份和视图权限关系" key="6">
                            <h1>身份和视图权限关系</h1>
                            <div>
                                <Table columns={columns4} scroll={{ y: 330 }} dataSource={this.state.relationship} />
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Usershow



