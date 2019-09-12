import request from '@/utils/request';

// 登陆
export let login = (params: object) => {
    return request.post('/user/login', params);
}
//获取用户数据
export let userdata = () => {
    return request.get('/user/user');
}
//获取身份
export let identitydata = () => {
    return request.get('/user/identity');
}
//获取api接口权限
export let apiinterface = () => {
    return request.get('/user/api_authority');
}
//身份和api接口关系
export let InterfaceJurisdiction = () => {
    return request.get('/user/identity_api_authority_relation');
}
//视口接口的权限
export let viewdata = () => {
    return request.get('/user/view_authority');
}