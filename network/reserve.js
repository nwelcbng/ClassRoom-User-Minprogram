import request from './request'

export function getReserve(){
  return request({
    url:'/user/getSubscribeClass',
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      'Cookie':wx.getStorageSync('token')
    },
  })
}