import request from '@/utils/request';

// 获取试题
export let getQuestion = (params: object) => {
  return request.get('/exam/questions/condition', { params });
}
//获取 试题类型
export let getQuestionsType = () => {
  return request.get('/exam/getQuestionsType');
}
//获取班级管理的数据
export let getclass = () => {
  return request.get("/manger/grade")
}
//获取教室管理的数据
export let getclassroom = () => {
  return request.get("/manger/room")
}
//获取试题详情的数据
export let getTestDetail = (id: string) => {
  console.log(id)
  return request.get("exam/questions/condition?questions_id=" + id)
}
