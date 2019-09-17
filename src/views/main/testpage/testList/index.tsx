import * as React from 'react'
import './index.css'
import { Table } from 'antd';
import { Form, Select, } from 'antd'
import { inject, observer } from 'mobx-react'

const { Option } = Select
const columns = [
  {
    title: '试卷信息',
    dataIndex: 'testMessage',
  },
  {
    title: '班级',
    dataIndex: 'class',
  },
  {
    title: '创建人',
    dataIndex: 'author',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
  },
  {
    title: '操作',
    dataIndex: 'actions',
  },
];
const formDate = (time: number) => {
  const timestr = (new Date(time)).toLocaleString()
  // const str = timestr.slice(0, 10) + ' ' + timestr.slice(12)
  const str = timestr.replace(/[^0-9|\/|:]/g, ' ')
  return str
}
const differTime = (time: number) => {
  const addZero = (num: number) => {
    return num ? `0${num}` : num
  }
  const hours = time / 1000 / 60 / 60 % 60 | 0
  const minute = time / 1000 / 60 % 60 | 0
  const second = time / 1000 % 60 | 0
  return `${hours}:${addZero(minute)}:${addZero(second)}`
}

@inject('addQuestion', 'testPage')
@observer
class index extends React.Component<any>{
  constructor(props: any) {
    super(props)
    this.getTestPageList = this.getTestPageList.bind(this)
  }
  state = {
    testPageList: [],
    testType: '',
    testTypeSelections: [],
    lessonType: '',
    lessonTypeSelections: [],
    subjectType: '',
    subjectTypeSelections: [],
  }
  render() {

    const { testTypeSelections, lessonTypeSelections, testPageList } = this.state
    return (
      // <div className={styles.testList}>
      <div className={'testList'}>
        <h3>试卷列表</h3>
        <header>
          <p>考试类型：</p>
          <Form>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={e => this.hangdleChangeValue(e, 'exam_id')}
            >
              {
                testTypeSelections && testTypeSelections.length && testTypeSelections.map(
                  (item: any, index: number) =>
                    <Option value={item.exam_id} key={index}>
                      {item.exam_name}
                    </Option>
                )
              }
            </Select>
          </Form>
          <p>课程 :</p>
          <Form>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={e => this.hangdleChangeValue(e, 'lessonType')}
            >{
                lessonTypeSelections && lessonTypeSelections.map(
                  (item: any, index) =>
                    <Option value={item.subject_id} key={index}>
                      {item.subject_text}
                    </Option>
                )
              }</Select>
          </Form>

          <input type="button" value="查询" onClick={() => this.handleTestQuestion()} />
          <li></li>
        </header>

        <div className="testList_main">
          <p className="title">
            <span>试卷列表</span>
            {/* <button>全部</button>
                        <button>进行中 </button>
                        <button>已结束</button> */}
          </p>
          <Table columns={columns} dataSource={testPageList} size="middle" />
        </div>
      </div>
    )
  }


  componentDidMount() {
    this.handle_testTypeSelections.bind(this)()
    this.handle_lessonTypeSelections.bind(this)()
    this.handle_subjectTypeSelections.bind(this)()
    this.getTestPageList({})
  }
  // 分类试卷查询
  async handleTestQuestion() {
    console.log(this.state)
    let obj = {}

    // 添加筛选条件
    // exam_exam_id	  否	string	试卷id
    // subject_id	    否	string	学科id
    // title	        否	string	试卷标题
    // number	        否	number	试卷试题数量
    // start_time	    否	number	考试开始时间
    // end_time	      否	number	考试结束时间
    // page	          否	number	当前页码，默认1
    // pageSize	      否	number	每页数据量，默认10

    const { testType, lessonType, subjectType } = this.state
    // testType ?obj.:null
    // lessonType ?obj.:null
    // subjectType?obj.:null

    // 获取对应的试卷
    this.getTestPageList(obj)
  }

  // 获取试卷列表
  async getTestPageList(obj: object) {
    const result = (await this.props.testPage.getTestPageList(obj)).exam
    const testPageList = result.map((item: any, index: number) => {
      return {
        key: index,
        testMessage: item.title + '考试时间：  ' + differTime(item.end_time - item.start_time) + " " + JSON.parse(item.question_ids).length + '道题  作弊0分',
        class: '考试班级' + item.grade_name,
        author: item.user_name,
        startTime: formDate(+item.start_time),
        endTime: formDate(+item.end_time),
        actions: '详情'
      }
    })
    //  处理数据后进行sst 并动态渲染
    this.setState({ testPageList })
    // 
  }

  // 动态设置状态
  hangdleChangeValue = (e: any, name: string) => {
    if (e.target) {
      this.setState({ [name]: e.target.value })
    } else {
      this.setState({ [name]: e })
    }
  }

  // 请求试题类型数据
  async handle_testTypeSelections() {
    const testTypeSelections: [] = (await this.props.addQuestion.getTestType()).data
    this.setState({ testTypeSelections })
  }

  // 请求课程类型数据
  async handle_lessonTypeSelections() {
    const lessonTypeSelections: [] = (await this.props.addQuestion.getLessonType()).data
    this.setState({ lessonTypeSelections })
  }

  // 请求科目类型数据
  async handle_subjectTypeSelections() {
    const subjectTypeSelections: [] = (await this.props.addQuestion.getSubjectType()).data
    this.setState({ subjectTypeSelections })
  }

  // 跳转试卷详情  回调
  handleToTestDetail = (id: string) => {
    this.props.history.push('')
  }
}

export default index



