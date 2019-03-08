import axios from 'axios'

axios.jsonp = (url, params) => {
  // 1 根据 URL和 params 拼接请求地址
  url += '?'
  for (let k in params) {
    url += k + '=' + params[k] + '&'
  }
  // 拼接callback
  const callbackName = 'itcast_' + (new Date() - 0)
  url += 'callback=' + callbackName
  //  动态创建script 标签
  const script = document.createElement('script')
  script.src = url
  document.head.appendChild(script)
  return new Promise((resolve, reject) => {
    //  给window 添加一个函数  就相当于 全局函数
    window[callbackName] = function(data) {
      // data 就是JSONP 接口返回的数据
      // 调用resolve 获取数据
      resolve(data)
      // 删除掉加给window 的属性
      delete window[callbackName]
      document.head.removeChild(script)
    }
  })
}
