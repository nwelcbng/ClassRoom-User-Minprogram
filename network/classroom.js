import request from "./request"

export function searchClass(data){
  return request({
    url:"https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/getClassByPosition",
    header:{Cookie:wx.getStorageSync('token')},
    data
  })
}