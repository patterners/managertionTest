import { observable, action } from 'mobx'
import { addTestPage, updateTestPage, getTestPageList, getTestPageDetail, deleteTestPage } from '@/service/index'


class testPage {


  @action async addTestPage(opt: object): Promise<any> {
    let result: any = await addTestPage(opt);
    return result
  }

  @action async  updateTestPage(id: string): Promise<any> {
    let result: any = await updateTestPage(id);
    return result
  }
  
  @action async getTestPageList(opt: object): Promise<any> {
    let result: any = await getTestPageList(opt);
    return result
  }
  
  @action async  getTestPageDetail(id: string): Promise<any> {
    let result: any = await getTestPageDetail(id);
    return result
  }
  
  @action async deleteTestPage(id: string): Promise<any> {
    let result: any = await deleteTestPage(id);
    return result
  }


}

export default testPage;


