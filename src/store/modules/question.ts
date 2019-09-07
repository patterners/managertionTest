import { observable, action } from 'mobx'
import { getQuestion, getQuestionsType, getclass, getTestDetail } from '@/service/index'
class Question {
  // 按条件获取试题
  @action async getQuestion(params: any): Promise<any> {
    let result: any = await getQuestion(params);
    return result
  }
  // 按条件获取试题类型
  @action async getQuestionsType(): Promise<any> {
    let result: any = await getQuestionsType();
    return result
  }
  // 获取班级管理的数据
  @action async getclass(): Promise<any> {
    let result: any = await getclass();
    console.log("班级管理.........", result)
    return result
  }
  // 获取试题详情的数据
  @action async getTestDetail(id: string): Promise<any> {
    let result: any = await getTestDetail(id);
    console.log("班级管理.........", result)
    return result
  }

}

export default Question;