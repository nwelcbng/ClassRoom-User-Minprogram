import request from "./request"

export default function(data){
  return request({
    url:"/user/regist",
    header:{
      'content-type':'application/x-www-form-urlencoded'
    },
    method:"POST",
    data:data
  })
}