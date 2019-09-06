import { observable, action } from 'mobx'
import { getQuestion } from '@/service/index'

class Question {
    // @observable account: any = account;


    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        let result: any = await getQuestion(params);
        console.log('question...', result);
        return result
    }
}

export default Question;