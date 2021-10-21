import request from "./request"

export function searchClass(data){
  return request({
    url:"/user/getClass",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    },
    data
  })
}

export function searchmohuClass(data){
  return request({
    url:"/user/getClassByPosition",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    },
    data
  })
}