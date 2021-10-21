// components/home/swiper/swiper.js


Component({

  data: {
    // background: ['/assets/imgs/tabbar/jiaoshi.png', '/assets/imgs/tabbar/jiaoshi-active.png'],  //这是本地图片
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(){
      console.log(1)
    },
    toAdm(){
      wx.navigateTo({
        url: '/pages/detail/detail?title=辅导员公告'
      })
    },
    toCol(){
      wx.navigateTo({
        url: '/pages/detail/detail?title=学校公告'
      })
    },
    toStu(){
      wx.navigateTo({
        url: '/pages/detail/detail?title=学生使用守则'
      })
    }
  },
  created(){

  },

})
