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
//删除教室接口
export let deleteclass = (id: any) => {
  return request.delete("/manger/room/delete", {
    data: { room_id: id }
  })
}
//获取没有分班
export let getstudent = () => {
  return request.get("/manger/student/new")
}
//添加教室
export let addclassroom = (text: string) => {
  return request.post("/manger/room", {
    room_text: text
  })
}
//删除学生
export let deleteStudent = (id: any) => {
  return request.delete(`/manger/student/${id}`)
}

//获取试题详情的数据
export let getTestDetail = (id: string) => {
  console.log(id)
  return request.get("exam/questions/condition?questions_id=" + id)
}



// 获取特定的试题信息
export let getOneQuestion = (id: string) => {
  return request.get('/exam/questions/condition', { params: { questions_id: id } })
}

//  修改试题
export let changeOneQuestion = (opt: object) => {
  return request.put('/exam/questions/update', opt)
}

// 添加类型
export let addQuestionType = (opt: object) => {
  return request.post('/exam/insertQuestionsType', opt)
}

// 删除类型
export let removeQuestionType = (opt: object) => {
  return request.post('/exam/delQuestionsType', opt)
}


