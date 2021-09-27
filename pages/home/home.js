// // pages/home/home.js
// import {getSwiper} from "../../network/home"
import {getNews,searchNews} from "../../network/home"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:null,
    background: [
      {
        image:'/assets/imgs/tabbar/jiaoshi.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi-active.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi.png'
      },
      {
        image:'/assets/imgs/tabbar/jiaoshi-active.png'
      }
      ],  //这是本地图片
      news:[],
      newsSearch:[]
  },

  onLoad: function (options) {

    getNews().then(res => {
      if(res.code === 1){
        this.convertDate(res.data);
        wx.setStorageSync('news', res.data);
        this.setData({
          news:res.data
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon:"error",
        })
      }
    }).catch(err => {
      wx.showToast({
        title: '网络错误',
        icon:'error'
      })
    })
  },

  onSearch(options){
    let search = {
      title:options.detail.title
    }
    searchNews(search).then(res => {
      console.log(res)
      if(res.code === 1){
        this.convertDate(res.data);
        wx.setStorageSync('newsSearch', res.data);
        this.setData({
          newsSearch:res.data
        })
      }else{
        wx.showToast({
          title: res.msg,
          icon:"error",
        })
      }
    }).catch(err => {
      wx.showToast({
        title: '网络错误',
        icon:'error'
      })
    })
  },
  convertDate(data){
    data.forEach(item => {
      let date = new Date(item.date);
      item.date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    })
  }
})