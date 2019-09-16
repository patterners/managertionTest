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


// 403/404
const Page_403 = React.lazy(() => import('@/views/safetyPage/403'))
const Page_404 = React.lazy(() => import('@/views/safetyPage/404'))

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
            view_id: "main-watchQuestions",
            component: ViewQuestion
          }, {
            path: '/main/question/detail',
            view_id: "main-questionsDetail",
            component: QuestionDetail
          }, {
            path: '/main/question/addQuestion',
            title: "menu.question.addQuestion",
            view_id: "main-addQuestions",
            component: AddQuestion
          }, {
            title: "menu.question.typeQuestion",
            view_id: "main-questionsType",
            path: '/main/question/classifyQuestion',
            component: ClassifyQuestion
          }, {
            path: '/main/question/changeQuestion',
            view_id: "main-editQuestions",
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
            view_id: "main-addUser",
            component: AddUser
          },
          {
            title: "menu.user.showUser",
            path: '/main/user/usershow',
            view_id: "main-showUser",
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
            title: "menu.exam.addExam",
            path: '/main/test/addtest',
            view_id: "main-addExam",
            component: AddTest,
          },
          {
            path: '/main/test/detailpijuan',
            component: Detailpijuan
          },
          {
            path: '/main/test/createTestPage',
            view_id: "main-examEdit",
            component: CreateTestPage
          },
          {
            title: "menu.exam.examList",
            view_id: "main-examList",
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
            view_id: "main-grade",
            path: '/main/Class/ClassAdministration',
            component: ClassAdministration
          },
          {
            title: "menu.class.room",
            view_id: "main-room",
            path: '/main/Class/Classroom',
            component: Classroom
          },
          {
            title: "menu.class.student",
            view_id: "main-student",
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
            view_id: "main-examPaperClassmate",
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
  {
    path: "/403",
    component: () => Page_403
  }, {
    path: "/404",
    component: () => Page_404
  },
  {
    from: "/",
    to: "/login"
  }, {
    from: "*",
    to: "/404"
  }
  ]
}