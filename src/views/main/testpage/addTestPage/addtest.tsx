import * as React from "react";
import "./addtest.css"
import { Form, DatePicker, Button, Input, Select, InputNumber } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { inject, observer } from 'mobx-react'
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
    subjectType: [],
    lessonType: []

  };
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
  render() {
    const { startValue, endValue, endOpen, userInfo, subjectType, lessonType } = this.state;
    console.log(subjectType, lessonType)
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const rangeConfig = {
      rules: [
        {
          type: 'array',
          required: true,
          message: 'Please select time!'
        }
      ],
    };
    return (
      <div>
        <h2>添加考试</h2>
        <div className="addtest">
          <div className="form-box">
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <div className="time">
                <h3><b>*</b>试卷名称</h3>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
              </div>
              <div className="time">
                <h3><b>*</b>选择考试类型</h3>
                {/* <Form.Item hasFeedback>
                  {getFieldDecorator('select', {
                    rules: [{
                      required: true,
                      message: 'Please select your country!'
                    }],
                  })( */}
                    <Select onChange={e => this.hangdleChangeValue(e, 'exam_id')}
                    >{
                        subjectType.length && subjectType.map((item: any) =>
                          <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>)
                      }</Select>
                  {/* )}
                </Form.Item> */}
              </div>

              <div className="time">
                <h3><b>*</b>选择课程</h3>
                {/* <Form.Item hasFeedback>
                  {getFieldDecorator('select', {
                    rules: [{
                      required: true,
                      message: 'Please select your country!'
                    }],
                  })( */}
                    <Select onChange={e => this.hangdleChangeValue(e, 'subject_id')}
                    >{
                        lessonType.length && lessonType.map((item: any) =>
                          <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>)
                      }</Select>
                  {/* )}
                </Form.Item> */}
              </div>
              <div className="time">
                <h3><b>*</b>设置题量</h3>
                <Form.Item>
                  {getFieldDecorator('input-number')(<InputNumber min={1} max={10} />)}
                </Form.Item>
              </div>
              <div className="time">
                <h3>考试时间</h3>
                {/* <Form.Item>
                  {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
                </Form.Item> */}
                <DatePicker
                  disabledDate={this.disabledStartDate}
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  value={startValue}
                  placeholder="Start"
                  onChange={this.onStartChange}
                  onOpenChange={this.handleStartOpenChange}
                  onOk={this.handle_start_time}
                />
                <DatePicker
                  disabledDate={this.disabledEndDate}
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  value={endValue}
                  placeholder="End"
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

  // 初始化类型列表请求数据   用户的/+两个列表的
  // 请求数据时设置报错机制 
  async getDefaultData() {
    const userInfo = (await this.props.addQuestion.getUsernfo()).data
    const subjectType = (await this.props.addQuestion.getTestType()).data
    const lessonType = (await this.props.addQuestion.getLessonType()).data
    console.log(userInfo, subjectType, lessonType)
    this.setState({
      userInfo,
      subjectType,
      lessonType
    })
  }

  handleAddTest() {
    let obj = {}

    // subject_id	    是	string	学科id
    // exam_id	      是	string	试卷类型id
    // title	        是	string	试卷标题
    // number	        否	number	试卷题量， 默认4
    // start_time	    是	number	开始时间
    // end_time	      是	number	结束时间 设置传参
    const result = this.props.testPage.addTestPage(obj)
    console.log(result)
    // 判断并且跳转页面到添加具体试题的页面
  }

  // 合并方法  设置整体状态
  hangdleChangeValue = (e: any, name: string) => {
    if (e.target) {
      this.setState({ [name]: e.target.value })
    } else {
      this.setState({ [name]: e })
    }
  }

}
export default Form.create()(Addtest)


