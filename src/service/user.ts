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
//身份和视口权限关系
export let relationship = () => {
  return request.get('/user/identity_view_authority_relation');
}
//请选择id
export let uid = () => {
  return request.get('/user/identity');
}
//请选择已有视图
export let hasview = () => {
  return request.get('/user/new?user_id=w6l6n-cbvl6s');
}
//请选择已有视图权限
export let viewauthority = () => {
  return request.get('/user/view_authority');
}
//请选择已有api权限
export let apiauthority = () => {

  return request.get('/user/api_authority');
}
//批卷详情
export let detailtest = (id: any) => {
  return request.get(`/exam/student?grade_id=${id}`);
}

//展示身份和视图权限关系/user/identity_view_authority_relation
export let getIdentityView = () => {
  return request.get("/user/identity_view_authority_relation")
}






// 获取用户信息
export let getUserInfo = () => {
  return request.get('/user/userInfo');
}

// 获取用户权限
export let getViewAuthority = () => {
  return request.get('/user/view_authority');
}
