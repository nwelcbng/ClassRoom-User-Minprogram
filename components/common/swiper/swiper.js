// components/home/swiper/swiper.js


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banners:{
      type:Array,
      default:[]
    }
  },

  /**
   * 组件的初始数据
   */
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

  },
  created(){

  }
})
