// 懒加载 和代码分割
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { inject, observer } from 'mobx-react'

// 引入配置路由
import RouterView from '@/router/RouterView';
import router from '@/router/router';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from "react-router";
import { createHashHistory } from "history";


//引入导航守卫
import guardInit, { filterView } from "@/utils/permission"

// 引入全局样式
import '@/index.css';
// 引入antd样式
import 'antd/dist/antd.css';

// 引入mobx实例
import { Provider } from 'mobx-react';
import store from '@/store'

// 引入国际化
import { IntlProvider } from 'react-intl';
import zhCN from '@/lang/zh-CN';
import enUS from '@/lang/en-US';
const localeMap = {
  en: enUS,
  zh: zhCN
}


// 创建一个browser router
const history = createHashHistory()
const myRoutes = filterView(router.routes, store.user.viewAuthority);
console.log('myRoutes...', myRoutes, router);

// 初始化导航守卫
guardInit(history);

// 注入国际化
@inject('user', "global")
@observer
class IntlContainer extends React.Component<any> {
  render() {
    return (
      <IntlProvider locale={this.props.global.locale}
        messages={localeMap[this.props.global.locale]}>
        <Router history={history}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RouterView routes={router.routes} />
          </React.Suspense>
        </Router>
      </IntlProvider>)
  }
}


ReactDOM.render(
  <Provider {...store}>
    <IntlContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
