import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { inject, observer } from 'mobx-react'

// 引入配置路由
import RouterView from '@/router/RouterView';
import router from '@/router/router';
import { BrowserRouter } from 'react-router-dom';
// 懒加载 和代码分割
// import React, { lazy, Suspense } from 'react';

console.log(router)

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

// 注入国际化
@inject('user', "global")
@observer
class IntlContainer extends React.Component<any> {
  render() {
    return (
      <IntlProvider locale={this.props.global.locale}
        messages={localeMap[this.props.global.locale]}>
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RouterView routes={router.routes} />
          </React.Suspense>
        </BrowserRouter>
      </IntlProvider>)
  }
}


ReactDOM.render(
  <Provider {...store}>
    <IntlContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
