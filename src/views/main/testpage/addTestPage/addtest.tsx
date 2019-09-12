import * as React from "react";
import "./addtest.css"
import { Form, DatePicker, Button, Input, Select, InputNumber } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { inject, observer } from 'mobx-react'
const { RangePicker } = DatePicker;
const { Option } = Select;
interface Props {
  form: WrappedFormUtils
}


@inject('testPage', 'addQuestion')
@observer

class Addtest extends React.Component<any> {
  constructor(props: any) {
    super(props)
    this.getDefaultData = this.getDefaultData.bind(this)
    this.handleAddTest = this.handleAddTest.bind(this)
  }
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
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
                <Form.Item hasFeedback>
                  {getFieldDecorator('select', {
                    rules: [{ required: true, message: 'Please select your country!' }],
                  })(
                    <Select>
                      <Option value="china">China</Option>
                      <Option value="usa">U.S.A</Option>
                    </Select>,
                  )}
                </Form.Item>
              </div>

              <div className="time">
                <h3><b>*</b>选择课程</h3>
                <Form.Item hasFeedback>
                  {getFieldDecorator('select', {
                    rules: [{ required: true, message: 'Please select your country!' }],
                  })(
                    <Select>
                      <Option value="china">China</Option>
                      <Option value="usa">U.S.A</Option>
                    </Select>,
                  )}
                </Form.Item>
              </div>
              <div className="time">
                <h3><b>*</b>设置题量</h3>
                <Form.Item>
                  {getFieldDecorator('input-number')(<InputNumber min={1} max={10} />)}
                </Form.Item>
              </div>
              <div className="time">
                <h3>考试时间</h3>
                <Form.Item>
                  {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
                </Form.Item>
              </div>
              <Form.Item
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 16, offset: 8 },
                }}>
                <Button className="button" type="primary" htmlType="submit" onClick={this.handleAddTest}>创建试卷</Button>
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
    const subjectType = (await this.props.addQuestion.getSubjectType()).data
    const lessonType = (await this.props.addQuestion.getLessonType()).data
    console.log(userInfo,
      subjectType,
      lessonType)
    this.setState({
      userInfo,
      subjectType,
      lessonType
    })
  }

  handleAddTest() {
    let obj = {}
    // 设置传参




    const result = this.props.testPage.addTestPage(obj)

    console.log(result)
    // 判断并且跳转页面到添加具体试题的页面


  }

}
export default Form.create()(Addtest)


