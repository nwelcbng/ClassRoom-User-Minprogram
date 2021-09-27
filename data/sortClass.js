export default function sortClass(data){
  const result = new Array();
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
      result.push(instance)
    }
  });
  console.log(result)
  return result;
}

function building(){
  this.position = new String();
  this.class = new Array();
}