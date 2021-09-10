// components/classroom/roomDisplay/roomDisplay.js
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
    params:[
      {
        type:"材化大楼"
      },
      {
        type:"智能大楼"
      },
      {
        type:"土建大楼"
      },
      {
        type:"林世哲大楼"
      },
      {
        type:"梁绳基大楼"
      },
      {
        type:"项南大楼"
      },
      {
        type:"瑞基大楼"
      },
  ]
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
      console.log(this.data.value)
      console.log('search')
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
