// pages/search/search.js
import { searchmohuClass } from "../../network/classroom"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    classSearch:[],
    classroomMap:null
  },
  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  onSearch(){
    const data = {
      position:this.data.value
    }
    searchmohuClass(data).then(res => {
      this.setData({
        classSearch:res.data
      })
    })
  },
  onCancel(){
  },
})