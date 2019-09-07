// 一级路由
import Login from '@/views/login';
import Main from '@/views/main';
// 二级路由
import Question from '@/views/main/quertion'
import AddQuestion from '@/views/main/quertion/addQuestion'
import ClassifyQuestion from '@/views/main/quertion/classifyQuestion'

//用户管理
import AddUser from '@/views/main/userpage/adduser'
import UserShow from '@/views/main/userpage/usershow'
//考试管理
import AddTest from "@/views/main/testpage/addtest"
import TestList from "@/views/main/testpage/testList"
//班级管理
import StudentAdministration from "@/views/main/Administration/StudentAdministration"
import ClassAdministration from "@/views/main/Administration/classAdministration"
import Classroom from "@/views/main/Administration/Classroom"
//阅卷管理
import Pending from "@/views/main/Marking/Pending"
//批卷详情
import Detailpijuan from "@/views/main/testpage/detailPijuan/detailPijuan"

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

      {
        path: '/main/adduser',
        component: AddUser
      },
      {
        path: '/main/usershow',
        component: UserShow
      },
      {
        path: '/main/addtest',
        component: AddTest
      },
      {
        path: '/main/StudentAdministration',
        component: StudentAdministration
      },
      {
        path: '/main/ClassAdministration',
        component: ClassAdministration
      },
      {
        path: '/main/Classroom',
        component: Classroom
      },
      {
        path: '/main/testList',
        component: TestList
      }, {
        path: '/main/pending',
        component: Pending
      },
      {
        path: '/main/detailpijuan',
        component: Detailpijuan
      }
    ]
  }, {
    path: '/login',
    component: Login
  }]
}