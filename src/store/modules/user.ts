//import { LoginForm } from './../../types/index';
import { observable, action } from 'mobx'
import { login,viewdata, InterfaceJurisdiction, userdata, apiinterface, identitydata } from '@/service/index'
import { setToken, removeToken } from '@/utils/index'

// 获取本地存储的用户信息
let account = {};

if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + '');
}

interface LoginForm {
    user_name: string,
    user_pwd: string
}
class User {
    @observable isLogin: boolean = false;
    @observable account: any = account;
    //视口接口的权限
    @action async viewdata(): Promise<any> {
        let result: any = await viewdata();
        return result
    }
    //身份和api接口关系
    @action async InterfaceJurisdiction(): Promise<any> {
        let result: any = await InterfaceJurisdiction();
        return result
    }
    //获取api接口权限
    @action async apiinterface(): Promise<any> {
        let result: any = await apiinterface();
        return result
    }
    //获取身份数据
    @action async identitydata(): Promise<any> {
        let result: any = await identitydata();
        return result
    }
    //获取用户数据
    @action async userdata(): Promise<any> {
        let result: any = await userdata();
        return result
    }
    @action async login(form: any): Promise<any> {
        let result: any = await login(form);
        if (result.code === 1) {
            // 1.判断是否记住用户名和密码
            if (form.remember) {
                window.localStorage.setItem('account', JSON.stringify(form));
            } else {
                window.localStorage.removeItem('account');
            }

            // 2.判断是否七天免登录
            if (form.autoLogin) {
                setToken(result.token);
            }
        }
        return result;
    }

    // 退出登陆
    @action async logout(): Promise<any> {
        removeToken();
    }
}

export default User;