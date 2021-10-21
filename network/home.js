import request from "./request"
export function getNews(){
  return request({
    url:"/user/getAnnouncements",
    header:{
      "content-type": "application/x-www-form-urlencoded; charset-UTF-8",
      Authorization:wx.getStorageSync('token')
    }
  })
}
export function searchNews(data){
  return request({
    url:"/user/searchAnnouncement?title=",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    },
    data
  })
}