import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

interface PropsInfo {
  routes: Array<object>
}

// const RouterView = (props: any) => {
//   console.log(props, 'RouterView')
//   return props.routes ?
//     <Switch>
//       {
//         // props.routes.map((item: any, index: number) => {
//         //   return <Route key={index} path={item.path} render={(props) => {
//         //     if (item.children) {
//         //       // return <item.component {...props} routes={item.children} />
//         //       return <item.component {...props}>
//         //         <RouterView routes={item.children} />
//         //       </item.component>
//         //     } else {
//         //       return <item.component {...props} />
//         //     }
//         //   }}></Route>
//         // })
//         props.routes.map((item: any, index: number) => {
//           return item.path ? <Route key={index} path={item.path} render={(props) => {
//             return item.children && item.children.length ? <item.component {...props}>
//               <RouterView routes={item.children} />
//             </item.component> : <item.component {...props}></item.component>
//           }}></Route> : <Redirect key={item.from} exact from={item.from} to={item.to}></Redirect>
//         })}
//       }
//     <Redirect exact from="/" to="/login"></Redirect>
//     </Switch>
//     : null
// }


const RouterView = ({ routes }: any) => {
  console.log(routes, 'RouterView')
  return routes
    ? <Switch>
      {
        routes.map((item: any, index: number) => {
          return item.path
            ? <Route key={index} path={item.path} render={(props) =>
              item.children
                ? <item.component {...props}>
                  <RouterView routes={item.children} />
                </item.component>
                : <item.component {...props} />
            } ></Route>
            : <Redirect key={index} {...item} />
        })
      }
    </Switch>
    : null
}

export default RouterView