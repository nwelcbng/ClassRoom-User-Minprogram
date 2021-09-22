import request from "./request"

export function submit(data){
  return request({
    url:"https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/updateInfo",
    method:"put",
    header:{Cookie:wx.getStorageSync('token')},
    data
  })
}

export function getUserinfo(data){
  return request({
    url:"https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/getUserInfo",
    method:"get",
    header:{Cookie:wx.getStorageSync('token')},
    data
  })
}