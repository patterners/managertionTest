import { observable, action } from 'mobx'
import { getOneQuestion, changeOneQuestion } from '@/service/index'
class changeQuestion {
  // 按条件获取试题
  @action async getOneQuestion(id: string): Promise<any> {
    let result: any = await getOneQuestion(id);
    return result
  }
  // 提交修改的试题
  @action async changeOneQuestion(opt: object): Promise<any> {
    let result: any = await changeOneQuestion(opt);
    return result
  }
}

export default changeQuestion;