import { observable, action } from "mobx"

class Intl {
  @observable locale: string = "zh"

  // 切换语言
  @action changeLocale(locale: string): void {
    this.locale = locale
  }
}

export default Intl;