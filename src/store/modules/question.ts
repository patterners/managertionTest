import { observable, action } from 'mobx'
import { getQuestion ,getQuestionsType} from '@/service/index'

class Question {
    // @observable account: any = account;


    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        let result: any = await getQuestion(params);
        return result
    }
    // 按条件获取试题类型
    @action async getQuestionsType(): Promise<any> {
        let result: any = await getQuestionsType();
        console.log('getQuestionsType...', result);
        return result
    }
}

export default Question;