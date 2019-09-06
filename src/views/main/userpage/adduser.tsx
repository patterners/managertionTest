import * as React from "react";
import "../userpage/user.css"
//下拉菜单组件
import Selectmodule from '../../../components/select'
//
import Buttonmodule from '../../../components/question/button'
class AddUser extends React.Component {
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
                            <Selectmodule />
                        </div>

                        <div className="buts">
                            <Buttonmodule />
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
                            <Buttonmodule />
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
                            <Buttonmodule />
                        </div>
                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">添加视图接口权限</span>
                        </div>
                        <div className="userinp">
                            <Selectmodule />
                        </div>
                        <div className="buts">
                            <Buttonmodule />
                        </div>
                    </div>
                    <div className="add-list">
                        <div className="tab">
                            <span className="active">给身份设置api接口权限</span>
                        </div>
                        <div className="userinp">
                            <Selectmodule />
                        </div>
                        <div className="userinp">
                            <Selectmodule />
                        </div>
                        <div className="buts">
                            <Buttonmodule />
                        </div>
                    </div>
                    <div className="add-list">
                    <div className="tab">
                            <span className="active">给身份设置视图权限</span>
                        </div>
                        <div className="userinp">
                            <Selectmodule />
                        </div>
                        <div className="userinp">
                            <Selectmodule />
                        </div>
                        <div className="buts">
                            <Buttonmodule />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser