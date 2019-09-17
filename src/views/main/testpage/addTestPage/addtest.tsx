import "./addtest.css"
// import moment from "moment"
import * as React from "react";
import { inject, observer } from 'mobx-react'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { Form, DatePicker, Button, Input, Select, InputNumber, message } from 'antd';

const moment = require('moment')

const { Option } = Select;

interface Props {
  form: WrappedFormUtils
}
interface StateInfo {
  startValue: any,
  endValue: any,
  endOpen: boolean
}

@inject('testPage', 'addQuestion')
@observer

class Addtest extends React.Component<any> {
  constructor(props: any) {
    super(props)
    this.getDefaultData = this.getDefaultData.bind(this)
    this.handleAddTest = this.handleAddTest.bind(this)
  }
  state: any = {
    startValue: null,
    endValue: null,
    endOpen: false,
    userInfo: null,
    exam_id: '',
    subject_id: '',
    number: 4,
    title: '',
    subjectType: [],
    lessonType: [],
  };

  render() {
    const { startValue, endValue, endOpen, title, userInfo, subjectType, lessonType, number } = this.state;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div>
        <h2>添加考试</h2>
        <div className="addtest">
          <div className="form-box">
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <div className="time">
                <h3><b>*</b>试卷名称</h3>
                <Input value={title} onChange={e => this.hangdleChangeValue(e, 'title')} />
              </div>
              <div className="time">
                <h3><b>*</b>选择考试类型</h3>
                <Select onChange={e => this.hangdleChangeValue(e, 'exam_id')}>
                  {
                    subjectType.length && subjectType.map((item: any) =>
                      <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>)
                  }
                </Select>
              </div>
              <div className="time">
                <h3><b>*</b>选择课程</h3>
                <Select onChange={e => this.hangdleChangeValue(e, 'subject_id')}>
                  {lessonType.length && lessonType.map((item: any) =>
                    <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>)
                  }
                </Select>
              </div>
              <div className="time">
                <h3><b>*</b>设置题量</h3>
                <InputNumber onChange={e => this.hangdleChangeValue(e, 'number')}
                  value={number} min={1} max={10} />
              </div>
              <div className="time">
                <h3>考试时间</h3>
                <DatePicker
                  disabledDate={this.disabledStartDate}
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  value={startValue}
                  placeholder="Start Time"
                  onChange={this.onStartChange}
                  onOpenChange={this.handleStartOpenChange}
                  onOk={this.handle_start_time}
                />
                <DatePicker
                  disabledDate={this.disabledEndDate}
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  value={endValue}
                  placeholder="End Time"
                  onChange={this.onEndChange}
                  open={endOpen}
                  onOpenChange={this.handleEndOpenChange}
                  onOk={this.handle_end_time}
                />
              </div>
              <Form.Item
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 16, offset: 8 },
                }}>
                <Button className="button" type="primary"
                  htmlType="submit" onClick={this.handleAddTest}
                >
                  创建试卷
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div >
    )
  }


  componentDidMount() {
    this.getDefaultData()
  }
  //  清空数据  防止内存泄漏？
  componentWillUnmount() {
    this.state = null
  }

  // 初始化类型列表请求数据   用户的/+两个列表的
  // 请求数据时应该设置报错机制 
  async getDefaultData() {
    const userInfo = (await this.props.addQuestion.getUsernfo()).data
    const subjectType = (await this.props.addQuestion.getTestType()).data
    const lessonType = (await this.props.addQuestion.getLessonType()).data
    this.setState({
      userInfo,
      subjectType,
      lessonType
    })
  }

  async  handleAddTest() {
    console.log(this.state)
    const {
      title,
      number,
      exam_id,
      endValue,
      subject_id,
      startValue,
    } = this.state

    //将moment格式转为时间戳
    const start_time = +moment(startValue).format('x')
    const end_time = +moment(endValue).format('x')
    let obj = {
      subject_id, exam_id, title, number, start_time, end_time
    }

    const result = await this.props.testPage.addTestPage(obj)
    console.log(result)
    // 判断并且跳转页面到添加具体试题的页面

    if (result.code === 1) {
      message.success(result.msg)
      // this.props.history.push('/main/createTestPage')
      this.props.history.push('/main/testList')

    }
  }

  // 合并方法  设置整体状态
  hangdleChangeValue = (e: any, name: string) => {
    if (e.target) {
      this.setState({ [name]: e.target.value })
    } else {
      this.setState({ [name]: e })
    }
  }

  // form表单的方法
  disabledStartDate = (startValue: any) => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue: any) => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field: string, value: any) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value: any) => {
    this.onChange('startValue', value);
  };

  onEndChange = (value: any) => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = (open: any) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = (open: any) => {
    this.setState({ endOpen: open });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: string, fieldsValue: any) => {
      if (err) {
        return;
      }
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
          rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  };

  handle_start_time = (e: any) => {
    console.log(e)
  }
  handle_end_time = (e: any) => {
    console.log(e._d)
  }
}
export default Form.create()(Addtest)
