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
    activeNames: ['1'],
    id:123,
    value:"",
    config:{
      isLink:false,
      value:'123',
      label:'123',
      title:'123'
    },
    classSearch:[],
    classroomMap:null
  },
  /**
   * 组件的方法列表
   */

  methods: {
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
    cpnTap(e){
      wx.navigateTo({
        url: `/pages/classroomRev/classroomRev?type=${e.detail.type}`,
      })
    }
  }
})
