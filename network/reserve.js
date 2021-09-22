import request from './request'

export function getReserve(){
  return request({
    url:'https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/getSubscribeClass',
    header:{Cookie:wx.getStorageSync('token')}
  })
}