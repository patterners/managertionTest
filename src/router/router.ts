// 一级路由
import Login from '@/views/login';
import Main from '@/views/main';
// 二级路由
import Question from '@/views/main/quertion'
import AddQuestion from '@/views/main/quertion/addQuestion'
import ClassifyQuestion from '@/views/main/quertion/classifyQuestion'


export default {
    routes: [{
        path: '/main',
        component: Main,
        children: [
            {
                path: '/main/checkQuestion',
                component: Question
            }, {
                path: '/main/addQuestion',
                component: AddQuestion
            }, {
                path: '/main/classifyQuestion',
                component: ClassifyQuestion
            },
        ]
    }, {
        path: '/login',
        component: Login
    }]
}