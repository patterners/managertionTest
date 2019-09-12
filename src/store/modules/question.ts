import { observable, action } from 'mobx'

import {
<<<<<<< HEAD
  getQuestion, noclassroom, updataclass, addclass, deleteclassroom, getTestDetail, getQuestionsType, getclass, getclassroom, deleteclass, removeQuestionType,
  addQuestionType, getstudent, addclassroom, deleteStudent
} from '@/service/index'
=======
  getQuestion, noclassroom, updataclass, addclass,
  deleteclassroom, getTestDetail, getQuestionsType,
  getclass, getclassroom, deleteclass, getstudent,
  addclassroom, deleteStudent,
  removeQuestionType,addQuestionType
} from '@/service/index'

>>>>>>> 4c3954d9c1f8644ee1c25c652ed8218febf18206
class Question {
  // 按条件获取试题
  @action async getQuestion(params: any): Promise<any> {
    let result: any = await getQuestion(params);
    return result
  }
<<<<<<< HEAD

=======
  // 按条件获取试题类型
  @action async getQuestionsType(): Promise<any> {
    let result: any = await getQuestionsType();
    return result
  }
>>>>>>> 4c3954d9c1f8644ee1c25c652ed8218febf18206
  // 获取班级管理的数据
  @action async getclass(): Promise<any> {
    let result: any = await getclass();
    return result
  }

  @action async getclassroom(): Promise<any> {
    let result: any = await getclassroom();
    return result
  }
  //删除班级接口
  @action async deleteclass(grade_id: any): Promise<any> {
    let result: any = await deleteclass(grade_id);
    return result
  }
  //获取所有没有分班的学生
  @action async getstudent(): Promise<any> {
    let result: any = await getstudent();
    return result
  }
  //添加教室
  @action async addclassroom(text: string): Promise<any> {
    let result: any = await addclassroom(text);
    return result
  }
  //删除学生的接口
  @action async deleteStudent(id: string): Promise<any> {
    let result: any = await deleteStudent(id);
    return result
  }

  // 获取试题详情的数据
  @action async getTestDetail(id: string): Promise<any> {
    let result: any = await getTestDetail(id);
    return result
  }
  // 删除班级的数据
  @action async deleteclassroom(id: string): Promise<any> {
    let result: any = await deleteclassroom(id);
    return result
  }
  // 添加班级接口
  @action async addclass(grade_name: any, room_id: any, subject_id: any): Promise<any> {
    let result: any = await addclass({ grade_name, room_id, subject_id });
    return result
  }
  //更新班级接口
  @action async updataclass(grade_id: any, grade_name: any, subject_id: any, room_id: any): Promise<any> {
    let result: any = await updataclass({ grade_id, grade_name, subject_id, room_id: "" });
    return result
  }
  //获取已经分配的班级
  @action async noclassroom(): Promise<any> {
    let result: any = await noclassroom();
    return result
  }


<<<<<<< HEAD
=======

  // 按条件获取试题
  @action async getQuestion(params: any): Promise<any> {
    let result: any = await getQuestion(params);
    return result
  }

>>>>>>> 4c3954d9c1f8644ee1c25c652ed8218febf18206
  // 按条件获取试题类型
  @action async getQuestionsType(): Promise<any> {
    let result: any = await getQuestionsType();
    return result
  }
<<<<<<< HEAD
=======

  // 获取班级管理的数据
  @action async getclass(): Promise<any> {
    let result: any = await getclass();
    return result
  }

  @action async getclassroom(): Promise<any> {
    let result: any = await getclassroom();
    return result
  }

  //删除班级接口
  @action async deleteclass(grade_id: any): Promise<any> {
    let result: any = await deleteclass(grade_id);
    return result
  }
  //获取所有没有分班的学生
  @action async getstudent(): Promise<any> {
    let result: any = await getstudent();
    return result
  }
  //添加教室
  @action async addclassroom(text: string): Promise<any> {
    let result: any = await addclassroom(text);
    return result
  }
  //删除学生的接口
  @action async deleteStudent(id: string): Promise<any> {
    let result: any = await deleteStudent(id);
    return result
  }

  // 获取试题详情的数据
  @action async getTestDetail(id: string): Promise<any> {
    let result: any = await getTestDetail(id);
    console.log("班级管理.........", result)
    return result
  }

>>>>>>> 4c3954d9c1f8644ee1c25c652ed8218febf18206
  // 添加类型  
  @action async addQuestionType(opt: object): Promise<any> {
    const result: any = await addQuestionType(opt)
    return result
  }

  //  删除类型
  @action async removeQuestionType(opt: object): Promise<any> {
    const result: any = removeQuestionType(opt)
    return result
  }


}

export default Question;