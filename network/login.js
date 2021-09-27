import request from "./request"

export default function(data){
  return request({
    url:"/user/login",
    header:{
      "content-type": "application/x-www-form-urlencoded; charset-UTF-8"
    },
    method:"post",
    data
  })
}