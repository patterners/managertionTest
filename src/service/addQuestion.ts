import request from '@/utils/request';

export let getTestType = () => {
  return request.get('/exam/examType')
}

export let getLessonType = () => {
  return request.get('/exam/subject')
}

export let getSubjectType = () => {
  return request.get('/exam/getQuestionsType')
}

export let getUsernfo = () => {
  return request.get('/user/userInfo')
}

export let postAddQuestion = (opt: object) => {
  return request.post('/exam/questions', opt)
}



