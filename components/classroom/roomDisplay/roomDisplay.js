// components/classroom/roomDisplay/roomDisplay.js

import { searchmohuClass } from "../../../network/classroom"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Allclass:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classroomMap:null
  },
  /**
   * 组件的方法列表
   */

  methods: {
    onCancel(){
    },
    cpnTap(e){
      wx.navigateTo({
        url: `/pages/classroomRev/classroomRev?type=${e.detail.type}`,
      })
    },
    toSearch(){
      wx.navigateTo({
        url: "/pages/search/search",
      })
    }
  }
})
