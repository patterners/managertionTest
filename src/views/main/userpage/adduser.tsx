import * as React from "react";
import "../userpage/user.css"
import { inject, observer } from "mobx-react"
//下拉菜单组件
import Selectmodule from '../../../components/select'
@inject("user")
@observer
class AddUser extends React.Component<any> {
    state = {
        uid: [],
        hasview: [],
        viewauthority: [],
        apiauthority:[]
    }
    async componentDidMount() {
        const uid = await this.props.user.uid()
        const hasview = await this.props.user.hasview()
        const viewauthority = await this.props.user.viewauthority()
        const apiauthority = await this.props.user.apiauthority()
        this.setState({
            uid: uid.data,
            hasview: hasview.data,
            viewauthority: viewauthority.data,
            apiauthority:apiauthority.data
        })
    }
    userConfirm() {

    }
    render() {
        return (
            <div>
                <h2>添加用户</h2>
                <div className="add-box">
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">添加用户</span>
                            <span>更新用户</span>
                        </div>
                        <div className="userinp">
                            <input type="text" placeholder=" 请输入用户名" />
                        </div>
                        <div className="userinp">
                            <input type="text" placeholder=" 请输入密码" />
                        </div>
                        <div className="userinp">
                            <Selectmodule uid={this.state.uid} />
                        </div>

                        <div className="buts">
                            <input type="button" value="确定" className="confirm" onClick={this.userConfirm.bind(this)} />
                            <input type="reset" value="重置" className="reset" />
                        </div>

                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">添加身份</span>
                        </div>
                        <div className="userinp">
                            <input type="text" placeholder=" 请输入身份名称" />
                        </div>

                        <div className="buts">
                            <input type="button" value="确定" className="confirm" />
                            <input type="reset" value="重置" className="reset" />
                        </div>
                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">添加api接口权限</span>
                        </div>
                        <div className="userinp">
                            <input type="text" placeholder=" 请输入api接口权限名称" />
                        </div>
                        <div className="userinp">
                            <input type="text" placeholder=" 请输入api接口权限url" />
                        </div>
                        <div className="userinp">
                            <input type="text" placeholder=" 请输入api接口权限方法" />
                        </div>
                        <div className="buts">
                            <input type="button" value="确定" className="confirm" />
                            <input type="reset" value="重置" className="reset" />
                        </div>
                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">添加视图接口权限</span>
                        </div>
                        <div className="userinp">
                            <Selectmodule viewauthority={this.state.viewauthority} />
                        </div>
                        <div className="buts">
                            <input type="button" value="确定" className="confirm" />
                            <input type="reset" value="重置" className="reset" />
                        </div>
                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">给身份设置api接口权限</span>
                        </div>
                        <div className="userinp">
                            <Selectmodule uid={this.state.uid} />
                        </div>
                        <div className="userinp">
                            <Selectmodule apiauthority={this.state.apiauthority} />
                        </div>
                        <div className="buts">
                            <input type="button" value="确定" className="confirm" />
                            <input type="reset" value="重置" className="reset" />
                        </div>
                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">给身份设置视图权限</span>
                        </div>
                        <div className="userinp">
                            <Selectmodule uid={this.state.uid} />
                        </div>
                        <div className="userinp">
                            <Selectmodule hasview={this.state.hasview} />
                        </div>
                        <div className="buts">
                            <input type="button" value="确定" className="confirm" />
                            <input type="reset" value="重置" className="reset" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser