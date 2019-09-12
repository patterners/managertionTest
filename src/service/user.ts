import request from '@/utils/request';

// 登陆
export let login = (params: object) => {
    return request.post('/user/login', params);
}
//获取用户数据
export let userdata = () => {
    return request.get('/user/user');
}