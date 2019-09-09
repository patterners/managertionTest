
// 引入子模块
import User from './modules/user';
import Question from './modules/question';
import Addquestion from './modules/addQuestion'
import ChangeQuestion from './modules/changeQuestion'

// 实例化模块
const user = new User();
const question = new Question();
const addQuestion = new Addquestion()
const changeQuestion = new ChangeQuestion()


export default {
  user,
  question,
  addQuestion,
  changeQuestion
}