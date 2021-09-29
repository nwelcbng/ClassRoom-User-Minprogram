export default function sortClass(data){
  const result = new Array();
  let map = new Map();
  map.set('材化大楼','caihudalou');
  map.set('智能大楼','zhinengdalou');
  map.set('信电大楼','xindiandalou');
  map.set('项南大楼','xiangnandalou');
  map.set('土建大楼','tujiandalou');
  map.set('瑞基大楼','ruijidalou');
  map.set('林世哲大楼','linshizhedalou');
  map.set('梁绳基大楼','liangshengjidalou');
  data.forEach(item => {
    let index = result.findIndex((item2) => {
      return item2.position == item.position;
    })
    if(index != -1){
      result[index].class.push(item)
    }else{
      let instance = new building();
      instance.class.push(item)
      instance.position = item.position;
      instance.image = map.get(item.position);
      result.push(instance)
    }
  });
  return result;
}

function building(){
  this.position = new String();
  this.class = new Array();
}