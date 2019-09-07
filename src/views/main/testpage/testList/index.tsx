import * as React from 'react'
import './index.css'
import { Table } from 'antd';

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
const data = [
  {
    key: '1',
    testMessage: 'John Brown',
    class: 32,
    author: 'New York No. 1 Lake Park',
    startTime: '',
    endTime: '',
    actions: ''
  },
];

class index extends React.Component {
  render() {
    return (
      // <div className={styles.testList}>
      <div className={'testList'}>
        <h3>试卷列表</h3>
        <header>
          <p>
            考试类型 ：<select name="" id=""></select>
          </p>
          <p>
            课程 ：<select name="" id=""></select>
          </p>
          <input type="button" value="查询" />
          <li></li>
        </header>

        <div className="testList_main">
          <p className="title">
            <span>试卷列表</span>
            {/* <button>全部</button>
                        <button>进行中 </button>
                        <button>已结束</button> */}
          </p>
          <Table columns={columns} dataSource={data} size="middle" />
        </div>
      </div>
    )
  }
}

export default index

