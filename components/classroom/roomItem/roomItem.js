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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dialogShow: false,
    // buttons: [{text: '取消'}, {text: '确定'}],
    // result: [],
    // value:''
  },


  /**
   * 组件的方法列表
   */
  methods: {
    cpnTap(){
      wx.navigateTo({
        url: `/pages/classroomDetail/classroomDetail?cid=${this.__data__.cid}&position=${this.__data__.position}&type=${this.__data__.type}&capacity=${this.__data__.capacity}`
      })

      // this.setData({ dialogShow: true });
    },
    // tapDialogButton(e) {
    //   console.log(e)
    //   if(e.detail.index == 1){
    //     console.log(this.data.result)
    //     console.log(this.data.value)
    //   }
    //   this.setData({
    //       dialogShow: false
    //   })
    // },
    // onChange(e) {
    //   this.setData({
    //     result: e.detail,
    //   });
    // },
    // unfoucs(e){
    //   this.setData({
    //     value:e.detail.value
    //   })
    // }
  }
})
