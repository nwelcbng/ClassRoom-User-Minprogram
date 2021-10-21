const baseURL = 'https://www.ximple.icu/api';

export default function(config){
  return new Promise((resolve,reject) => {
    wx.request(
      {
        url:baseURL + config.url,
        method:config.method || 'get',
        data:config.data || [],
        timeout:config.timeout,
        header:config.header,
        timeout:5000,
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