// components/home/news/news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      this.setData({
        value:e.detail
      })
    },
    onSearch(e){
      console.log(e.detail)
    },
    onCancel(){
      console.log("can")
    },
    cpnTap(){
      wx.navigateTo({
        url: '/pages/detail/detail?title=一个标题'
      })
    }
  }
})
