// components/classroom/roomDisplay/roomDisplay.js

import { searchClass } from "../../../network/classroom"

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
    classSearch:[]
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
      console.log(this.data.value);
      searchClass(JSON.stringify(this.data.value)).then(res => {
        console.log(res.data)
        this.setData({
          classSearch:res.data.allClass
        })
      })
    },
    onCancel(){
      console.log('cencel')
    },
    cpnTap(e){
      wx.navigateTo({
        url: `/pages/classroomRev/classroomRev?type=${e.detail.type}`,
      })
    }
  }
})
