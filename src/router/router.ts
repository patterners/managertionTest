import * as React from 'react'
// 一级路由
const Login = React.lazy(() => import('@/views/login'));
const Main = React.lazy(() => import('@/views/main'));

// 试题管理
const Question = React.lazy(() => import('@/views/main/quertion'));
const ViewQuestion = React.lazy(() => import('@/views/main/quertion/checkQuestion'));
const AddQuestion = React.lazy(() => import('@/views/main/quertion/addQuestion'));
const ClassifyQuestion = React.lazy(() => import('@/views/main/quertion/classifyQuestion'));
const ChangeQuestion = React.lazy(() => import('@/views/main/quertion/changeQuestion'));

// 试题详情页 
const QuestionDetail = React.lazy(() => import('@/views/main/quertion/testItemDetails'));

//用户管理
const User = React.lazy(() => import('@/views/main/userpage'));
const AddUser = React.lazy(() => import('@/views/main/userpage/adduser'));
const UserShow = React.lazy(() => import('@/views/main/userpage/usershow'));

//考试管理
const Test = React.lazy(() => import("@/views/main/testpage"));
const AddTest = React.lazy(() => import("@/views/main/testpage/addTestPage/addtest"));
const TestList = React.lazy(() => import("@/views/main/testpage/testList"));
const CreateTestPage = React.lazy(() => import('@/views/main/testpage/createTextPape'));

//班级管理
const Class = React.lazy(() => import('@/views/main/Administration'));
const StudentAdministration = React.lazy(() => import('@/views/main/Administration/StudentAdministration'));
const ClassAdministration = React.lazy(() => import('@/views/main/Administration/classAdministration'));
const Classroom = React.lazy(() => import('@/views/main/Administration/Classroom'));

//阅卷管理
const Pijuan = React.lazy(() => import("@/views/main/Marking"));
const Pending = React.lazy(() => import('@/views/main/Marking/Pending'));

//批卷详情
const Detailpijuan = React.lazy(() => import("@/views/main/testpage/detailPijuan/detailPijuan"));


export default {
  routes: [{
    path: '/main',
    component: Main,
    children: [
      // 试题管理
      {
        title: "menu.question",
        path: '/main/question',
        component: Question,
        children: [
          {
            title: "menu.question.viewQuestion",
            path: '/main/question/checkQuestion',
            component: ViewQuestion
          },
          {
            path: '/main/question/detail',
            component: QuestionDetail
          },
          {
            path: '/main/question/addQuestion',
            title: "menu.question.addQuestion",
            component: AddQuestion
          }, {
            title: "menu.question.typeQuestion",
            path: '/main/question/classifyQuestion',
            component: ClassifyQuestion
          },
          {
            path: '/main/question/changeQuestion',
            component: ChangeQuestion
          },
        ]
      },
      // 用户管理
      {
        title: "menu.user",
        path: '/main/user',
        component: User,
        children: [
          {
            title: "menu.user.addUser",
            path: '/main/user/adduser',
            component: AddUser
          },
          {
            title: "menu.user.showUser",
            path: '/main/user/usershow',
            component: UserShow
          },
        ]
      },
      // 考试管理
      {
        "title": "menu.exam",
        path: '/main/test',
        component: Test,
        children: [
          {
            "title": "menu.exam.addExam",
            path: '/main/test/addtest',
            component: AddTest
          },
          {
            path: '/main/test/detailpijuan',
            component: Detailpijuan
          },
          {
            path: '/main/test/createTestPage',
            component: CreateTestPage
          },
          {
            "title": "menu.exam.examList",
            path: '/main/test/testList',
            component: TestList
          },
        ]
      },


      // 班级管理
      {
        title: "menu.class",
        path: '/main/Class',
        component: Class,
        children: [
          {
            title: "menu.class.grade",
            path: '/main/Class/ClassAdministration',
            component: ClassAdministration
          },
          {
            title: "menu.class.room",
            path: '/main/Class/Classroom',
            component: Classroom
          },
          {
            title: "menu.class.student",
            path: '/main/Class/StudentAdministration',
            component: StudentAdministration
          },
        ]
      },
      // 阅卷
      {
        title: "menu.marking",
        path: '/main/pending',
        component: Pijuan,
        children: [
          {
            title: "menu.marking.wait",
            path: '/main/pending/pending',
            component: Pending,
          }
        ]
      },
      {
        path: '/main/detailpijuan/:item?',
        component: Detailpijuan

      }
    ]
  }, {
    path: '/login',
    component: Login
  },
  ]
}