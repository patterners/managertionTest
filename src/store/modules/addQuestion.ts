import { observable, action } from 'mobx'
import { getTestType, getLessonType, getSubjectType,getUsernfo,postAddQuestion } from '@/service/index'
class addQuestion {
  // 按条件获取试题

  // 按条件获取试题类型
  @action async getTestType(): Promise<any> {
    let result: any = await getTestType();
    return result
  }
  // 获取班级管理的数据
  @action async getLessonType(): Promise<any> {
    let result: any = await getLessonType();
    return result
  }
  // 获取试题详情的数据
  @action async getSubjectType(): Promise<any> {
    let result: any = await getSubjectType();
    return result
  }
  // 获取用户信息
  @action async getUsernfo(): Promise<any> {
    let result: any = await getUsernfo();
    return result
  }
  @action async postAddQuestion(opt:object): Promise<any> {
    let result: any = await postAddQuestion(opt);
    return result
  }
  
}

export default addQuestion;