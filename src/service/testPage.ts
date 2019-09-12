import request from '@/utils/request'

// 添加试卷

// subject_id	    是	string	学科id
// exam_id	      是	string	试卷类型id
// title	        是	string	试卷标题
// number	        否	number	试卷题量， 默认4
// start_time	    是	number	开始时间
// end_time	      是	number	结束时间
export let addTestPage = (opt: object) => {
  return request.post('/exam/exam', opt)
}


// 更新试卷

// question_ids	   是	string	试题idjson化后的字符串 如：JSON.stringify(ids.join(‘,’))

export let updateTestPage = (id: string) => {
  return request.put(`/exam/exam${id}`)
}


// 获取试卷列表

// exam_exam_id	  否	string	试卷id
// subject_id	    否	string	学科id
// title	        否	string	试卷标题
// number	        否	number	试卷试题数量
// start_time	    否	number	考试开始时间
// end_time	      否	number	考试结束时间
// page	          否	number	当前页码，默认1
// pageSize	      否	number	每页数据量，默认10
export let getTestPageList = (opt: object) => {
  return request.get('/exam/exam', opt)
}


// 获取试卷详情

export let getTestPageDetail = (id: string) => {
  return request.get(`/exam/exam/${id}`)
}


// 删除试卷

export let deleteTestPage = (id: string) => {
  return request.delete(`/exam/exam/${id}`)
}





