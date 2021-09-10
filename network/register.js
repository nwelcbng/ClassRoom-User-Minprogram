import request from "./request"

export default function(data){
  return request({
    url:"https://mockapi.eolinker.com/UxuXyaK16a145235f10811d33338546f9963a33084a524e/user/regist",
    method:"post",
    data
  })
}