import request from '@/utils/request';

// 获取试题
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}
//获取 试题类型
export let getQuestionsType = ()=>{
    return request.get('/exam/getQuestionsType');
}
//获取待批班级数据
