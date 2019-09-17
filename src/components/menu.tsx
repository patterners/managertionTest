import * as React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import router from '@/router/router';
import { injectIntl } from 'react-intl';

let routrArr: any = router.routes[0].children
console.log(routrArr)
const { SubMenu } = Menu;
const { Sider } = Layout;

class MenuAntd extends React.Component<any> {
  render() {
    let { formatMessage } = this.props.intl;
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

          {
            routrArr.map((item: any) => {
              return <SubMenu
                key={item.title}
                title={
                  <span>
                    {/* <Icon type="mail" /> */}
                    <span>{item.title ? formatMessage({ id: item.title }) : item.path}</span>
                  </span>
                }>
                {item.children && item.children.map((sub: any) =>
                  sub.title && <Menu.Item key={sub.title} >
                    <NavLink to={sub.path}>{sub.title ? formatMessage({ id: sub.title }) : sub.path}</NavLink>
                  </Menu.Item>
                )}
              </SubMenu>
            })
          }
        </Menu>
      </Sider>
    )
  }
}
export default injectIntl(MenuAntd)