import request from "./request"
export function getSwiper(){
  return request({
    url:"http://152.136.185.210:7878/api/m5/home/multidata"
  })
}