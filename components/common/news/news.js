// components/home/news/news.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    news:{
      type:Array,
      value:[]
    },
    newsSearch:{
      type:Array,
      value:[]
    }
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
      this.triggerEvent("onSearch",{title:e.detail},{})
    },
    onCancel(){
    },
    cpnTap(e){
      wx.navigateTo({
        url: `/pages/detail/detail?title=${e.detail.title}`
      })
    }
  }
})
