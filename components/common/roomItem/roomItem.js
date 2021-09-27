// components/classroom/roomItem/roomItem.js


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cid:{
      type:Number,
      value:0
    },
    position:{
      type:String,
      value:"教室一"
    },
    capacity:{
      type:String,
      value:"120人"
    },
    type:{
      type:String,
      value:"林世哲大楼"
    },
    isLink:{
      type:Boolean,
      value:true
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
      if(this.__data__.isLink){
        wx.navigateTo({
          url: `/pages/classroomDetail/classroomDetail?cid=${this.__data__.cid}&position=${this.__data__.position}&type=${this.__data__.type}&capacity=${this.__data__.capacity}`
        })
      }
    }
  }
})
