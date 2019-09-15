
// 引入子模块
import User from './modules/user';
import Question from './modules/question';
import Addquestion from './modules/addQuestion'
import ChangeQuestion from './modules/changeQuestion'
import TestPage from './modules/testPage'
import Test from './modules/text'
// 实例化模块
const user = new User();
const question = new Question();
const addQuestion = new Addquestion()
const changeQuestion = new ChangeQuestion()
const testPage = new TestPage()
const text = new Test
export default {
  user,
  question,
  addQuestion,
  changeQuestion,
  testPage,
  text
}