export default function(config){
  return new Promise((resolve,reject) => {
    wx.request(
      {
        url: config.url,
        method:config.method || 'get',
        data:config.data || [],
        timeout:config.timeout,
        header:config.header,
        success: res => {
          resolve(res.data)
        },
        fail: err => {
          reject(err);
        }
    }
    )    
  }) 
}