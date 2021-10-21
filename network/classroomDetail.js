import request from "./request"

export function refresh(data){
  return request({
    url:'/user/getClassStatusByDate',
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    },
    data
  })
}

export function reserve(data){
  return request({
    url:'/user/subscribe',
    method:"post",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    },
    data
  }) 
}