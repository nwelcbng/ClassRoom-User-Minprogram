import request from "./request"
export function getNews(){
  return request({
    url:"https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/getAnnouncements",
    header:{Cookie:wx.getStorageSync('token')}
  })
}
export function searchNews(data){
  return request({
    url:"https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/getAnnouncements",
    header:{Cookie:wx.getStorageSync('token')},
    data
  })
}