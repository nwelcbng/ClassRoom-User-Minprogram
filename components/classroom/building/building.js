// components/classroom/building/building.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    params:{
      type:Object,
      value:null
    },
    position:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cpnTap(){
      wx.navigateTo({
        url: `/pages/classroomRev/classroomRev?type=${this.__data__.position}`,
      })
    }
  }
})
