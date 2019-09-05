import * as React from 'react';
import { Menu, Icon, Switch, Layout } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import { Link } from 'react-router-dom'

class MenuAntd extends React.Component {
    render() {
        return (
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}>
                <Menu className="slideLeft"
                    theme="dark"
                    style={{ width: 256, height: 600 }}
                    defaultOpenKeys={['sub1']}
                    mode="inline">
                    {/* 试题管理 */}
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>试题管理</span>
                            </span>
                        }>
                        <Menu.Item key="1">
                            <Link to="/main/addQuestion">添加试题</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/main/classifyQuestion">试题分类</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/main/checkQuestion">查看试卷</Link>
                        </Menu.Item>
                    </SubMenu>

                    {/* 用户管理 */}
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>用户管理</span>
                            </span>
                        }>

                        <Menu.Item key="5">
                            <Link to="/main/adduser">添加用户</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                        <Link to="/main/usershow">用户展示</Link>
                        </Menu.Item>
                    </SubMenu>

                    {/* 考试管理 */}
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>考试管理</span>
                            </span>
                        }>
                        <Menu.Item key="9">添加考试</Menu.Item>
                        <Menu.Item key="10">考试列表</Menu.Item>
                    </SubMenu>
                    {/* 班级管理 */}
                    <SubMenu
                        key="sub5"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>班级管理</span>
                            </span>
                        }>
                        <Menu.Item key="9">班级管理</Menu.Item>
                        <Menu.Item key="10">教室管理</Menu.Item>
                        <Menu.Item key="11">学生管理</Menu.Item>
                    </SubMenu>
                    {/* 阅卷管理 */}
                    <SubMenu
                        key="sub6"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>阅卷管理</span>
                            </span>
                        }>
                        <Menu.Item key="9">待批班级</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}
export default MenuAntd