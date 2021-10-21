import request from "./request"

export function submit(data){
  console.log(wx.getStorageSync('token'))
  return request({
    url:"/user/updateInfo",
    method:"PUT",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    },
    data
  })
}

export function getUserinfo(){
  return request({
    url:"/user/getUserInfo",
    method:"get",
    header:{
      'Content-Type':'application/x-www-form-urlencoded',
      Authorization:wx.getStorageSync('token')
    }
  })
}