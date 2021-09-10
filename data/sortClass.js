export default function sortClass(data){
  const result = new Array();
  data.forEach(item => {
    let index = result.findIndex((item2) => {
      return item2.position == item.position;
    })
    if(index != -1){
      console.log(index)
      result[index].class.push(item)
    }else{
      let instance = new building();
      instance.class.push(item)
      instance.position = item.position;
      result.push(instance)
      // result[item.position] = new position();
      // result[item.position].position = item.position;
      // result[item.position].class.push(item)
    }
  });
  console.log(result)
  return result;
}

function building(){
  this.position = new String();
  this.class = new Array();
}