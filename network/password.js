import request from "./request"

export default function (data){
  return request({
    url:"/user/updatePassword",
    method:"put",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      'Cookie':wx.getStorageSync('token')
    },
    data
  })
}
