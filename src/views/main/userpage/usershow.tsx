import * as React from "react";
import "./usershow.css"
class Usershow extends React.Component{
    render(){
        return (
            <div className="usershow">
                <h2>用户展示</h2>
                <div className="spans">
                    <div className="active">用户数据</div>
                    <div>身份数据</div>
                    <div>api接口权限</div>
                    <div>身份和api接口关系</div>
                    <div>视图接口权限</div>
                    <div>身份和视图权限关系</div>
                </div>
                <div className="change-content">
                    <div>
                        <h2>用户数据</h2>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Usershow