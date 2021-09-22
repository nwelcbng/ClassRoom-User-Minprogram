import request from "./request"

export function refresh(data){
  return request({
    url:'https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/getClassStatusByDate',
    header:{Cookie:wx.getStorageSync('token')},
    data
  })
}

export function reserve(data){
  return request({
    url:'https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/subscribe',
    method:"post",
    header:{Cookie:wx.getStorageSync('token')},
    data
  }) 
}